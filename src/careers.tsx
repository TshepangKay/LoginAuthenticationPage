import React from 'react';
import { useNavigate } from 'react-router-dom';

const Careers: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="white-container">
      <h1>Careers at Tshepang Tech</h1>
      <p>Join our team and help build the future of technology.</p>
      <section className="careers-section" id="careers">
        <h2 style={{ color: '#007bff' }}> Current Openings</h2>
        <p style={{ color: '#007bff' }}>Here are some of our current openings:</p>
        <ul className="job-list">
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3>Software Engineer</h3>
              <p>Location: Remote | Full-Time</p>
              <p>Responsibilities: Develop and maintain scalable software solutions.</p>
            </div>
            <button onClick={() => navigate('/Login')}>Apply</button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3>Cloud Architect</h3>
              <p>Location: New York, USA | Full-Time</p>
              <p>Responsibilities: Design and implement cloud infrastructure for clients.</p>
            </div>
            <button onClick={() => navigate('/Login')}>Apply</button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3>Data Scientist</h3>
              <p>Location: London, UK | Full-Time</p>
              <p>Responsibilities: Analyze data and build predictive models.</p>
            </div>
            <button onClick={() => navigate('/Login')}>Apply</button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Careers;