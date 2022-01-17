import React from 'react';
import { useRouter } from 'next/router';
import { Typography, Grid, Button, Icon } from '@mui/material';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Divider } from '@mui/material';
import slugStyles from '../styles/Slug.module.css';

export const BodyContent = ({ path, children }) => {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        spacing={0}
        style={{
          width: '100%',
          padding: '0 1em 0',
        }}
      >
        <Grid item xs={12} style={{ paddingTop: '1em' }}>
          <Typography color='primary' variant='h5'>
            {path.includes('posts') && (
              <span
                className={slugStyles.backbutton}
                onClick={() => router.back()}
              >
                &lt; Back
              </span>
            )}
            {path.includes('topten') && <span>Top Ten Lists</span>}
            {!path.includes('topten') && !path.includes('posts') && (
              <span>RB.XYZ: A music blog about music</span>
            )}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
