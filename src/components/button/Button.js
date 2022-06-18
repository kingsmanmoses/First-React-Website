import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

// This is for the styling classnames of both primary btn(bgc) and secondary(btn no bgc)
const STYLES = ["btn--primary", "btn--outline"];
// This is for the styling classnames of both medium btn and large btn
const SIZE = ["btn--medium", "btn--large"];

// This acts as the properties to be added in the button function
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // Function for the styled button
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // Function for the size button
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  return (
    //   This is the button for mobile view
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
