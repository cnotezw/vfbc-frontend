import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';

export default function DestinationReviews({ data }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log("windowWidth ", windowWidth)
  return (
    <div className='destination-reviews'>
        <Box
          sx={{
            fontSize: "2rem",
            fontFamily: 'Montserrat',
            fontWeight: 700,
            color: '#AB9370',
            margin: '1rem 0'
          }}
        >
            Reviews
        </Box>
        <Box>
            <Swiper
              slidesPerView={windowWidth > 680 ? 3 : 1}
              spaceBetween={10}
              loop={true}
              pagination={true}
              autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="gallery-swiper"
            >
              {data.map(item => {
                return <SwiperSlide>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "column",
                              width: '100%',
                            }}
                          >
                            <div
                              style={{
                                fontSize: '1rem',
                                fontWeight: '400',
                                fontFamily: 'Montserrat',
                                lineHeight: '1rem',
                                letterSpacing: '5%',
                                textAlign: 'center'
                              }}
                            >
                            {`${item.text}`}
                            </div>
                            <div
                              style={{
                                fontSize: '2rem',
                                fontWeight: '400',
                                fontFamily: 'Hurricane',
                                lineHeight: '1.778rem',
                                letterSpacing: '5%',
                                textAlign: 'justify',
                                color: '#AB9370',
                                margin: '1rem 0'
                              }}
                            >
                            {`${item.reviewer}`}
                            </div>
                          </div>
                      
                      </SwiperSlide>
              })}
            </Swiper>
          </Box>

    </div>
  );
}