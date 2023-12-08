
import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import './styles.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: '0.625rem',
  background: 'rgba(72, 88, 64, 0.50)',
  height: '30vh',
  maxHeight: '24.0625rem',
  color: "white",
  fontSize: "2.125rem",
  fontWeight: 700,
  fontFamily: 'Montserrat',
  padding: 0,
  margin: 0,
  lineHeight: "2.556rem"
}));

const DestinationLatest = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
	return (
    <section className='destination-latest'>
      <Box
        sx={{
          fontSize: "2rem",
          fontFamily: 'Montserrat',
          fontWeight: 700,
          color: '#AB9370',
          margin: '1rem 0'
        }}
      >
          Latest
      </Box>
     
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {data.map((client, index) => (
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
              {/* <div className="box-overlay"></div>
              <div className="client-title">{client.name}</div> */}
            </Item>
            <div className="date-created">{client.date} {client.createdBy}</div>
            <div className="blog-title">{client.title}</div>
            <div className="client-title">
            {client.name}
            </div>
            {/* <div className="client-title">Read More</div> */}
            <Button 
              variant="outlined"
              className='view-btn'
            >
              {/* <Link to={action.link}>Visit {action.title}</Link> */}
              Read More
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
    </section>
	)
}

export default DestinationLatest;