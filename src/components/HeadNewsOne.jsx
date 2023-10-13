import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HeadNewsOne = ({news}) => {
    return (
        <Grid item lg={12} sx={{height:{xs:"628px", sm:"640px",md:"628px",lg:"732px",xl:"720px",xxl:"768px"}}}>
            <Link to={news[1]?.url}>
                <Box display="flex" flexDirection="column">
                    <img
                        src={news[1]?.urlToImage}
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
                        padding: "16px"
                    }}>
                        <Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <Typography variant="h5" style={{ fontSize: "24px", fontWeight: 700 }}>{news[1]?.title}</Typography>
                            <Typography variant="body2" style={{ fontSize: "16px" }}>{news[1]?.content}</Typography>
                            <Box style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                                <Avatar src={news[1]?.avatarUrl} alt="Author Avatar" style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                                <Typography variant="body2">{news[1]?.author}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Link>
        </Grid>
    )
}

export default HeadNewsOne