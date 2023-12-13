
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import { slugify } from '../../utils';

import './styles.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  borderRadius: '0.625rem',
  background: 'rgba(72, 88, 64, 0.50)',
  height: '50vw',
  maxHeight: '24.0625rem',
  color: "white",
  fontSize: "2.125rem",
  fontWeight: 700,
  fontFamily: 'Montserrat',
  padding: 0,
  margin: 0,
  lineHeight: "2.556rem"
}));

function reduceString(str, x) {
    // Check if x is valid
    if (typeof x !== "number" || isNaN(x) || x < 0) {
      throw new Error("Invalid value for x. Please provide a positive integer.");
    }
  
    // Check if x is greater than the string length
    if (x > str.length) {
      return str;
    }
  
    // Use slice method to extract the first x characters
    return str.slice(0, x)  + '...';
}

const DestinationBlog = ({ data, info, destination }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
	return (
    <section className='destination-blog-grid'>
      <div className='destination-blog-grid-title'>
        <Box className='blog-grid-title' >
            {info.title}
        </Box>
          <div className='blog-quote'>
            <Box>
                {info.quote}
            </Box>
            <Box className="writer">
                {info.writer}
            </Box>
          </div>
      </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 8, sm: 8, md: 12 }}>
        {data.map((client, index) => (
          <Grid xs={4} sm={4} md={4} key={client.image + index}>
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
            <div className="blog-title">{reduceString(client.title, 50) }</div>
            {/* <div className="client-title">Read More</div> */}
            <Button 
              variant="outlined"
              className='view-btn'
            >
              <Link className='link' to={`/${destination}/blog/${slugify(client.title)}/${index}`}>
                Read More
              </Link>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
    </section>
	)
}

export default DestinationBlog;