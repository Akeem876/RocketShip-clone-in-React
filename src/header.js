/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "./images/logo.png";

const Header = () => {
 const [state, setState] = useState(false);
 return (
  <>
   <header>
    <Logo />
    <Nav />
    <Login />
    <Burger set={state} show={setState} />
   </header>
   {state && <Menu set={state} />}
  </>
 );
};
function Menu(prop) {
 return (
  <>
   <div className={prop.set ? "sub-menu " : " hide"}>
    <a href="#faq">FAQs</a>
    <a href="#">Rates</a>
    <a href="#">Contact</a>
    <a href="#">Suggestions</a>
   </div>
  </>
 );
}
function Logo() {
 return (
  <div className="logo">
   <img style={{ height: "39px" }} src={logo} alt="RocketShip"></img>
   <h4>
    Rocket<span>Ship</span>
   </h4>
  </div>
 );
}

function Nav() {
 return (
  <nav>
   <div className="navigation">
    <a href="#">
     <i className="fab fa-twitter"></i>
    </a>
    <a href="#">
     <i className="fab fa-facebook"></i>
    </a>
    <a href="#">
     <i className="fab fa-instagram"></i>
    </a>
    <a href="#faq">FAQs</a>
    <a href="#">Rates</a>
    <a href="#">Contact</a>
    <a href="#">Suggestions</a>
   </div>
  </nav>
 );
}

function Login() {
 return (
  <div className="login-button">
   <button className="sign-up">Sign Up</button>
   <button>
    Login<i className="fas fa-arrow-right"></i>
   </button>
  </div>
 );
}

function Burger(prop) {
 return (
  <div className="burger">
   <div
    className="conte"
    onClick={() => {
     prop.show(!prop.set);
    }}
   >
    <div className="layer"></div>
    <div className="layer"></div>
    <div className="layer"></div>
   </div>
   {/* {state && (
    <div className="sub-menu">
     <a href="#faq">FAQs</a>
     <a href="#">Rates</a>
     <a href="#">Contact</a>
     <a href="#">Suggestions</a>
    </div>
   )} */}
  </div>
 );
}

export default Header;
