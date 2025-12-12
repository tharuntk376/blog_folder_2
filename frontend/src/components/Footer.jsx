import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import logo_img from "../Images/logo_food.jpg";
import social from "../Images/social_icon.png";
import call from "../Images/call.png";
import mail from "../Images/mail.png";
import location from "../Images/location.png";

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3 bg-dark text-light mt-5">
      <div className="container">
        <div className="row">
          {/* About / Logo */}
          <div className="col-md-3 mb-4">
            <img src={logo_img} alt="Logo" className="mb-3 footer-logo" />
            <p>
              We deliver fresh and tasty food to your doorstep. Quality and
              taste are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3 footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Menu
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3 footer-title">Contact Info</h5>
            <p>
              <img className="p-1" src={location} alt="Location" /> Chennai,
              India
            </p>
            <p>
              <img className="p-1" src={call} alt="Phone" /> +91 1234567890
            </p>
            <p>
              <img className="p-1" src={mail} alt="Email" /> food_231@gmail.com
            </p>
          </div>

          {/* Social / Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3 footer-title">Follow Us</h5>
            <div className="mb-3 social-icon">
              <img src={social} alt="Social Icons" />
            </div>
            <h6>Subscribe to Newsletter</h6>
            <form className="d-flex mt-2">
              <input
                type="email"
                className="form-control me-2 rounded-pill"
                placeholder="Email"
              />
              <button type="submit" className="btn btn-warning rounded-pill">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="bg-light" />

        <p className="text-center mb-0">
          &copy; 2025 Your Food Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
