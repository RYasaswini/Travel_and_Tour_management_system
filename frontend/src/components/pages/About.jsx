import React from "react";
import "../../styles/about.css";



const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Explore The World</strong>, your trusted companion for discovering breathtaking destinations and unforgettable travel experiences.
        </p>
      </div>

      <div className="about-section">
        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            At Explore The World, our mission is to make travel accessible, affordable, and enjoyable for everyone. We strive to connect you with the beauty of the world and create moments that turn into lifelong memories.
          </p>
        </div>
        <div className="about-box">
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has the opportunity to explore and appreciate the diverse cultures, landscapes, and wonders around us.
          </p>
        </div>
      </div>

      <div className="about-highlights">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🌍 Wide range of destinations and packages</li>
          <li>💼 Expert travel consultants and guides</li>
          <li>💸 Affordable and transparent pricing</li>
          <li>🛡️ Reliable and secure booking system</li>
          <li>🎯 Personalized experiences tailored for you</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
