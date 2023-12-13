import React from "react";
import Box from '@mui/material/Box';
import ActivitiyCards from '../ActivitiyCards'
import { ActivityPopup } from "../ActivityPopup";

import './styles.css';

function DestinationActivities({ paragraph_one, paragraph_two, paragraph_three, list, title_two }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <section className='destination-activities'>
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
              fontWeight: 700,
              color: '#AB9370'
            }}
          >
              Activities
          </Box>
          <Box className="subtitle-one">
            {paragraph_one}
        </Box>
        </Box>
        <Box>
            <ActivitiyCards list={list} />
        </Box>
        <Box className="subtitle-two" >
              {title_two}
          </Box>
          <Box
            sx={{ 
              fontSize: "1.25rem",
              fontFamily: 'Montserrat',
              fontWeight: 400,
              lineHeight: '105%',
              letterSpacing:' 0.0625rem',
              textAlign: 'center',
              margin: '2rem auto',
            }}
          >
            {paragraph_two}
        </Box>
        <Box
            sx={{ 
              fontSize: "1.25rem",
              fontFamily: 'Montserrat',
              fontWeight: 400,
              lineHeight: '105%',
              letterSpacing:' -0.0625rem',
              textAlign: 'center',
              margin: '2rem auto',
            }}
          >
            {paragraph_three}
        </Box>
      </section>
    );
  }
  
  export default DestinationActivities;