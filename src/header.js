/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./images/logo.png";

const Header = () => {
 return (
  <header>
   <Logo />
   <Nav />
   <Login />
  </header>
 );
};

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
    <a href="#">FAQs</a>
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

export default Header;
