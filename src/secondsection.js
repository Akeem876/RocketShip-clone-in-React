import React from "react";
import float from "./images/accent-image1.png";

const SecondSection = () => {
 return (
  <section className="middlesection">
   <Info />
   <Floater />
   <div className="floating1"></div>
   <div className="floating2"></div>
   <div className="floating3"></div>
  </section>
 );
};

function Info() {
 return (
  <div className="textarea">
   <h1> Ship With Confidence</h1>
   <h2>RocketShip Courier Services</h2>
   <p>
    We offer fast, convenient & reliable shipping and a personal US based
    shipping address.
   </p>
   <button className="signUpBtn">sign up for FREE!</button>
  </div>
 );
}

function Floater() {
 return (
  <div className="floatingImg">
   <img style={{ height: "400px" }} src={float} alt="" />
  </div>
 );
}
export default SecondSection;
