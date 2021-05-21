import React, { useState } from "react";

const Eachquestion = ({ question, answer }) => {
 const [state, setState] = useState(false);
 return (
  <div className="question">
   <div className="cardtop">
    <h4>{question}</h4>
    <button
     onClick={() => {
      return setState(!state);
     }}
    >
     {state ? (
      <i className="fas fa-chevron-up"></i>
     ) : (
      <i className="fas fa-chevron-down"></i>
     )}
    </button>
   </div>
   {state && (
    <div className="answer">
     <p>{answer}</p>
    </div>
   )}
  </div>
 );
};

export default Eachquestion;
