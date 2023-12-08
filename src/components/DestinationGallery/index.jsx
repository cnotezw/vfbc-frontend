import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

export default function DestinationGallery({ data }) {
  return (
    <div className='destination-gallery'>
        <Box
          sx={{ 
            width: '100%',
          }}
        >
          <Box
            sx={{
              fontSize: "2rem",
              fontFamily: 'Montserrat',
              fontWeight: 700,
              color: '#AB9370',
              margin: '1rem'
            }}

            md={{
              fontSize: "2rem",
              fontFamily: 'Montserrat',
              fontWeight: 700,
              color: '#AB9370',
              margin: '1rem 4rem'
            }}
          >
              Gallery
          </Box>
        </Box>
        <Box>
            <Swiper
              slidesPerView={2.5}
              spaceBetween={5}
              freeMode={true}
              loop={true}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                  delay: 4000,
                  disableOnInteraction: true,
                }}
              modules={[FreeMode, Autoplay]}
              className="gallery-swiper"
            >
              {data.map(item => {
                return <SwiperSlide>
                          <div
                              className='gallery-item'
                              style={{
                                backgroundImage: `url(${item.image})`
                              }}
                          />
                      </SwiperSlide>
              })}
            </Swiper>
          </Box>

    </div>
  );
}