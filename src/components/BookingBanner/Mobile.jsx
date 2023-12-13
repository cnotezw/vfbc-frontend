import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import MultipleSelectDropdown from '../MultiSelectDropdown';
import ReactDateRangePicker from '../DateRangePicker';
import SelectGuestsDropdown from '../SelectGuestsDropdown';

const drawerBleeding = -1;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'relative',
  backgroundColor: 'transparent',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `100%`,
            overflow: 'visible',
            borderRadius: 8,
          },
        }}
      />
        <Box sx={{ textAlign: 'center', pt: 1, color: '#ffffff' }}>
            <Button onClick={toggleDrawer(true)} sx={{ color: '#ffffff', width: "100%", height: "100%" }}>Book Now</Button>
        </Box>

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <Puller  />
          <Typography sx={{ p: 2, color: '#fff', fontWeight: 700 }} onClick={toggleDrawer(true)}>Book Your Vacation</Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            background: "rgba(0,0,0,0.5)",
            paddingTop: '3.5rem'
          }}
        >
            <Box
              sx={{
                margin: "2rem 0 1rem 0"
              }}
            >
              <MultipleSelectDropdown />
            </Box>
            <Box
              sx={{
                margin: "1rem 0"
              }}
            ><ReactDateRangePicker /></Box>
            <Box
              sx={{
                margin: "1rem 0"
              }}
            ><SelectGuestsDropdown /></Box>
            
            
            <Button 
              variant="outlined"
              className='booking-btn'
            >
              Submit Booking
              
            </Button>
    
        </StyledBox>
   
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;