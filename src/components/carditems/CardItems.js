import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

function CardItems(props) {
  return (
    <>
      {/* For the gallery page as cards */}
      <li className="cards-item">
        <Link to={props.path} className="cards-links">
          {/* Figure acts as the contain for the image */}
          <figure data-category={props.label} className="card-picwrap">
            <img className="cards-img" src={props.src} alt="Travel Image" />
          </figure>
          {/* For the info and text area */}
          <div className="cards-info">
            <h5 className="cards-txt">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
