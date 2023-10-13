import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { getNews, clearNews } from "../features/newsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif";
import BannerNews from "../components/BannerNews";
import Opinion from "../components/Opinion";
import HeadNew from "../components/HeadNews";

const News = () => {
  const dispatch = useDispatch();
  const { news, error, loading } = useSelector((state) => state.news);
  const theme = useTheme();

  useEffect(() => {
    dispatch(getNews());

    // Cleanup fonksiyonu (componentWillUnmount)
    return () => {
      dispatch(clearNews());
    };
  }, [dispatch]);

  const isXXL = theme.breakpoints.up("xxl");
  const isXL = theme.breakpoints.up("xl");
  const isLG = theme.breakpoints.up("lg");
  const isMD = theme.breakpoints.up("md");
  const isSM = theme.breakpoints.up("sm");
  const isXS = theme.breakpoints.up("xs");
  let mainContent = null;

  if (isXXL) {
    mainContent = (
      <>
        <BannerNews news={news} />
        <hr className='h-line'/>
        <HeadNew news={news}/>
      </>
    );
  } else if (isXL) {
    mainContent = (
      <>
        <HeadNew news={news}/>
        <hr className='h-line'/>
        <BannerNews news={news} />
      </>
    );
  } else if (isLG) {
    mainContent = (
      <>
        <HeadNew news={news}/>
        <hr className='h-line'/>
        <BannerNews news={news} />
      </>
    );
  } else if (isMD) {
    mainContent = (
      <>
        <HeadNew news={news}/>
        <hr className='h-line'/>
        <BannerNews news={news} />
      </>
    );
  } else if (isSM) {
    mainContent = (
      <>
        <HeadNew news={news}/>
        <hr className='h-line'/>
        <BannerNews news={news} />
      </>
    );
  } else if (isXS) {
    mainContent = (
      <>
        <HeadNew news={news}/>
        <hr className='h-line'/>
        <BannerNews news={news} />
      </>
    );
  }

  return (
    <>
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={loadingGif} alt="Yükleniyor..." />
        </Box>
      )}
      {error && (
        <Typography variant="h2" color="error">
          {error}
        </Typography>
      )}
      <Opinion />
      {mainContent}
      {/* Varsayılan düzeni burada gösterin */}
    </>
  );
};

export default News;

