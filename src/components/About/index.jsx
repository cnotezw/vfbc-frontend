import React from "react";
import Box from '@mui/material/Box';
import './styles.css';

function About({ logo }) {
    return (
      <div className="about-section">
        <Box className="about-container" >
          <Box
            className="title"
            component="h1"
          >
              About Us
          </Box>
          <Box
            sx={{  
              fontSize: "1.2rem",
              fontFamily: 'Montserrat',
              fontWeight: 400,
              lineHeight: '1.878rem',
              maxWdth: "100vw",
              padding: '1rem'
            }}

            md={{ 
              fontSize: "1.7rem",
              fontFamily: 'Montserrat',
              fontWeight: 400,
              lineHeight: '1.878rem'
            }}
          >
              Contact Victoria Falls Bush Camps today to book your unforgettable safari experience. We offer a variety of packages to suit your budget and interests. Whether you're looking for a luxurious stay at Imbabala Lodge or an adventurous camping experience on Katombora Islands, we have the perfect safari experience for you.
          </Box>
        </Box>
        <Box
          className="logo-container"
        >
            {logo && <img src={logo} alt=""/>}
        </Box>
      </div>
    );
  }
  
  export default About;