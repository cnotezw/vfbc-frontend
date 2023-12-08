import React from "react";

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import './styles.css';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: '0.625rem',
  background: 'rgba(72, 88, 64, 0.50)',
  maxHeight: '24.0625rem',
  height: '30vh',
  color: "white",
  fontSize: "2.125rem",
  fontWeight: 700,
  fontFamily: 'Montserrat',
  margin: 0,
  
}));

function ActivitiyCards({ list }) {
    return (
      <Box sx={{ flexGrow: 1, marginTop: '1rem' }}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, md: 12 }}>
          {list.map((client, index) => (
            <Grid xs={2} sm={3} md={3} key={client.image + index}>
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
                xs={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  lineHeight: "1.356rem"
                }}

                md={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  lineHeight: "2.556rem"
                }}
              >
                <div className="card-overlay"></div>
                <div className="client-title">{client.name}</div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  
  export default ActivitiyCards;