import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HeadNewsPopular = ({ news }) => {
    const popularSection = (
        <Box>POPULAR</Box>
    );

    const newsItems = news.slice(3, 8).map((item, index) => (
        <div key={index}>
            <Link to={item.url} underline="none">
                <Grid item>
                    <Box display="flex" flexDirection="row">
                        <Box style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#ffffff",
                            color: "rgba(191, 195, 201, 1)",
                            padding: "16px",
                            fontSize: "48px",
                            fontWeight: "900",
                            fontFamily: "TRT",
                        }}>
                            {index + 1}
                        </Box>
                        <Box style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#ffffff",
                            color: "rgba(0, 0, 0, 1)",
                            padding: "16px"
                        }}>
                            <Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <Typography variant="p" style={{ fontSize: "16px" }}>{item.title}</Typography>
                                <Typography variant="body2" style={{ fontSize: "12px" }}>{item.author}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Link>
            {index < 4 && <hr className='h-line' />} {/* Son haberden sonra çizgi koymayın */}
        </div>
    ));

    return (
        <Grid item sm={12} md={5}>
            <Box display="flex" flexDirection="column" sx={{ gap: "0.2rem" }}>
                {popularSection}
                {newsItems}
            </Box>
        </Grid>
    );
}

export default HeadNewsPopular;
