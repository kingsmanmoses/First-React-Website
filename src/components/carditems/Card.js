import React from "react";
import CardItems from "./CardItems";
// import img1 from "../../img/img18.jpg";
import "./card.css";

function Card() {
  return (
    // This is where the gallery props are passed into the cardItems
    <div className="cards">
      <h1>Check out these EPIC Destination</h1>
      {/* This container holds all the gallery/card */}
      <div className="cards-container">
        {/* Wraps all the cards */}
        <div className="cards-wrap">
          {/* For the each card items container */}
          <ul className="cards-items">
            <CardItems
              src={require("../../img/img1.jpg")}
              text="Explore the hidden waterfall deep inside the Amazon Jungle."
              label="Adventure"
              path="/services"
            />
            <CardItems
              src={require("../../img/img2.jpg")}
              text="Travel through the Islands of Bali in a Private Cruise."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards-items">
            <CardItems
              src={require("../../img/img9.jpg")}
              text="Exploring life beyond going for fishing."
              label="Nature"
              path="/services"
            />
            <CardItems
              src={require("../../img/img23.jpg")}
              text="Travel through the city of New York and get to understand the city live."
              label="City"
              path="/services"
            />
            <CardItems
              src={require("../../img/img14.jpg")}
              text="Take me to a place I can call HOME"
              label="Safe Place"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
