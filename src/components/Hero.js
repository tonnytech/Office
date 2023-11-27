import React from 'react';
import Navbar from './Navbar';
import heroImage from '../Assets/first.png';
import './Hero.css';

const Hero = () => (
  <section className="heroMainContainer">
    <Navbar />
    <div className="heroIntroContainer">
      <div className="heroIntro">
        <div className="heroIntroHeader">
          <h3>Meet your</h3>
          <h2>New Office</h2>
        </div>
        <div className="heroParagraph">
          <p>
            Elevate your work with our premium
            co-working space—inspiring, flexible,
            and collaborative. Join us today!
          </p>
        </div>
        <div className="heroButtonContainer">
          <button type="button">
            Contact us
          </button>
          <button type="button">
            Book a tour
          </button>
        </div>
      </div>
      <div className="heroImageContainer">
        <div className="heroImage">
          <img src={heroImage} alt="heroImage" className="heroImage" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
