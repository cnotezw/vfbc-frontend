import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { height } from '@mui/system';

export default function SwiperCarousel({ data }) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={false}
        pagination={false}
        loop={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {data.map((item, i) => {
            return <SwiperSlide key={item.original}>
                {/* <img src={item.original} alt="" /> */}
                <div
                    style={{
                        backgroundImage: `url(${item.original})`,
                        position: 'relative',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        height: '27.0625rem',
                        width: '100%',
                        borderRadius: '0.625rem',
                        }}
                />
                </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
