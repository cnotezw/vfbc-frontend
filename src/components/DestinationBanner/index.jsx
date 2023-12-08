
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
  // height: '30rem',
  color: "white",
  fontSize: "2.125rem",
  fontWeight: 700,
  fontFamily: 'Montserrat',
  // padding: 0,
  margin: 0,
  lineHeight: "2.556rem"
}));

function DestinationBanner({ title, type, price, banner_image, action }) {
    return (
      <div className='destination-banner'>
        <Box
          sx={{ 
            width: "100%",
            display: 'flex',
            flexDirection: 'column'
          }}

          md={{ 
            width: "100%",
            display: 'flex'
          }}
        >
          <Box
            sx={{ 
              width: '100%', 
              fontSize: "4.688rem",
              fontFamily: 'Hurricane',
              fontWeight: 400,
            }}

            md={{ 
              width: '45%', 
              fontSize: "4.688rem",
              fontFamily: 'Hurricane',
              fontWeight: 400,
            }}
          >
            <Item
              className="banner-section"
            >
              <Box
                sx={{
                  fontSize: "2rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  color: '#AB9370',
               
                }}
              >
                  Also see
              </Box>
              <Box
                sx={{
                  fontSize: "3.688rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  color: '#fff',
                  margin: '2rem 0'
                }}

                md={{
                  fontSize: "4.688rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  color: '#fff',
                  margin: '2rem 0'
                }}
              >
                {title}
              </Box>
              <Box
                sx={{
                  fontSize: "4.688rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 300,
                  color: '#fff',
                  margin: '2rem 0'
                }}
              >
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
              <Box
                sx={{
                  margin: '1rem 0',
                  width: "100%",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                         <Box
                          sx={{
                          
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
                            
                            <Button 
                              variant="outlined"
                              className='selector-btn'
                            >
                              <Link to={action.link}>Visit {action.title}</Link>
                              
                            </Button>
                        </Box>
              </Box>
            </Item>
          </Box>

          <Box
            sx={{ 
              width: '100%',
            }}
            md={{ 
              width: '55%',
            }}
          >
            <Item
              style={{
                backgroundImage: `url(${banner_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat',
                borderRadius: '0.625rem 0rem 0rem 0.625rem',
              }}
            >
              {/* <div className="client-title">text 2</div> */}
            </Item>
          </Box>
        </Box>
      </div>
    );
  }

export default DestinationBanner;