import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import moment from 'moment';

import CircularProgress from '@mui/material/CircularProgress';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { deslugify } from '../../utils'

import './styles.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ariaLabel = { 'aria-label': 'description' };

export function BookingPopUp({open, handleClose, data}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [email, setEmail] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [bookingMade, setBookingMade] = React.useState(false);
    
    const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setBookingMade(true);
    }, 1000)
  };

    console.log("accommodation ", data.accommodation);
    console.log("dateRange ", data.dateRange);
    console.log("totalGuests ", data.totalGuests);
    return (
      <React.Fragment>
        {data ? 
           <Dialog
           fullScreen={fullScreen}
           open={open}
           onClose={handleClose}
           aria-labelledby="responsive-dialog-title"
           style={{
             zIndex: 998,
           }}
         >
           <DialogTitle
             sx={{
                 paddingTop: "1rem",
                 fontSize: "3.688rem",
                 lineHeight: "3.4rem",
                 fontFamily: 'Hurricane',
                 fontWeight: 400,
                 paddingBottom: 0,
                 position: "relative"
               }}

               md={{
                paddingTop: "1rem",
                fontSize: "3.688rem",
                fontFamily: 'Hurricane',
                fontWeight: 400,
                paddingBottom: 0
              }}
            id="responsive-dialog-title">
             {data.name}
           </DialogTitle>
           <DialogContent>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  margin: "1rem 0",
                  textTransform: "capitalize"
                }}
              >
                <strong>Destination:</strong> {deslugify(data.destination)}
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  margin: "1rem 0"
                }}
              >
                <strong>Accommodation:</strong> {data.accommodation.map((item, i) => {
                  return <span key={item + i} style={{ marginLeft: ".5rem"}}>{item} {i < data.accommodation.length - 1 ? "+" : ''}</span>
                })}
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  margin: "1rem 0"
                }}
              >
                <strong>Checkin:</strong> <span style={{ margin: "0 .5rem"}}>{moment(data.dateRange[0]).format("dddd d MMMM YYYY")}</span>
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  margin: "1rem 0"
                }}
              >
                <strong>Checkout:</strong> <span style={{ margin: "0 .5rem"}}>{moment(data.dateRange[1]).format("dddd d MMMM YYYY")}</span>
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  margin: "1rem 0"
                }}
              >
                <strong>Adults:</strong> <span style={{ margin: "0 .5rem"}}>{data.adults}</span>
                <strong>children:</strong> <span style={{ margin: "0 .5rem"}}>{data.children}</span>
                <strong>infants:</strong> <span style={{ margin: "0 .5rem"}}>{data.infants}</span>
              </Box>
              {bookingMade 
              ? <Box>
                    <Divider 
                      component="div"
                      style={{
                        margin: ".5rem 0"
                      }}
                    />
                    <DialogContentText
                          style={{
                            fontSize: "1.188rem",
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            color: "#000"
                          }}
                    >
                      Your Booking Has Been Successfully completed<strong>!</strong>
                    </DialogContentText>
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: '100%',
                        margin: "1rem 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                        <div class="icon icon--order-success svg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                            <g fill="none" stroke="#8EC343" stroke-width="2">
                              <circle cx="36" cy="36" r="35" style={{strokeDasharray:"240px, 240px", strokeDashoffset: "480px"}}></circle>
                              <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray:"50px, 50px", strokeDashoffset: "0px" }}></path>
                            </g>
                          </svg>

                        </div>
                    </Box>
                </Box> 
              : <Box>
                  <DialogContentText
                        style={{
                          fontSize: "0.888rem",
                          fontFamily: 'Montserrat',
                          fontWeight: 400,
                          color: "#000"
                        }}
                  >
                    {data.description}
                  </DialogContentText>
                  <Box
                    sx={{
                      width: 500,
                      maxWidth: '100%',
                      margin: "1rem 0"
                    }}
                  >
                    <TextField
                      fullWidth
                      id="outlined-controlled"
                      label="Email Address"
                      value={email}
                      type="email"
                      placeholder="Email"
                      inputProps={ariaLabel}
                      color="success"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </Box>
                </Box>}
           
           </DialogContent>
           <DialogActions sx={{ margin: "1rem"}}>
             {/* <Button autoFocus onClick={handleClose}>
               Disagree
             </Button> */}
             
             <Button onClick={handleClose} className="popup-close">
               Cancel
             </Button>
             {bookingMade 
             ?      <Button onClick={() => setBookingMade(false)} className="popup-finalize-button">
                      Reset
                    </Button> 
           :
                <Button onClick={() => handleSubmit()} className="popup-finalize-button" disabled={!email}>
                {loading ? "Making Booking..." : "Finalize Booking"}
                {loading && <CircularProgress style={{ marginLeft: "10px", color: "#fff", width: "16px", height: "16px"}} />}
              </Button>  }
        
           </DialogActions>
         </Dialog>
        : ""}
     
      </React.Fragment>
    );
  }