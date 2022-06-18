import React from "react";
import "../../App.css";
import Card from "../carditems/Card";
import Footer from "../footer/Footer";
import Herosection from "../heropage/Herosction";

function Home() {
  return (
    <>
      {/* Contains the landing page */}
      <Herosection />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
