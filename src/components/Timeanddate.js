import React, { useState, useEffect } from 'react';
import Clock from 'react-clock'; // Import a third-party library for analog clock
import Calendar from 'react-calendar'; // Import a third-party library for the calendar
import 'react-clock/dist/Clock.css'; // Import the styles for the analog clock
//import 'react-calendar/dist/Calendar.css'; // Import the styles for the calendar

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const getFormattedTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
      <div>

        <Clock value={currentTime} renderNumbers={true} size={150} />
      </div>
      <div>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
    </div>
  );
};

export default DateTimeDisplay;
