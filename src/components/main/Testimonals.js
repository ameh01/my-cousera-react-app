import React from 'react';

const testimonials = [
  {
    rating: 5,
    user: 'John Doe',
    photo: 'john-doe-photo.jpg',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    rating: 4,
    user: 'Jane Smith',
    photo: 'jane-smith-photo.jpg',
    review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section style={testimonialsStyle}>
      <h2>Testimonials</h2>
      <div style={testimonialContainerStyle}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={testimonialStyle}>
            <div style={ratingStyle}>
              {/* Placeholder for star ratings */}
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <div style={userProfileStyle}>
              {/* Placeholder for user profile photo */}
              <img src={testimonial.photo} alt={`${testimonial.user}'s profile`} style={photoStyle} />
              <p>{testimonial.user}</p>
            </div>
            <p style={reviewStyle}>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles
const testimonialsStyle = {
  background: '#f9f9f9',
  padding: '50px 0',
  textAlign: 'center',
};

const testimonialContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
};

const testimonialStyle = {
  flex: '0 0 calc(33.3333% - 20px)',
  margin: '10px',
  padding: '20px',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
};

const ratingStyle = {
  marginBottom: '10px',
};

const userProfileStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const photoStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '10px',
};

const reviewStyle = {
  fontSize: '16px',
};

export default Testimonials;
