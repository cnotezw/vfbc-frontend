import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import About from '../../components/About';
import ClientGallery from '../../components/ClientGallery';
import DestSelector from '../../components/DestSelector';
import PartnersSlider from '../../components/PartnersSlider';

import logo from '../../assets/logos/logo-upright.png';

const clients = [
  {
    name: 'Honeymooners',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1699174220/VFBC%20WEBSITE%20PICS/Pictures/002A1557_1_aqivsz'
  },
  {
    name: 'Fishermen',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1691076496/vhakacha/Victoria_Falls/Vic_Falls/Fishing%20Camps/Livingstone%27s%20Adventure%20Fishing%20Trips/page11-5-1334x1000_qzq43s'
  },
  {
    name: 'Campers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300411/VFBC%20WEBSITE%20PICS/Pictures/002A2937_afi58c'
  },
  {
    name: 'Birdwatchers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1699174220/VFBC%20WEBSITE%20PICS/Pictures/image_7_umly4e'
  },
  {
    name: 'Hikers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298191/VFBC%20WEBSITE%20PICS/Pictures/002A1758_wbl6gc'
  },
  {
    name: 'Adventure seekers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300413/VFBC%20WEBSITE%20PICS/Pictures/002A0613_wsaxww'
  }
]

const header = {
  intro: "Welcome to",
  title: " Victoria Falls",
  subtitle: " Bush Camps",
  heroHeader: {
    title: "Experience the wilderness",
    description: "Allow us to take you to our hidden gems, and heritage sites that tell our long and amazing story. Allow us to introduce you to the real Zimbabwe. Come journey with us. There's so much more to see."
  }
}

function Home({ sectionHeader }) {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {

    // axios.get('http://localhost:1337/api/landing-pages?populate=%2A', {
    //   headers: {
    //     'Authorization': `Bearer 9796f074c975694fb46024ecdf38c6c950b4dc4f0932cda956a0f34821b819928f7bb1739fe810303f182be35efff8d013f024c0968ba398af6c0bb6bb03c0c0999a93a6457e7c913e5852b1c085b4fc7c79b33ce7ed60358b74a7d35f4a1519371e4f954f17d71936beb7130386ca2fa1a1cbcaaa15aad52119c63e56e7fed3`
    //   }
    // })
    // .then((res) => {
    //   console.log(res.data.data[0].attributes)
    //   setHeaderData(res.data.data[0].attributes);
    // })
    // .catch((error) => {
    //   console.error(error)
    // })

  }, []);

  useEffect(() => {
    console.log("sectionHeader:: ", sectionHeader)
    }, [sectionHeader]);
    return (
      <div style={{ height: '100%'}}>
              <Header
                intro={header.intro} 
                title={header.title} 
                subtitle={header.subtitle} 
                hero={header.heroHeader} 
                image={`https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1701799983/VFBC%20WEBSITE%20PICS/Victoria-Fall-9mb_kxj1f4`}
                heroImage={`https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1701807264/VFBC%20WEBSITE%20PICS/Isolation_Mode_2_hzvfx6.png`}
                sectionHeader={sectionHeader}
              />
              <About logo={logo} />
              <ClientGallery clients={clients} />
              <DestSelector />
              <PartnersSlider />
              
      </div>
    );
  }
  
  export default Home;
  