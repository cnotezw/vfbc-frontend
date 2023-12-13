import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DestinationHeader from '../../components/DestinationHeader';
import DestinationAbout from '../../components/DestinationAbout';
import DestinationMap from '../../components/DestinationMap';
import DestinationActivities from '../../components/DestinationActivities';
import DestinationGallery from '../../components/DestinationGallery';
import DestinationReviews from '../../components/DestinationReviews';
import DestinationLatest from '../../components/DestinationLatest';
import DestinationBanner from '../../components/DestinationBanner';

import Loader from '../../components/Loader';

import { katombora_data } from './katombora_data';
import { imbabala_data } from './imbabala_data';

import logo from '../../assets/logos/logo-upright.png';

function Destination() {
  const { destination } = useParams();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ dest_data, set_dest_data ] = useState(null);
  const [ current_destination, set_current_destination ] = useState(null);
  const [ open, setOpen ] = useState(true);

  useEffect(() => {
    console.log("destination ", destination)
    if(destination !== current_destination){
      setOpen(true)
      set_dest_data(null)
   
    }
    setTimeout(() => {
      set_current_destination(current_destination)
      if(destination === 'imbabala-lodge'){
        set_dest_data(imbabala_data)
        setOpen(false)
      } else {
        set_dest_data(katombora_data)
        setOpen(false)
      }
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, 3000)
  }, [destination])

  

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
 
  }, []);
  if(!dest_data) return  <Loader logo={logo} open={open} direction={'left'} />
    return (
      <div>
       {/* <Loader logo={logo} open={open} direction={'left'} /> */}
        {dest_data ?
          <div>
            <DestinationHeader {...dest_data.header} starAnimation={destination === 'katombora-islands'} destination={destination} />
            <DestinationAbout {...dest_data.about} />
            <DestinationMap {...dest_data.map} title={dest_data.header.title} isMobile={windowWidth < 680} />
            <DestinationActivities {...dest_data.activities} />
            <DestinationGallery windowWidth={windowWidth} data={dest_data.gallery} />
            <DestinationReviews data={dest_data.reviews} />
            <DestinationLatest data={dest_data.latest} destination={destination}  />
            <DestinationBanner {...dest_data.banner} />
          </div>
        : ''}

      </div>
    );
  }
  
  export default Destination;
  