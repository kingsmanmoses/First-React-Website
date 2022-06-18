import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTypo3,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-sub">
        <p className="footer-head">
          Join the Adventure newsletter to receive our best vacation deals.
        </p>
        <p className="footer-text">You can unsubscribe at anytime.</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-wrap">
          <div className="footer-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorship</Link>
          </div>
        </div>
        <div className="footer-wrap">
          <div className="footer-items">
            <h2>Videos</h2>
            <Link to="/sign-up">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Youtube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              KINGS <FaTypo3 />
            </Link>
          </div>
          <small className="website-rights">
            KINGS <FaCopyright /> 2022
          </small>
          <div className="social-icons">
            <Link
              target="_blank"
              aria-label="Facebook"
              to="/"
              className="social-icon-link facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              target="_blank"
              aria-label="Instagram"
              to="/"
              className="social-icon-link instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              target="_blank"
              aria-label="Twitter"
              to="/"
              className="social-icon-link twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              target="_blank"
              aria-label="Youtube"
              to="/"
              className="social-icon-link youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              target="_blank"
              aria-label="Linkedin"
              to="/"
              className="social-icon-link linkedin"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
