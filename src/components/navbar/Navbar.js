import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaTypo3 } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import './navbar.css';

function Navbar() {
  // This is for the change of navbar background change on scroll
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  // This const helps to display the menu bar when clicked or not
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // This closes the menu when the user chooses and option for the nav
  const closeMobileMenu = () => setClick(false);
  // This display the button on mobile
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      {/* For the navbar section */}
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className="navbar-container">
          {/* This is for the logo in the nav */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            KINGS <FaTypo3 className="fa-typo" />
          </Link>
          {/* For the menu icon in mobile or tablet view */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          {/* This is now for the links or page navigation */}
          {/* The onclick on the (li) thats's the 'closemobilemenu' is for to close an menu when the user selects an option */}
          {/* The classnames in (ul) that's 'nav-menu active' and 'nav-menu' is for mobile view  */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            {/* This sign-up is for the mobile version */}
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {/* This sign-up button is for the desktop version */}
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
