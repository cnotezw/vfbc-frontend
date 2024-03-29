import React, { useState } from "react";
import "./styles.css";

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

  return [value, increment, decrement];
};

// A component to render a single row of the dropdown with a label, a counter, and a description
const GuestsDropdownRow = ({ label, value, increment, decrement, description }) => {
  return (
    <div className="guests-dropdown-row">
      <div className="guests-dropdown-label">{label}</div>
      <div className="guests-dropdown-counter">
        <button className="guests-dropdown-button" onClick={decrement}>
          -
        </button>
        <span className="guests-dropdown-value">{value}</span>
        <button className="guests-dropdown-button" onClick={increment}>
          +
        </button>
      </div>
      <div className="guests-dropdown-description">{description}</div>
    </div>
  );
};

// A component to render the guests dropdown
const GuestsDropdown = ({ maxOccupancy }) => {
  // Use the custom hook to create counters for adults, children, and infants
  const [adults, incrementAdults, decrementAdults] = useCounter(1, 1, maxOccupancy);
  const [children, incrementChildren, decrementChildren] = useCounter(0, 0, maxOccupancy - adults);
  const [infants, incrementInfants, decrementInfants] = useCounter(0, 0, 5);

  // Calculate the total number of guests
  const totalGuests = adults + children;

  // A function to toggle the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="guests-dropdown-container">
      <div className="guests-dropdown-header" onClick={toggleDropdown}>
        <span className="guests-dropdown-title">Guests</span>
        <span className="guests-dropdown-summary">
          {totalGuests} Guest{totalGuests > 1 ? "s" : ""}{infants > 0 ? `, ${infants} infant${infants > 1 ? "s" : ""}` : ""}
        </span>
      </div>
      {isOpen && (
        <div className="guests-dropdown-body">
          <GuestsDropdownRow
            label="Adults"
            value={adults}
            increment={incrementAdults}
            decrement={decrementAdults}
            description="Above 13"
          />
          <GuestsDropdownRow
            label="Children"
            value={children}
            increment={incrementChildren}
            decrement={decrementChildren}
            description="Ages 2-12"
          />
          <GuestsDropdownRow
            label="Infants"
            value={infants}
            increment={incrementInfants}
            decrement={decrementInfants}
            description="Under 2"
          />
          <div className="guests-dropdown-footer">
            {totalGuests} guest{totalGuests > 1 ? "s" : ""} maximum. Infants don’t count toward the number of guests.
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestsDropdown;
