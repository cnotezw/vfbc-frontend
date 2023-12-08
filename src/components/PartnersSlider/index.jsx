import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import './styles.css';

// import AnimatedPawsLion from "../AnimatedPawsLion";

import partner1 from '../../assets/client-logos/image1.png';
import partner2 from '../../assets/client-logos/image2.png';
import partner3 from '../../assets/client-logos/image3.png';
import partner4 from '../../assets/client-logos/image4.png';
// import partner5 from '../../assets/client-logos/image5.png';
import partner6 from '../../assets/client-logos/image6.png';
import partner7 from '../../assets/client-logos/image7.png';

const clients = [
    {
      image: partner1
    },
    {
      image: partner2
    },
    {
      image: partner3
    },
    {
      image: partner4
    },
    {
      image: partner6
    },
    {
      image: partner7
    }
  ];

function PartnersSlider({ logo }) {
    return (
      <div className="partners-section">
        <Box
          sx={{ 
          }}
        >
          <Box
            sx={{ 
              fontSize: "1.5rem",
              fontFamily: 'Montserrat',
              fontWeight: 700,
              marginBottom: '1.5rem'
            }}
          >
              Our Partners
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {clients.map((client, index) => (
                <Grid xs={2} sm={4} md={2} key={`${client.name}-${index}`}>
                  <img src={client.image} alt="" className="partner-logo" />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        {/* <AnimatedPawsLion /> */}
      </div>
    );
  }
  
  export default PartnersSlider;