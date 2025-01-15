import React, { useContext, useEffect } from "react";
import B1 from "../assets/homepage2.webp";
import B2 from "../assets/homepage.jpg";
import productContext from "../context/productContext";
import "animate.css";

const Home = () => {
  const context = useContext(productContext);
  const { homeProduct, allHomeProduct } = context;

  useEffect(() => {
    allHomeProduct();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section position-relative">
        <img src={B1} alt="Hero Background" className="img-fluid w-100" />
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white display-4 fw-bold text-center animate__animated animate__fadeInDown">
            Welcome to Kartik Group
          </h1>
          <p className="text-white fs-5 text-center mb-4 animate__animated animate__fadeInUp">
            Empowering your success with innovation and dedication.
          </p>
          <button className="btn btn-primary btn-lg animate__animated animate__pulse animate__infinite">
            Explore Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 animate__animated animate__fadeIn">
            Why Choose Us
          </h2>
          <div className="row">
            {[
              { icon: "bi bi-check-circle", title: "Reliability", text: "Our services are dependable." },
              { icon: "bi bi-lightning-fill", title: "Speed", text: "Timely delivery of projects." },
              { icon: "bi bi-people-fill", title: "Customer Focus", text: "Our customers come first." },
            ].map((feature, index) => (
              <div className="col-md-4 text-center animate__animated animate__fadeInUp" key={index}>
                <i className={`${feature.icon} fs-1 text-primary`}></i>
                <h5 className="mt-3">{feature.title}</h5>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-5 animate__animated animate__fadeInUp">Featured Products</h2>
          <div className="row">
            {homeProduct.slice(0, 4).map((item) => (
              <div className="col-md-3 mb-4 animate__animated animate__fadeInUp" key={item._id}>
                <div className="card h-100 border-0 shadow-lg">
                  <div className="product-image-container position-relative overflow-hidden">
                    {/* Image with zoom-in/zoom-out animation */}
                    <img
                      src={`http://localhost:5000/uploads/${item.images[0]}`}
                      className="card-img-top product-image"
                      alt={item.title}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Rs. {item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-section py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-5 animate__animated animate__fadeIn">What Our Customers Say</h2>
          <div className="row">
            {[
              {
                text: "This service exceeded my expectations.",
                author: "Nabin Limbu",
              },
              {
                text: "A fantastic experience from start to finish!",
                author: "Anurag Adhikari",
              },
              {
                text: "Highly reliable and professional team.",
                author: "Anish Chaudhary",
              },
            ].map((testimonial, index) => (
              <div
                className="col-md-4 mb-4 animate__animated animate__fadeInUp"
                key={index}
              >
                <div className="card shadow-lg border-0 h-100 bg-secondary text-white">
                  <div className="card-body">
                    <p>"{testimonial.text}"</p>
                    <h6 className="mt-3">-{testimonial.author}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section py-5 bg-secondary text-white text-center">
        <h2>Find Us in Baneshwor, Kathmandu</h2>
        <p>Visit our office and experience our services firsthand.</p>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.316195207664!2d85.33418641506152!3d27.69320673241815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1916e4c345f1%3A0x7d9e459c6762e8f7!2sBaneshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <h5>Kartik Group</h5>
              <p>
                Kartik Group is dedicated to delivering top-notch services and
                products to meet your needs.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline">
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white text-decoration-none">
                    Terms of Service
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>© {new Date().getFullYear()} Kartik Group Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
