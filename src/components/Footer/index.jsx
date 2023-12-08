import React from "react";
import { useLocation } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import AnimatedPaws from "../AnimatedPaws";
import AnimatedPawsKudu from "../AnimatedPawsKudu";
// import AnimatedPawsLion from "../AnimatedPawsLion";

import lineBg from '../../assets/Isolation_Mode.png';
import logo from '../../assets/logo-white.png';

import './styles.css';

function Footer() {
  let location = useLocation();
  const [locationUrl, setLocationUrl] = React.useState('/');
  React.useEffect(() => {
    // Google Analytics
    setLocationUrl(location.pathname)
  }, [location]);
    return (
      <Box
        sx={{ 
          padding: '0 1rem',
          background: locationUrl === '/' ? '#485840' : '#AB9370',
          height: 'auto',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}

        md={{ 
          padding: '0 4rem',
          background: locationUrl === '/' ? '#485840' : '#AB9370',
          height: 'auto',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
            sx={{ 
            fontSize: "2rem",
            fontFamily: 'Montserrat',
            fontWeight: 700,
            margin: '1.5rem 0'
          }}
        >
            Contact Us
        </Box>
        <Box sx={{ 
            flexGrow: 1,
            position: 'relative',
            // overflow: 'hidden'
          }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Grid xs={1} sm={4} md={4}>
              <Box
              >
                  <Box
                      sx={{ 
                      fontSize: "1.25rem",
                      fontFamily: 'Montserrat',
                      fontWeight: 400,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <RoomOutlinedIcon
                     sx={{ 
                      marginRight: '1rem'
                    }}
                    />
                      <div>
                        <Box
                            sx={{ 
                            fontSize: "1.25rem",
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                          }}
                        >
                            Address
                        </Box>
                        <Box
                          sx={{ 
                            fontSize: "1rem",
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                          }}
                          md={{ 
                            fontSize: "1.25rem",
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                          }}
                        >
                          5 Aintree Highlands, Harare
                        </Box>
                      </div>
                  </Box>
                  <Box
                      sx={{ 
                      margin: '1.5rem 0',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <DraftsOutlinedIcon
                      sx={{ 
                        marginRight: '1rem'
                      }} />
                      <div>
                        <Box
                            sx={{ 
                            fontSize: "1.25rem",
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                          }}
                        >
                            Email Us
                        </Box>
                        <Box
                          sx={{ 
                            fontSize: "1rem",
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                          }}

                          md={{ 
                            fontSize: "1.25rem",
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                          }}
                        >
                          info@victoriafallsbushcamps.com
                        </Box>
                      </div>
                  </Box>
                  <Box
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center'
                    }}
                  >
                    <CallOutlinedIcon
                      sx={{ 
                        marginRight: '1rem'
                      }} />
                      <div>
                      <Box
                          sx={{ 
                          fontSize: "1.25rem",
                          fontFamily: 'Montserrat',
                          fontWeight: 700,
                        }}
                      >
                          Call or Whatsapp
                      </Box>
                      <Box
                        sx={{ 
                          fontSize: "1.25rem",
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                        }}
                      >
                        + 263 772 897 952 <br />
                        + 263 783 822 433
                      </Box>
                      </div>
                  </Box>
              </Box>
        
            </Grid>
            <Grid xs={1} sm={4} md={4}>
              <Box
                  sx={{ 
                  fontSize: "1.25rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FacebookIcon
                  sx={{ 
                    marginRight: '1rem'
                  }}
                />
                <TwitterIcon
                  sx={{ 
                    marginRight: '1rem'
                  }}
                />
                <InstagramIcon
                  sx={{ 
                    marginRight: '1rem'
                  }}
                />
              </Box>
              <Box
                    sx={{ 
                    fontSize: "1.25rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '.5rem 0'
                  }}
                >
                  @victoriafallsbushcamps
              </Box>
              <Box
                  sx={{ 
                  fontSize: "1.25rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '1rem 0'
                }}
              >
                <Button 
                  variant="contained"
                  className='book-now-btn'
                >
                  Book Now
                </Button>
              </Box>
              <Box
                  sx={{ 
                  fontSize: "1.25rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '1rem 0',
                  flexDirection: 'column'
                }}
              >
                <div>Subscribe to our newsletter</div>
                <div className="wrapper" id="wrapper">
                  <div className="wrapper__content">
                    <form>
                      <input type="email" placeholder="Enter your email" required />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid
             xs={2} sm={4} md={4}
        
            
            >
              <Box
                   sx={{ 
                    display: "none"
                  }}
                    md={{ 
                    display: "block",
                    fontSize: "1.25rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'end',
                    flexDirection: 'column'
                  }}
                >
                <Box
                    sx={{ 
                    fontSize: "1.25rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                  }}
                >
                  <img src={logo} alt="" />
                </Box>
                <Box
                    sx={{ 
                    fontSize: "1.25rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                  }}
                >
                    Links
                </Box>
                <Box
                  sx={{ 
                    fontSize: "1.25rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                  }}
                >
                  Plan Your Trip
                </Box>
                <Box
                  sx={{ 
                    fontSize: "1.25rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                  }}
                >
                  Useful Information
                </Box>
                <Box
                  sx={{ 
                    fontSize: "1.25rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                  }}
                >
                  Blog
                </Box>
              </Box>
        
            </Grid>
          </Grid>
          {/* <AnimatedPaws /> */}
          <AnimatedPawsKudu />
          {/* <AnimatedPawsLion /> */}
        </Box>
        <div className="footer-image">
          <img src={lineBg}  alt="" />
        </div>
    </Box>
    );
  }
  
  export default Footer;