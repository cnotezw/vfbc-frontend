import React from 'react';

import BookingBanner from '../BookingBanner';

import locationIcon from '../../assets/icons/distance.svg';
import './styles.css';

const introStyle = {
  color: "white",
  fontSize: "6.25rem",
  textAlign: "center",
  fontWeight: 400,
  fontFamily: 'Hurricane',
  padding: 0,
  margin: 0,
  lineHeight: "4.556rem",
  zIndex: 10
};
const titleStyle = {
  color: "white",
  fontSize: "4rem",
  textAlign: "center",
  fontFamily: 'Montserrat',
  fontWeight: 700,
  padding: 0,
  margin: 0,
  lineHeight: "3.501rem",
  zIndex: 10,
  display: 'flex',
  alignItems: 'center'
};

const DestinationHeader = ({intro, title, logo, image, animation, starAnimation, destination}) => {
  const [ anime, setAnime ] = React.useState(null)
  React.useEffect(() => {
    if(animation){
      setInterval(() => {
        if(anime){
          setAnime(null)
        } else if(animation) {
          setAnime('star')
        }
      }, 10000)
    }

  }, [anime, animation])
	return (
    <header className='destination-header' style={{ backgroundImage: `url(${image})`}}>
      <div className="box-overlay"></div>
        {starAnimation && <div class={'star'}></div>}
        {/* <div class="star"></div> */}
        
        <div className="box-text">
          <h5>{intro}</h5>
          <h1>{title} </h1>
          <img src={logo} alt="" />
          <BookingBanner destination={destination} />
        </div>
    </header>
	)
}

export default DestinationHeader;