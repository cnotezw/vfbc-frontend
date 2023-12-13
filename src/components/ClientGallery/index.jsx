import React from "react";

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import {ClientDialog} from "../ClientPopup";

import './styles.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: '0.625rem',
  background: 'rgba(72, 88, 64, 0.50)',
  maxHeight: '24.0625rem',
  height: '50vw',
  color: "white",
  fontSize: "2.125rem",
  fontWeight: 700,
  fontFamily: 'Montserrat',
  padding: 0,
  margin: 0,
  lineHeight: "2.556rem"
}));

function ClientGallery({ clients }) {
  const [open, setOpen] = React.useState(false);
  const [activeClient, setActiveClient] = React.useState(null);

  const handleClickOpen = (client) => {
    setActiveClient(client)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <div className="client-gallery-section">
        <Box
          sx={{ 
            width: "100%"
          }}
        >
          <Box
            sx={{ 
              width: '50vw', 
              fontSize: "4.688rem",
              fontFamily: 'Hurricane',
              fontWeight: 400,
            }}
          >
              Clients
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {clients.map((client, index) => (
                <Grid xs={2} sm={4} md={4} key={client.image + index}>
                  <Item
                    
                    style={{
                      backgroundImage: `url(${client.image})`,
                      position: 'relative',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column"
                    }}
                  >
                    <div className="card-overlay"></div>
                    <div className="client-title" onClick={() => handleClickOpen(client)}>{client.name}</div>
                  </Item>
                </Grid>
              ))}
            </Grid>
            <ClientDialog open={open} handleClose={handleClose} data={activeClient}  />
          </Box>
        </Box>
        <Box
          sx={{ 
            marginTop: '1.25rem', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            background: '#fff', 
            color: '#485840', 
            position: 'relative',
            width: '100vw'
          }}

          md={{ 
            marginTop: '5.25rem', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            background: '#fff', 
            color: '#485840', 
            position: 'relative',
            width: '100vw'
          }}
        >
          <div className="bird-container bird-container-one">
            <div className="bird bird-one"></div>
          </div>        
          <div className="bird-container bird-container-two">
            <div className="bird bird-two"></div>
          </div>  
          <div className="bird-container bird-container-three">
            <div className="bird bird-three"></div>
          </div> 
          <div className="bird-container bird-container-four">
            <div className="bird bird-four"></div>
          </div>
          
          <Box
            sx={{ 
              fontSize: "3.688rem",
              fontFamily: 'Hurricane',
              fontWeight: 400,
              lineHeight: "2.956rem",
              padding: '0 1rem',
              marginTop: '1rem'
            }}

            md={{ 
              fontSize: "4.688rem",
              fontFamily: 'Hurricane',
              fontWeight: 400,
              lineHeight: "4.956rem",
            }}
          >
              Exceptional Quality and Personalized Service
          </Box>
          <Box
            sx={{ 
              fontSize: "1.505rem",
              textAlign: "left",
              fontFamily: 'Montserrat',
              fontWeight: 400,
              lineHeight: "1.956rem",
              padding: '.5rem 1rem',
            }}

            md={{ 
              fontSize: "1.905rem",
              textAlign: "right",
              fontFamily: 'Montserrat',
              fontWeight: 400,
              lineHeight: "1.956rem",
              padding: '1rem 2rem'
            }}
          >
              Book Your Unforgettable Safari Experience Today
          </Box>
        </Box>
      </div>
    );
  }
  
  export default ClientGallery;