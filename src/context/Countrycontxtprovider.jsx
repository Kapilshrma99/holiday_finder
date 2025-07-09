import React, { useEffect, useState } from 'react';
import countrycontext from './countrycontext';

const Countrycontxtprovider = ({ children }) => {
  const [countrycode, setCountrycode] = useState('');
  const [year, setYear] = useState('');
  const [holiday, setHoliday] = useState([]);

  useEffect(() => {
    // Only run the fetch if both countrycode and year are not empty
    
    if (countrycode && year) {
      fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=I3UGH0mnqQbgufLVuWhPyykjXybr8AFD&country=${countrycode}&year=${year}`
      )
        .then((res) => res.json())
        .then((data) => setHoliday(data.response.holidays || []))
        .catch((err) => console.error("Failed to fetch holidays", err));
    }
    
    // fetchHoliday()/
  }, [countrycode, year]);

  return (
    <countrycontext.Provider value={{ setYear, setCountrycode, holiday }}>
      {children}
    </countrycontext.Provider>
  );
};

export default Countrycontxtprovider;
