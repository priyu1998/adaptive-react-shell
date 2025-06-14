import React from "react";
import "./css/AboutPage.css"; // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Discover who we are, what we do, and why we do it.</p>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image">
          <img src="https://via.placeholder.com/400x300" alt="About" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to delivering innovative
            solutions that make a difference.
          </p>
          <p>
            Since our inception, we've grown into a trusted provider across
            industries, striving for excellence every step of the way.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-mission-vision">
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>
            To empower communities and businesses through cutting-edge
            technology and compassionate service.
          </p>
        </div>
        <div className="mission-box">
          <h3>Our Vision</h3>
          <p>
            To be a global leader in innovation, where our impact inspires
            progress and improves lives.
          </p>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {[1, 2, 3].map((i) => (
            <div className="team-member" key={i}>
              <img src="https://via.placeholder.com/120" alt="Team" />
              <h4>Member {i}</h4>
              <p>Role Title</p>
            </div>
          ))}
        </div>
      </section>
      */}
    </div>
  );
};