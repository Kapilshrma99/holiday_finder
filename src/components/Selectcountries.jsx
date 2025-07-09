import React, { useContext, useState } from 'react';
import countrycontext from '../context/countrycontext';

const Selectcountries = () => {
  const { setYear, setCountrycode } = useContext(countrycontext);
  const [localyear, setLocalyear] = useState('');
  const [localCountry, setLocal] = useState('');

  const callApi = async () => {
    try {
      const res = await fetch(
        `https://calendarific.com/api/v2/countries?&api_key=I3UGH0mnqQbgufLVuWhPyykjXybr8AFD`
      );
      const data = await res.json();
      const countries = data.response.countries || [];

      const matched = countries.find(
        (item) =>
          item.country_name.toLowerCase() === localCountry.toLowerCase()
      );

      if (matched) {
        setCountrycode(matched["iso-3166"]);
      } else {
        console.log("Country not found.");
      }
    } catch (err) {
      console.error("Failed to fetch Countries", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setYear(localyear);
    callApi(); // Now works correctly because async is handled properly
  };

  return (
    <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow p-4 rounded-4 border-0">
        <h4 className="text-center mb-4 text-primary">
          <i className="bi bi-globe2 me-2"></i>Select Country & Year
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="yearInput" className="form-label fw-bold">Year</label>
            <input
              type="text"
              id="yearInput"
              className="form-control"
              placeholder="Enter year (e.g., 2025)"
              value={localyear}
              onChange={(e) => setLocalyear(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="countryInput" className="form-label fw-bold">Country Name</label>
            <input
              type="text"
              id="countryInput"
              className="form-control"
              placeholder="Enter country name (e.g., India)"
              value={localCountry}
              onChange={(e) => setLocal(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              <i className="bi bi-search me-2"></i>Fetch Holidays
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default Selectcountries;
