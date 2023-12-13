
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
  maxHeight: '14.0625rem',
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

const RelatedArticles = ({ data, destination }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("data ", data)
	return (
    <section className='related-articles'>
      <Box
        sx={{
          fontSize: "2rem",
          fontFamily: 'Montserrat',
          fontWeight: 700,
          color: '#AB9370',
          margin: '1rem 0',
          textAlign: "center"
        }}
      >
          Related Articles
      </Box>
     
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 12 }}>
        {data.map((client, index) => {
          if(index > 3) return
          return (
            <Grid xs={6} sm={3} md={3} key={client.image + index}>
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
                {/* <Link to={action.link}>Visit {action.title}</Link> */}
                
                <Link className='link' to={`/${destination}/blog/${slugify(client.title)}/${index}`}>
                  Read More
                </Link>
              </Button>
            </Grid>
          )
        })}
      </Grid>
    </Box>
    </section>
	)
}

export default RelatedArticles;