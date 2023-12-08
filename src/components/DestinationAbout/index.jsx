import React from "react";
import Box from '@mui/material/Box';

import AboutTabs from "../AboutTabs";

import './styles.css';

function About({ title, description, tabdata  }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <div className='destination-about'>
        <Box
          sx={{ 
            width: '100%',
          }}
        >
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
              About Us
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
          <Box
            sx={{ 
              // width: '100vw', 
              fontSize: "1.25rem",
              fontFamily: 'Montserrat',
              fontWeight: 400,
              lineHeight: '105%',
              letterSpacing:' -0.0625rem'
            }}
          >
            {description}          
          </Box>
        </Box>
        <Box>
            <AboutTabs tabdata={tabdata} />
        </Box>
      </div>
    );
  }
  
  export default About;