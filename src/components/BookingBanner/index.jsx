import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import MultipleSelectDropdown from '../MultiSelectDropdown';
import ReactDateRangePicker from '../DateRangePicker';
import SelectGuestsDropdown from '../SelectGuestsDropdown';
import {BookingPopUp} from '../BookingPopUp';
import MobileBanner from './Mobile';
// import lineBG from '../../assets/line-bg.png'
import './styles.css';

// A custom hook to create a counter with increment and decrement functions
const useCounter = (initialValue, min, max) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };
  
  const reset = (resetValue) => {
    setValue(resetValue);
  };

  return [value, increment, decrement, reset];
};

function BookingBanner({ destination }) {
  const [openBooking, setOpenBooking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalGuests, setTotalGuests] = useState(0);

  const [dateRange, setDateRange] = useState([null, null]);
  const [focusedInputState, setFocusedInput] = useState(null);

  const [accommodationType, setAccommodationType] = useState([]);

    // Use the custom hook to create counters for adults, children, and infants
    const [adults, incrementAdults, decrementAdults, resetAdults] = useCounter(1, 1, 14);
    const [children, incrementChildren, decrementChildren, resetChildren] = useCounter(0, 0, 14 - adults);
    const [infants, incrementInfants, decrementInfants, resetInfants] = useCounter(0, 0, 5);

  const handleChangeAccomodation = (event) => {
    const {
      target: { value },
    } = event;
    setAccommodationType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubmit = (event) => {
      // Calculate the total number of guests
    setTotalGuests(adults + children);
    setLoading(true);
    setTimeout(() => {
      
      setOpenBooking(true)
      setLoading(false)
    }, 1000)
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    return (
      <div className='booking-banner-container'>
         <div className='booking-banner'>
            <div className='booking-title'>
              Book your vacation
            </div>
            <div className='booking-section'>
              <div className='booking-section-start'>
                <MultipleSelectDropdown handleChange={handleChangeAccomodation} accommodationType={accommodationType} />
                <ReactDateRangePicker dateRange={dateRange} setDateRange={setDateRange} focusedInputState={focusedInputState} setFocusedInput={setFocusedInput} />
                <SelectGuestsDropdown adults={adults} incrementAdults={incrementAdults} decrementAdults={decrementAdults} children={children} incrementChildren={incrementChildren} decrementChildren={decrementChildren} infants={infants} incrementInfants={incrementInfants} decrementInfants={decrementInfants} />
              </div>
              <Button className='booking-section-end' onClick={() => handleSubmit()} disabled={!accommodationType.length || !dateRange[0] || !dateRange[1]}>
                {loading ? "Opening Booking" : "Book Now"} {loading && <CircularProgress style={{ marginLeft: "10px", color: "#fff", width: "16px", height: "16px"}} />}
             </Button>
            </div>

            {windowWidth < 680 ? <MobileBanner /> : null}
          </div>
          {/* <img src={lineBG} alt="" className='booking-line-bg' /> */}
          <BookingPopUp 
            open={openBooking}   
            handleClose={() => {
              setOpenBooking(false);
              setTotalGuests(0);
              setDateRange([null, null]);
              setFocusedInput(null);
              setAccommodationType([]);
              resetAdults(1);
              resetChildren(0);
              resetInfants(0);
            }} 
            data={{
              name: "Booking", 
              description: "Please add your email address to confirm your booking.",
              accommodation: accommodationType,
              dateRange,
              adults,
              children,
              infants,
              totalGuests,
              destination
            }}
          />
      </div>
    );
  }
  
  export default BookingBanner;