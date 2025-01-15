import React from 'react';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f06, #ff9)',
        padding: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          animation: 'fadeIn 2s ease-out',
        }}
      >
        <h1
          style={{
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '20px',
            animation: 'slideIn 1s ease-out',
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '20px',
            transition: 'color 0.3s ease',
          }}
        >
          Welcome to <strong>[E commerce platform]</strong>, your one-stop destination for premium quality products and an unmatched shopping experience.
        </p>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '20px',
            transition: 'color 0.3s ease',
          }}
        >
          At <strong>[kartik-group company]</strong>, we are committed to bringing you the best products from around the globe, catering to your needs and preferences. Our user-friendly platform, secure payment options, and fast delivery services ensure a seamless shopping experience.
        </p>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '20px',
            transition: 'color 0.3s ease',
          }}
        >
          Whether you're looking for the latest trends, timeless classics, or everyday essentials, our carefully curated collections have something for everyone. We are passionate about providing exceptional customer service and building lasting relationships with our valued customers.
        </p>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.8',
            marginBottom: '20px',
            transition: 'color 0.3s ease',
          }}
        >
          Thank you for choosing <strong>[kartiK-group company]</strong>. We're excited to be a part of your shopping journey!
        </p>
      </div>
    </div>
  );
};

export default About;
