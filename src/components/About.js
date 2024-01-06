import React from 'react';
import '../styles.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p className="highlight-text">
        Welcome to The Little Lemon, where we strive to create a culinary experience that delights your taste buds and leaves you wanting more.
        Our passion for fresh and vibrant flavors is reflected in every dish we serve. As the owners, Adrian and Mario, we are dedicated to providing
        you with an exceptional dining experience.
      </p>
      <div className="owners-container">
        <div className="owner">
          {/* Image placeholder for Adrian */}
          <img src="adrian-placeholder.jpg" alt="Adrian - Owner" className="owner-image" />
          <p>Adrian</p>
        </div>
        <div className="owner">
          {/* Image placeholder for Mario */}
          <img src="mario-placeholder.jpg" alt="Mario - Owner" className="owner-image" />
          <p>Mario</p>
        </div>
      </div>
    </section>
  );
};

export default About;
