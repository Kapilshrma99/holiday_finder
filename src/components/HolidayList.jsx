import React, { useContext } from 'react';
import countrycontext from '../context/countrycontext';

const HolidayList = () => {
  const { holiday } = useContext(countrycontext);

  return (
     <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-4">
            <div
              className="card-header text-white text-center"
              style={{
                background: 'linear-gradient(to right, #007bff, #00c6ff)',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            >
              <h3 className="mb-0">
                <i className="bi bi-calendar-event me-2"></i>Holiday List
              </h3>
            </div>
            <ul className="list-group list-group-flush">
              {holiday.length > 0 ? (
                holiday.map((data, id) => (
                  <li
                    key={id}
                    className="list-group-item d-flex justify-content-between align-items-center holiday-item"
                    style={{ transition: 'all 0.3s ease-in-out' }}
                  >
                    <div>
                      <strong>{data.name}</strong>
                      <br />
                      <small className="text-muted">{data.description}</small>
                    </div>
                    <span className="badge rounded-pill bg-info text-dark">
                      {data.date?.iso}
                    </span>
                  </li>
                ))
              ) : (
                <li className="list-group-item text-center text-muted">
                  No holidays found. Please select a country and year.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Extra CSS for hover effect */}
      <style>
        {`
          .holiday-item:hover {
            background-color: #f1f9ff;
            transform: scale(1.01);
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            border-left: 4px solid #00c6ff;
          }
        `}
      </style>
    </div>
  );
};

export default HolidayList;
