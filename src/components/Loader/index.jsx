import React from "react";
import Box from '@mui/material/Box';
import PawLoader from "../PawLoader";
import './styles.css';

function Loader({ logo }) {
    return (
      <Box
        className="logo-container fade-enter"
      >
        {logo && <img src={logo} alt=""/>}
        <PawLoader />
    </Box>
    );
  }
  
  export default Loader;