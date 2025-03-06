import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css"; // Importing CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Smart City</h2>
      
      {/* Carousel Section */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img src="https://source.unsplash.com/800x400/?city,night" alt="Smart City at Night" />
          <p className="legend">Smart City at Night</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/800x400/?technology,city" alt="Smart Infrastructure" />
          <p className="legend">Smart Infrastructure</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/800x400/?transport,city" alt="Intelligent Transport" />
          <p className="legend">Intelligent Transport System</p>
        </div>
      </Carousel>

      {/* Smart City Details */}
      <div className="info-section">
        <h3>About Our Smart City</h3>
        <p>
          Our Smart City integrates cutting-edge technology to improve urban living. 
          From smart transportation and green energy to AI-powered services, we are 
          building a future-ready city for a better tomorrow.
        </p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>🚗 Smart Traffic & Transport System</li>
          <li>⚡ Renewable Energy & Smart Grid</li>
          <li>🌱 Eco-friendly Infrastructure</li>
          <li>🛡️ AI-based Security & Surveillance</li>
          <li>🏥 Smart Healthcare Facilities</li>
        </ul>
        
        <p>Visit <a href="https://smartcity.com" target="_blank" rel="noopener noreferrer">smartcity.com</a> for more details.</p>
      </div>
    </div>
  );
};

export default Home;
