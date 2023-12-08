import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import BlockOverlay from '../BlockOverlay'
import './styles.css';

const FullPageBackgroundWithText = ({ image, intro, title, subtitle, hero, heroImage }) => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const containerStyle = {
    height: "100%",
    width: "100vw",
  };

  const imageStyle = {
    backgroundImage: `url(${image})`,
  };

  const heroImageStyle = {
    width: "100vw",
    position: 'absolute',
    bottom: '-55%',

  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle} className="main-header">
        <BlockOverlay color='rgba(0,0,0, 0.5)' />
        <h5 className="title-intro">{intro}</h5>
        <h1 className="title">{title}</h1>
        <h1 className="title">{subtitle}</h1>
        <img src={heroImage} alt="" style={heroImageStyle} />
      </div>
      {/* <div className="hero-container" >
        
        <div className="header-hero title">
            {hero && hero.title}
        </div>
        <div
          className="header-hero description"
        >
            {hero && hero.description}
        </div>
      </div> */}
          <Box
        sx={{ display: 'flex', flexDirection: 'row', background: '#485840', color: '#fff', position: 'relative', padding: "0 .5rem"}}
        md={{ display: 'flex', flexDirection: "row", background: '#485840', color: '#fff', position: 'relative',  padding: "0 4rem"}}
      >
        
        <div className="header-hero title">
            {hero && hero.title}
        </div>
        <div
          className="header-hero description"
        >
            {hero && hero.description}
        </div>
      </Box>
    </div>
  );
};

export default FullPageBackgroundWithText;
// sx={{ height: '11.25rem', display: 'flex', flexDirection: 'row', background: '#485840', color: '#fff', position: 'relative', padding: "0 2.5rem"}}
// md={{ display: 'flex', flexDirection: "row", background: '#485840', color: '#fff', position: 'relative',  padding: "0 4rem"}}