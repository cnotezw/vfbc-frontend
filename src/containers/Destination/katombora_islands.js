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
  const [ open, setOpen ] = useState(true);

  const [ current_destination, set_current_destination ] = useState(null);

  useEffect(() => {
    console.log("destination ", destination)
    if(destination !== current_destination){
      set_current_destination(destination)
      set_dest_data(null)
      if(destination === 'imbabala-lodge'){
        set_dest_data(imbabala_data)
        setOpen(false)
      } else {
        set_dest_data(katombora_data)
        setOpen(false)
      }
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

  }, [destination])

  

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
      <div>
       <Loader logo={logo} open={open} direction={'left'} />
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
  