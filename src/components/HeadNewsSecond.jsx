import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HeadNewsSecond = ({ news }) => {
    const newsItems = news.slice(2, 4).map((item, index) => (
        <Grid item sm={12} md={5} key={index}>
            <Box sx={{ margin: "1rem", display:"flex",
                flexDirection: {sm:"column" }
            }}>
                <Link to={item.url}>
                    <Box>
                        <img
                            src={item.urlToImage}
                            alt="Banner_Image"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
                        />
                        <Box style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#ffffff",
                            color: "rgba(0, 0, 0, 1)",
                            padding: "16px",
                        }}>
                            <Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <Typography variant="h5" style={{ fontSize: "24px", fontWeight: 700 }}>{item.title}</Typography>
                                <Typography variant="body1" style={{ fontSize: "16px", overflow: "hidden" }}>{item.content}</Typography>
                                <Box style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                                    <Avatar src={item.avatarUrl} alt="Author Avatar" style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                                    <Typography variant="body2">{item.author}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </Box>
        </Grid>
    ));

    return (
        <>
            {newsItems}
        </>
    );
}

export default HeadNewsSecond;

