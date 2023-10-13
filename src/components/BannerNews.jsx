import { Avatar, Box, Typography, Grid, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const BannerNews = ({ news, imageHeight, titleFontSize, contentFontSize, contentBoxWidth, contentBoxHeight }) => {
    const theme = useTheme()

    return (
        <Link to={news[0]?.url}>
            <Grid container>
                <Grid item xs={12}>
                    <img
                        src={news[0]?.urlToImage} alt="Banner_Image"
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            objectPosition: '50% 20%'
                        }}
                        sx={{height:{md:"320px", sm:"356px", xs:"284px"}}}
                    />
                </Grid>
                <Grid item sx={{ position: { lg: "absolute" }, margin:{lg:"8rem"} }} xs={12} lg={6}>
                    <Box lg={{position:"relative"}}>
                        <Box style={{
                            display: "flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems: "flex-start",
                            backgroundColor: theme.palette.bannerBlack,
                            color: "white",
                            padding: "16px",
                            width: contentBoxWidth,
                            height: contentBoxHeight
                        }}>
                            <Typography variant="h5" style={{ fontSize: titleFontSize, fontWeight: 700 }}>{news[0]?.title}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                <Avatar src={news[0]?.avatarUrl} alt="Author Avatar" style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                                <Typography variant="body2" style={{ fontSize: contentFontSize }}>{news[0]?.author}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Link>
    );
}

export default BannerNews;