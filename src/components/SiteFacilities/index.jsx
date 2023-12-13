import React, { useState } from "react";

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import SwiperCarousel from '../SwiperCarousel';
import './styles.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  borderRadius: '0.625rem',
  // minHeight: '24.0625rem',
  height: 'auto',
  fontWeight: 700,
  fontFamily: 'Montserrat',
  overflow: 'hidden'

}));

const facilityCategories = [
  {
    title: "7 Luxury Tents",
    images: [
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300418/VFBC%20WEBSITE%20PICS/Pictures/002A0947_2_djz8ih",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300413/VFBC%20WEBSITE%20PICS/Pictures/002A2935_r2wdaj",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298715/VFBC%20WEBSITE%20PICS/Pictures/002A2305_nsza22",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298711/VFBC%20WEBSITE%20PICS/Pictures/002A2294_t82pyn",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298706/VFBC%20WEBSITE%20PICS/Pictures/002A2216_nf3pnw",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298705/VFBC%20WEBSITE%20PICS/Pictures/002A2211_raxx7e",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ]
  },
  {
    title: "Full Bar Facilities",
    images: [
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300213/VFBC%20WEBSITE%20PICS/Pictures/002A2824_d9qy91",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300196/VFBC%20WEBSITE%20PICS/Pictures/002A2724_p261jx",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300204/VFBC%20WEBSITE%20PICS/Pictures/002A2769_desrub",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300214/VFBC%20WEBSITE%20PICS/Pictures/002A2837_nohd6o",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ]
  },
  {
    title: "Boma Area",
    images: [
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300209/VFBC%20WEBSITE%20PICS/Pictures/002A2798_ewllyb",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300407/VFBC%20WEBSITE%20PICS/Pictures/002A2877_bezvtm",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300407/VFBC%20WEBSITE%20PICS/Pictures/002A2919_qjd1xb",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ]
  },
  {
    title: "Spa",
    images: [
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695299457/VFBC%20WEBSITE%20PICS/Pictures/002A2574_d6udmq",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695299448/VFBC%20WEBSITE%20PICS/Pictures/002A2528_hjkb05",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      }
    ]
  },
  {
    title: "Bathroom Facilities",
    images: [
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695297262/VFBC%20WEBSITE%20PICS/Pictures/002A0681_cddnhn",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695297258/VFBC%20WEBSITE%20PICS/Pictures/002A0660_byr1lk",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695297264/VFBC%20WEBSITE%20PICS/Pictures/002A0678_tesuyf",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ]
  }
];

function SiteFacilities({ title, facilities }) {
    const [sliderImages, setSliderImages] = useState(facilities[0].images);
    const [activeFacility, updateActiveFacility] = useState(0);

    const setActiveFacility = (facility, i) => {
      updateActiveFacility(i)
      setSliderImages(facility.images)

      console.log(i)
    }

    React.useEffect(() => {
      setSliderImages(facilities[0].images)
    }, [facilities])
    return (
      <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        <Grid xs={2} sm={4} md={4}>
            <Item
              style={{
                position: 'relative',
                background: '#F6F4F1'
              }}
            >
              {/* <div className="about-overlay"></div> */}
              <h2 className="about-facilities">{title}</h2>
              <ul className="about-facilities-list">
                {facilities.map((facility, i) => {
                  return  <li 
                            key={facility.title} 
                          >
                              <div 
                                onClick={() => setActiveFacility(facility, i)}
                                style={{
                                  fontWeight: activeFacility === i ? 'bold' : ''
                                }}
                              >
                                  {facility.title}
                              </div>
                          </li>
                })}
              </ul>
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item
              style={{
                position: 'relative',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                // height: '100%',
                maxHeight: "25.0625rem",
              }}
            >
              <SwiperCarousel data={sliderImages} />
            </Item>
          </Grid>
      </Grid>
    </Box>
    );
  }
  
  export default SiteFacilities;