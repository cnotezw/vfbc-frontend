import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


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

import ItemsList from './ActivityList';

import './styles.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export function ClientSlider({ open, handleClose }) {


  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </React.Fragment>
  );
}

export function ClientDialog({open, handleClose, data}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  

  
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
             style={{
                 paddingTop: "5rem",
                 fontSize: "3.688rem",
                 fontFamily: 'Hurricane',
                 fontWeight: 400,
                 paddingBottom: 0
               }}
            id="responsive-dialog-title">
             {data.name}
           </DialogTitle>
           <DialogContent>
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
             <ItemsList data={data.todo} />
           </DialogContent>
           <DialogActions>
             {/* <Button autoFocus onClick={handleClose}>
               Disagree
             </Button> */}
            <Button onClick={handleClose} className="popup-close-button" autoFocus>
               Close
             </Button>
           </DialogActions>
         </Dialog>
        : ""}
     
      </React.Fragment>
    );
  }