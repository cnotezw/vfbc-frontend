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
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1699174220/VFBC%20WEBSITE%20PICS/Pictures/002A1557_1_aqivsz',
    description: "Victoria Falls Katombora Island is a luxurious honeymoon destination located on the Zambezi River. The island is blanketed in lush vegetation and offers stunning views of the Victoria Falls. Romantic activities include exploring hidden coves, swimming in the crystal-clear waters, and picnicking under the shade of ancient baobabs.",
    todo: [
      {
        name: 'Breakfast by the Zambezi',
        description: "As the sun rises, painting the sky with vibrant hues of orange and pink, you enjoy a delicious breakfast prepared by your personal chef. The fresh fruit, pastries, and coffee are only surpassed by the incredible view and the feeling of peace and tranquility that washes over you. This is breakfast by the Zambezi River, an experience that will stay with you forever.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298689/VFBC%20WEBSITE%20PICS/Pictures/002A2094_zhwbnl"
      },
      {
        name: 'Lunch in the whispers of the wind',
        description: "As the sun rises, painting the sky with vibrant hues of orange and pink, you enjoy a delicious breakfast prepared by your personal chef. The fresh fruit, pastries, and coffee are only surpassed by the incredible view and the feeling of peace and tranquility that washes over you. This is breakfast by the Zambezi River, an experience that will stay with you forever.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298169/VFBC%20WEBSITE%20PICS/Pictures/002A1563_oigyaq"
      },
      {
        name: 'Dinner under the stars',
        description: "As the sun rises, painting the sky with vibrant hues of orange and pink, you enjoy a delicious breakfast prepared by your personal chef. The fresh fruit, pastries, and coffee are only surpassed by the incredible view and the feeling of peace and tranquility that washes over you. This is breakfast by the Zambezi River, an experience that will stay with you forever.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300191/VFBC%20WEBSITE%20PICS/Pictures/002A2696_xczytt.jpg"
      },
      {
        name: 'Reignite the fire',
        description: "As the sun rises, painting the sky with vibrant hues of orange and pink, you enjoy a delicious breakfast prepared by your personal chef. The fresh fruit, pastries, and coffee are only surpassed by the incredible view and the feeling of peace and tranquility that washes over you. This is breakfast by the Zambezi River, an experience that will stay with you forever.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298168/VFBC%20WEBSITE%20PICS/Pictures/002A1570_mro3rz"
      }

    ]

  },
  {
    name: 'Fishermen',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1691076496/vhakacha/Victoria_Falls/Vic_Falls/Fishing%20Camps/Livingstone%27s%20Adventure%20Fishing%20Trips/page11-5-1334x1000_qzq43s',
    description: "The Zambezi River roared as a fisherman battled a majestic tigerfish. The rod sang under the powerful tug, and adrenaline surged through the fisherman's veins. The fight was fierce, the fish's scales flashing in the sun. Finally, with a triumphant cry, the fisherman conquered the beast, hoisting it onto the boat. This was no ordinary catch; it was a trophy earned on the mighty Zambezi, a victory etched in the memory of every true fisherman.",
    todo: [
      {
        name: "Tigerfish",
        description: "A large, predatory fish with sharp teeth and a ferocious appetite. It is known for its aggressive feeding behavior and powerful jaws.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Hydrocynus_vittatus_1.jpg/1024px-Hydrocynus_vittatus_1.jpg"
      },
      {
        name: "Nile Tilapia",
        description: "A popular food fish found throughout Africa. It is a relatively small fish with a deep body and a large mouth.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Oreochromis_niloticus_male_fish.JPG/1280px-Oreochromis_niloticus_male_fish.JPG"
      },
      {
        name: "Vundu",
        description: "A large catfish that can grow up to 2 meters in length. It is a bottom-feeder that scavenges for food on the riverbed.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Heterobranchus_longifilis.jpg/1280px-Heterobranchus_longifilis.jpg"
      },
      {
        name: "Bream",
        description: "A small, silvery fish that is found in large schools. It is a popular baitfish for anglers.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Oreochromis_mossambicus_fish_Mozambique_tilapia_male.jpg/1280px-Oreochromis_mossambicus_fish_Mozambique_tilapia_male.jpg"
      },
      {
        name: "Barbel",
        description: "A bottom-feeding fish with a long, whiskered snout. It is known for its ability to find food in the murky waters of the Zambezi River.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Clarias_gariepinus_2.jpg/1280px-Clarias_gariepinus_2.jpg"
      },
    ]
  },
  {
    name: 'Campers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300411/VFBC%20WEBSITE%20PICS/Pictures/002A2937_afi58c',
    description: "Katombora Island, nestled amidst the Zambezi River's roar, offered a unique camping experience. By the crackling campfire, bathed in the moonlight and the spray-painted rainbows, we shared stories and laughter amidst the chirping crickets and the awakening of the African night. Our campsite wasn't just a place to rest, but a gateway to the raw beauty of nature, a connection to the primal rhythm of the continent.",
    todo: [
      {
        name: "Whitewater Rafting",
        description: "Experience the thrill of whitewater rafting down the mighty Zambezi River. This is a must-do activity for any adrenaline junkie.",
        image: "https://www.zambezi.com/wp-content/uploads/2018/08/white-water-rafting-victoria-falls.jpg"
      },
      {
        name: "Canoeing",
        description: "Explore the Zambezi River at your own pace by canoe. This is a great way to see the local wildlife, including hippos, elephants, and crocodiles.",
        image: "https://www.adventures.com/wp-content/uploads/2019/03/canoeing-victoria-falls.jpg"
      },
      {
        name: "Bungee Jumping",
        description: "Take the plunge off the Victoria Falls Bridge, the world's highest bungee jump. This is not for the faint of heart, but it is an unforgettable experience.",
        image: "https://www.victoriafallsbungee.com/wp-content/uploads/2019/04/bungee-jumping-victoria-falls-bridge.jpg"
      },
      {
        name: "Elephant Safari",
        description: "Embark on a safari through the Zambezi National Park and see elephants up close. This is a great way to learn about these majestic creatures and their habitat.",
        image: "https://www.victoriafalls-elephant.com/wp-content/uploads/2019/05/elephant-safari-victoria-falls.jpg"
      },
      {
        name: "Sunset Cruise",
        description: "Relax and enjoy the stunning sunset over the Zambezi River on a sunset cruise. This is a great way to end a day of adventure.",
        image: "https://www.zambezi-sunset-cruises.com/wp-content/uploads/2019/06/sunset-cruise-victoria-falls.jpg"
      }
    ]
  },
  {
    name: 'Birdwatchers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1699174220/VFBC%20WEBSITE%20PICS/Pictures/image_7_umly4e',
    description: "Victoria Falls Opens in a new window Katombora Island, bathed in morning mist, welcomed me to a birdwatching paradise. The air thrummed with anticipation as I spotted a vibrant kingfisher, its plumage a jewel against the lush foliage. As I ventured deeper, a kaleidoscope of feathered friends unfolded. White-fronted bee-eaters flitted amongst wildflowers, and a grey heron stood poised in the shallows. The climax was witnessing a majestic African fish eagle soar above, its cry echoing through the landscape. Through my binoculars, I discovered a hidden world, each chirp and rustle revealing the beauty and diversity of the avian kingdom. Here, on Katombora Island, my lifelong love affair with birds began.",
    todo: [
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
      {
        name: 'Rock Pratincole',
        description: "The Rock Pratincole is a small, slender wader found in Africa and southern Asia. It has long wings and a forked tail, and is well-adapted to aerial insectivory. It breeds in colonies on cliffs and rocky outcrops, and migrates long distances to wintering grounds in Africa.",
        image: "https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1702117701/VFBC%20WEBSITE%20PICS/clients/rock-pratincole_wyhbzg"
      },
    ]
  },
  {
    name: 'Hikers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695298191/VFBC%20WEBSITE%20PICS/Pictures/002A1758_wbl6gc',
    description: "The rugged terrain of Katombora Island beckoned me forth, promising an adventure for the soul. With boots laced and backpack filled, I embarked on a hike through the island's heart, the Zambezi River's roar a constant companion. Each step was a discovery. Lush vegetation tickled my legs, vibrant orchids clung to ancient baobabs, and the air buzzed with unseen life. Sunbeams filtered through the emerald canopy, dappling the ground with a mosaic of light and shadow.",
    todo: [
      {
        name: "Go Swimming",
        description: "Take a refreshing dip in the crystal-clear waters surrounding the islands.",
        image: "https://example.com/katombora-islands-swimming.jpg"
    },
    {
        name: "Hike Through the Forest",
        description: "Explore the lush green forests on the islands and discover hidden waterfalls and viewpoints.",
        image: "https://example.com/katombora-islands-hiking.jpg"
    },
    {
        name: "Spot Wildlife",
        description: "Keep your eyes peeled for crocodiles, hippos, elephants, and other animals that call the Zambezi River home.",
        image: "https://example.com/katombora-islands-wildlife.jpg"
    },
    {
        name: "Enjoy a Picnic",
        description: "Find a secluded spot on the beach and enjoy a delicious picnic with stunning views of the Victoria Falls.",
        image: "https://example.com/katombora-islands-picnic.jpg"
    },
    {
        name: "Take a Boat Cruise",
        description: "Glide along the Zambezi River and soak in the breathtaking scenery surrounding the islands.",
        image: "https://example.com/katombora-islands-boat-cruise.jpg"
    }
    ]
  },
  {
    name: 'Adventure seekers',
    image: 'https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300413/VFBC%20WEBSITE%20PICS/Pictures/002A0613_wsaxww',
    description: "Katombora Island is a playground for adventure seekers, offering thrilling activities like whitewater rafting on the Zambezi River. The adrenaline rush continues with rappelling down towering cliffs and ziplining through the treetops, offering stunning views of the verdant landscape. But it's not all about the physical challenge. Katombora Island also provides a chance to reconnect with nature, sharing stories by the crackling campfire under the vast African sky illuminated by the Milky Way. ",
    todo: [
      {
        name: "White Water Rafting",
        description: "Experience the thrill of white water rafting down the Zambezi River. This exhilarating activity is not for the faint of heart, but it is an unforgettable experience.",
        image: "https://www.zambezirafting.com/wp-content/uploads/2020/02/Zambezi-River-Rafting-Victoria-Falls-Zimbabwe.jpg"
      },
      {
        name: "Bungee Jumping",
        description: "Take the plunge and bungee jump off the Victoria Falls Bridge, the highest commercial bridge bungee jump in the world. This is a once-in-a-lifetime experience that will leave you breathless.",
        image: "https://www.victoriafalls-bungee.com/wp-content/uploads/2017/07/Victoria-Falls-Bungee-Jump-Photo.jpg"
      },
      {
        name: "Gorge Swing",
        description: "Swing through the Batoka Gorge on a giant swing, reaching speeds of up to 100 km/h. This is a heart-stopping activity that is perfect for adrenaline junkies.",
        image: "https://www.victoriafalls-bungee.com/wp-content/uploads/2017/08/Gorge-Swing-Victoria-Falls-Photo.jpg"
      },
      {
        name: "Canoeing",
        description: "Explore the Zambezi River by canoe and get up close to the wildlife. This is a peaceful activity that is perfect for enjoying the stunning scenery.",
        image: "https://www.victoriafalls-guide.net/wp-content/uploads/2017/02/Canoeing-on-Zambezi-River-in-Victoria-Falls.jpg"
      },
      {
        name: "Hiking",
        description: "Hike to the top of the Victoria Falls for breathtaking views of the surrounding area. This is a challenging hike, but the rewards are worth it.",
        image: "https://www.victoriafallstourism.com/sites/default/files/styles/large/public/images/hiking%20victoria%20falls.jpg"
      }
    ]
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
      <div>
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
  