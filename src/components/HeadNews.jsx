import React from 'react';
import HeadNewOne from './HeadNewsOne';
import { Grid } from '@mui/material';
import HeadNewsPopular from './HeadNewsPopular';
import HeadNewsSecond from './HeadNewsSecond';

const HeadNews = ({ news }) => {

  return (
    <Grid container>
      <Grid item sx={{display:"flex", flexDirection:{md:"column", xs:"column", sm:"column",lg:"row" }}}  >
        <Grid item xs={12} lg={5} sx={{marginLeft:{lg:"1rem"}, marginRight:{lg:"1rem"}}}>
          <HeadNewOne news={news}/>
        </Grid>
        <hr className='v-line'/>
        <Grid item xs={12} lg={5} sx={{display:"flex", flexDirection:{xs:"column", md:"row" }}}>
          <HeadNewsSecond news={news}/>
          <hr className='v-line'/>
          <HeadNewsPopular news={news}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeadNews;

