import React, { useState } from 'react';
import './styles.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

const ReactDateRangePicker = ({ dateRange, setDateRange, focusedInputState, setFocusedInput }) => {
  // this.state = {
  //   startDate: null,
  //   endDate: null,
  //   focusedInput: null,
  // };
    return (
      <div className="react-date-range">
        {dateRange && <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          onDatesChange={({ startDate, endDate }) => { setDateRange([ startDate, endDate ])}}
          focusedInput={focusedInputState}
          onFocusChange={(focusedInput) => { setFocusedInput(focusedInput)}}
          startDatePlaceholderText="Checkin"
          endDatePlaceholderText="Checkout"
        />}
        
      </div>
    )
}

export default ReactDateRangePicker;
