
import React from "react";

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import chevron from '../../assets/icons/chevron-white.svg'
import './styles.css';

const Item = styled('img')(({  }) => ({
  width: '100%',
  height: 'auto',
  borderTop: '1rem solid #AB9370',
  borderBottom: '1rem solid #AB9370',
  // minHeight: '20rem'
}));

function DestinationMap({ mobile, desktop, title, isMobile }) {
    return (
      <div className='destination-map'>
        <Box>
          <Box className="title">
          <Box
            sx={{ 
              // width: '50vw', 
              fontSize: "2rem",
              fontFamily: 'Montserrat',
              fontWeight: 200,
              color: '#AB9370',
              lineHeight: '88.9%',
              letterSpacing: '-0.1rem'
            }}
          >
              Map
          </Box>
          <Box
            sx={{ 
              // width: '50vw', 
              fontSize: "2rem",
              fontFamily: 'Montserrat',
              fontWeight: 700,
              color: '#AB9370'
            }}
          >
              {title}
          </Box>
          </Box>
            <Item
            src={isMobile ? mobile : desktop}
              style={{
                // backgroundImage: `url(${url})`,
                // backgroundSize: "center",
                // backgroundPosition: "bottom",
                // backgroundRepeat: 'no-repeat',
              }}
            >
            </Item>
          </Box>
      </div>
    );
  }

export default DestinationMap;