import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import PawLoader from "../PawLoader";
import './styles.css';

function Loader({ logo }) {
    return (
      <Box
        className="loader-logo-container"
      >
        {logo && <img src={logo} alt=""/>}
        <PawLoader />
    </Box>
    );
  }

export default function TemporaryDrawer({ open, logo, direction }) {
  useEffect(() => {
    
  }, [open])

  return (
    <React.Fragment>
      <Drawer
        anchor={direction}
        open={open}
      >
        <Loader logo={logo} />
      </Drawer>
    </React.Fragment>
  );
}
