/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import faqs from "./faq";
import Eachquestion from "./eachquestion";

const Questions = () => {
 const [question, setQuestions] = useState(faqs);
 return (
  <article className="Questions" id="faq">
   <h2>faq</h2>
   {question.map((faq, index) => {
    const { question, answer } = faq;
    return (
     <div className="card" key={index}>
      <Eachquestion question={question} answer={answer} />
     </div>
    );
   })}
  </article>
 );
};

export default Questions;
