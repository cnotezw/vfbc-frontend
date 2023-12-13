
import React from "react";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import chevron from '../../assets/icons/chevron-white.svg'
import './styles.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  height: "60vw",
  maxHeight: '30rem',
  color: "white",
  fontSize: "2.125rem",
  fontWeight: 700,
  fontFamily: 'Montserrat',
  margin: 0,
  lineHeight: "2.556rem"
}));

const Item_ = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  height: "50vw",
  maxHeight: '30rem',
  color: "white",
  fontSize: "2.125rem",
  fontWeight: 700,
  fontFamily: 'Montserrat',
  margin: 0,
  lineHeight: "2.556rem"
}));

function DestinationBanner({ title, type, price, banner_image, action }) {
    return (
      <Box
        className='destination-banner'
        >
          <Box className="section-one">
            <Box className="banner-title" >
                  Also see
            </Box>
            <div
              className="banner-section"
            >
       
              <Box className="title">
                {title}
              </Box>
              <Box className="title type">
                  {type}
              </Box>
              <Box
                sx={{
                  fontSize: "1.5rem",
                  fontFamily: 'Roboto',
                  fontWeight: 300,
                  color: '#fff',
                  margin: '1rem 0',
                  lineHeight: '28.13px'
                }}
              >
                  <img src={chevron} alt="" style={{ width: '.8rem'}} /> | Victoria Falls
              </Box>
              <Box className="lower-section">
                         <Box
                          sx={{
                            minWidth: "10rem"
                          }}
                        >
                            <Box
                              sx={{
                                fontSize: "1.5rem",
                                fontFamily: 'Roboto',
                                fontWeight: 300,
                                color: '#fff',
                                margin: ' 0',
                                lineHeight: '28.13px'
                              }}
                            >
                                From <strong>{price}</strong>
                            </Box>
                            <Box
                              sx={{
                                fontSize: "1.125rem",
                                fontFamily: 'Roboto',
                                fontWeight: 300,
                                color: '#fff',
                                margin: '0',
                                lineHeight: '12.09px'
                              }}
                            >
                                per person per night
                            </Box>
                        </Box>
                        <Button 
                          variant="outlined"
                          className='selector-btn'
                        >
                          <Link to={action.link}>Visit {action.title}</Link>
                          
                        </Button>
              </Box>
            </div>
          </Box>

          <Box className="section-two" >
            <Item
            className="image-section"
              style={{
                backgroundImage: `url(${banner_image})`,
              }}
            >
              {/* <div className="card-overlay"></div> */}
              {/* <div className="client-title">text 2</div> */}
            </Item>
          </Box>
        </Box>
    );
  }

export default DestinationBanner;