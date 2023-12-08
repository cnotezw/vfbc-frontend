
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import BlockOverlay from '../BlockOverlay';

import './styles.css';

const containerStyle = {
  width: "100vw",
  display: "flex",
  margin: '7rem 0 3rem 0',
  overflow: 'hidden'
};

function DestinationSelector() {
    return (
      <div className="container">
        <Box
          className='selector-btn-container'
          sx={{ 
            width: '45vw', 
            maxHeight: "30.563rem",
            height: "60vw",
            backgroundImage: `url(https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1695300413/VFBC%20WEBSITE%20PICS/Pictures/002A2935_r2wdaj)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            color: "#fff"
          }}
        >
          <BlockOverlay color='rgba(72, 88, 64, .5)' />
          <Button 
            variant="outlined"
            className='selector-btn'
          >
            <Link to='/katombora-islands'>Visit Katombora Islands</Link>
            
          </Button>
        </Box>
        <Box
            className='selector-btn-container'
              sx={{ 
                width: '55vw', 
                maxHeight: "30.563rem",
                height: "60vw",
                backgroundImage: `url(https://res.cloudinary.com/dtdbddo9o/image/upload/f_auto,q_auto/v1699218255/VFBC%20WEBSITE%20PICS/Imbabala/imbabala_3_i2i7ci)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
        >
          <BlockOverlay color='rgba(72, 88, 64, .5)' />
          <Button 
            variant="outlined"
            className='selector-btn'
          >
            <Link to='/imbabala-lodge'>Visit Imbabala Lodge</Link>
          </Button>
        </Box>
      </div>
    );
  }
  
  export default DestinationSelector;