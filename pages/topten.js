import Head from 'next/head';
import List from '@mui/material/List';
import Image from 'next/image';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import topStyles from '../styles/Top.module.scss';
import { Fragment } from 'react';

import Typography from '@mui/material/Typography';
import { getTopTen } from '../utils/contentful-helper';

export async function getStaticProps() {
  const topTen = await getTopTen();
  return {
    props: {
      topTen: topTen.assetCollection.items,
    },
  };
}

export default function topten({ topTen }) {
  return (
    <>
      <Head>
        <title>RB.XYZ - Top Ten</title>
      </Head>
      <div>
        <Typography variant='h3' gutterBottom component='div'>
          Top 10 Lists
        </Typography>
        <br></br>
        <Typography
          variant='h4'
          gutterBottom
          component='div'
          style={{ textDecoration: 'underline' }}
          className='blue'
        >
          Albums
        </Typography>
        <Typography variant='caption' component='div' style={{ color: 'gray' }}>
          (In no order)
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {topTen.map((element, idx) => (
            <Fragment key={idx}>
              <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                  <Image
                    alt='Cover art'
                    src={element.url}
                    height={100}
                    width={100}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={element.title}
                  className={topStyles.topName}
                />
              </ListItem>
              <Divider variant='middle' component='li' />
            </Fragment>
          ))}
        </List>
      </div>
    </>
  );
}
