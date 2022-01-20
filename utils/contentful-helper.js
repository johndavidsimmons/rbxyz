import { gql, GraphQLClient } from 'graphql-request';
import { Config } from './Config';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

const preview = process.env.CONTENTFUL_PREVIEW == 'true' ? true : false;
const accessToken = preview
  ? process.env.PREVIEW_ACCESS_TOKEN
  : process.env.ACCESS_TOKEN;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});

export const getTopTen = async () => {
  const query = gql`
    {
      assetCollection(
        where: {
          contentfulMetadata: {
            tags_exists: true
            tags: { id_contains_all: ["top"] }
          }
        },
        preview: ${preview}
      ) {
        items {
          title
          size
          url
          width
          height
        }
      }
    }
  `;
  return graphQLClient.request(query);
};

export const getAllPosts = async () => {
  const query = gql`
    {
      blogPostCollection(preview: ${preview}) {
        total
        items {
          sys {
            id
          }
          title
          publishDate
          slug
          spotifyUri
        }
      }
    }
  `;
  return graphQLClient.request(query);
};

export const getTotalPostNumber = async () => {
  const query = gql`
    {
      blogPostCollection(preview: ${preview}) {
        total
      }
    }
  `;
  const response = await graphQLClient.request(query);
  const totalPosts = response.blogPostCollection.total
    ? response.blogPostCollection.total
    : 0;
  return totalPosts;
};

export const getPost = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      blogPostCollection(where: { slug: $slug }, preview: ${preview}) {
        items {
          title
          publishDate
          spotifyUri
          content {
            json
          }
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return graphQLClient.request(query, variables);
};

export const getPaginatedPosts = async (page) => {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip =
    skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

  const query = gql`
    {
      blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: publishDate_DESC, preview: ${preview}) {
        total
        items {
          sys {
            id
          }
          content {
            json
          }
          title
          publishDate
          slug
          spotifyUri
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);
  const paginatedPosts = response.blogPostCollection
    ? response.blogPostCollection
    : { total: 0, items: [] };

  return paginatedPosts;
};
