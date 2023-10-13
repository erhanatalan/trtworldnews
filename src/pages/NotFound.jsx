// import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <Box sx={{display:"flex", flexDirection:"column", gap:"2rem", textAlign:"center", minHeight:"68vh", margin:"5rem"}}>
      <h1>Oops! You look lost.</h1>
      <h2>You can reach the correct address by clicking the links below.</h2>
      <Link to="/">NEWS</Link>
      <Link to="/live">LIVE</Link>
      <Link to="/video">VIDEOS</Link>
    </Box>
  );
};

export default NotFound;