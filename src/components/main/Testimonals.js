import React from 'react';
import '../../styles.css';

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
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="rating">
              {/* Placeholder for star ratings */}
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <div className="user-profile">
              {/* Placeholder for user profile photo */}
              <img src={testimonial.photo} alt={`${testimonial.user}'s profile`} className="photo" />
              <p>{testimonial.user}</p>
            </div>
            <p className="review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
