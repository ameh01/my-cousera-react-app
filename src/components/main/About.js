import React from 'react';

const About = () => {
  return (
    <section style={aboutStyle}>
      <h2>About Us</h2>
      <p style={textBoxStyle}>
        Welcome to The Little Lemon, where we strive to create a culinary experience that delights your taste buds and leaves you wanting more.
        Our passion for fresh and vibrant flavors is reflected in every dish we serve. As the owners, Adrian and Mario, we are dedicated to providing
        you with an exceptional dining experience.
      </p>
      <div style={ownersContainerStyle}>
        <div style={ownerStyle}>
          {/* Image placeholder for Adrian */}
          <img src="adrian-placeholder.jpg" alt="Adrian - Owner" style={ownerImageStyle} />
          <p>Adrian</p>
        </div>
        <div style={ownerStyle}>
          {/* Image placeholder for Mario */}
          <img src="mario-placeholder.jpg" alt="Mario - Owner" style={ownerImageStyle} />
          <p>Mario</p>
        </div>
      </div>
    </section>
  );
};

// Styles
const aboutStyle = {
  background: '#f9f9f9',
  padding: '50px 0',
  textAlign: 'center',
};

const textBoxStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  marginBottom: '20px',
};

const ownersContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
};

const ownerStyle = {
  flex: '0 0 calc(50% - 20px)',
  margin: '10px',
};

const ownerImageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '50%',
};

export default About;
