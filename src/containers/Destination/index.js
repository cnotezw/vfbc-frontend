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
  const [ dest_data, set_dest_data ] = useState(null)
  useEffect(() => {
    console.log("destination ", destination)
    setTimeout(() => {
      if(destination === 'imbabala-lodge'){
        set_dest_data(imbabala_data)
      } else {
        set_dest_data(katombora_data)
      }
    }, 5000)
  }, [destination])

  // Destination: {destination}
  if(!dest_data) return <Loader logo={logo} />
    return (
      <div className='fadeIn'>
        <DestinationHeader {...dest_data.header} />
        <DestinationAbout {...dest_data.about} />
        <DestinationMap {...dest_data.map} />
        <DestinationActivities {...dest_data.activities} />
        <DestinationGallery data={dest_data.gallery} />
        <DestinationReviews data={dest_data.reviews} />
        <DestinationLatest data={dest_data.latest}  />
        <DestinationBanner {...dest_data.banner} />
      </div>
    );
  }
  
  export default Destination;
  