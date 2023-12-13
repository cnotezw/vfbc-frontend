import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import ResponsiveFullGallery from './FullGallery';

import './styles.css';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function DestinationGallery({ data, windowWidth }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if(open){
      setOpen(false);
    } else {
      setOpen(true);
    }
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='destination-gallery'>
        <Box
          sx={{ 
            width: '100%',
          }}
        >
          <Box className="title">
              Gallery
          </Box>
        </Box>
        <Box>
            <Swiper
              slidesPerView={windowWidth > 680 ? 2.5 : 2}
              spaceBetween={5}
              freeMode={true}
              loop={true}
              mousewheel={true}
              keyboard={true}
              // autoplay={{
              //     delay: 6000,
              //     disableOnInteraction: true,
              //   }}
              modules={[FreeMode]}
              className="gallery-swiper"
            >
              {data.map(item => {
                return <SwiperSlide>
                          <div
                              className='gallery-item'
                              style={{
                                backgroundImage: `url(${item.original})`
                              }}
                          />
                      </SwiperSlide>
              })}
            </Swiper>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: '1rem 0' }}>
                <Button className="destination-gallery-view-more" onClick={() => handleClickOpen()}>See All Pictures</Button>
            </Box>
          </Box>
          <ResponsiveFullGallery open={open} handleClose={handleClose} images={data}  />
    </div>
  );
}