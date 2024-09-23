import React from 'react';
import './Hero.css'; // Ensure you have a corresponding CSS file for styling
// import first from "/home/ukijaffna/Documents/swappdf/swapSmartFrontend/src/assets/pexels-photo-3183197 (1).jpeg";
// import second from "/home/ukijaffna/Documents/swappdf/swapSmartFrontend/src/assets/learner-instructor-connection.png";
// import third from "/home/ukijaffna/Documents/swappdf/swapSmartFrontend/src/assets/large_hero_65e36021-61fe-4883-b510-f5f57bcce843.jpg";
// import fourth from "/home/ukijaffna/Documents/swappdf/swapSmartFrontend/src/assets/elementary-school-teacher.jpeg";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {/* <img src={first} alt="Hero" className="hero-image" /> */}
        <div className="hero-text">
          <h1>Secure Your Data</h1>
          <p>We minimize system risks with the best methodologies in cybersecurity.</p>
          <button className="explore-btn">Explore</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <div className="qa-container">
          <div className="qa-item">
            <h3>What is Skill Share?</h3>
            <p>Skill Share is a platform where you can learn and share skills with others.</p>
            {/* <img src={second} alt="Skill 1" className="skill-image" /> */}
          </div>
          <div className="qa-item">
            <h3>How does it work?</h3>
            <p>We connect learners with instructors and provide resources for skill development.</p>
            {/* <img src={third} alt="Skill 2" className="skill-image" /> */}
          </div>
          <div className="qa-item">
            <h3>Who can join?</h3>
            <p>Anyone with a passion for learning and teaching can join and benefit from Skill Share.</p>
            {/* <img src={fourth} alt="Skill 3" className="skill-image" /> */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-links">
          <div className="links-column">
            <a href="#link1">Home</a>
            <a href="#link2">About</a>
            <a href="#link3">Services</a>
            <a href="#link4">Contact</a>
            <a href="#link5">FAQ</a>
          </div>
          <div className="links-column">
            <a href="#link6">Blog</a>
            <a href="#link7">Careers</a>
            <a href="#link8">Privacy Policy</a>
            <a href="#link9">Terms of Service</a>
            <a href="#link10">Support</a>
          </div>
          <div className="links-column">
            <a href="#link11">Community</a>
            <a href="#link12">Events</a>
            <a href="#link13">Resources</a>
            <a href="#link14">Partners</a>
            <a href="#link15">News</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 smart swap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
