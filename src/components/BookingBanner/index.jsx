import MultipleSelectDropdown from '../MultiSelectDropdown';
import ReactDateRangePicker from '../DateRangePicker';
import SelectGuestsDropdown from '../SelectGuestsDropdown';
import MobileBanner from './Mobile';
// import lineBG from '../../assets/line-bg.png'
import './styles.css';

function BookingBanner() {
    return (
      <div className='booking-banner-container'>
         <div className='booking-banner'>
            <div className='booking-title'>
              Book your vacation
            </div>
            <div className='booking-section'>
              <div className='booking-section-start'>
                <MultipleSelectDropdown />
                <ReactDateRangePicker />
                <SelectGuestsDropdown />
              </div>
              <div className='booking-section-end'>
                Book Now
              </div>
            </div>

            <MobileBanner />
          </div>
          {/* <img src={lineBG} alt="" className='booking-line-bg' /> */}
      </div>
    );
  }
  
  export default BookingBanner;