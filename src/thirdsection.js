/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const ThirdSection = ({ data }) => {
 const [position, setPosition] = useState(0);
 const length = data.length;
 const next = () => {
  setPosition(position === length - 1 ? 0 : position + 1);
 };
 const prev = () => {
  setPosition(position === 0 ? length - 1 : position - 1);
 };
 console.log(position);
 return (
  <section className="thirdSection">
   <h1>How It Works</h1>
   <main className="cont">
    <button
     onClick={() => {
      prev();
     }}
    >
     <i className="fas fa-chevron-left"></i>
    </button>
    <button
     onClick={() => {
      next();
     }}
    >
     <i className="fas fa-chevron-right"></i>
    </button>
    {data.map((datas, indexOf) => {
     const { id, header, title, image, info } = datas;
     //  let position = "next sliderContainer";
     //  if (indexOf === 0) {
     //   position = "active sliderContainer";
     //  }
     //  if (indexOf === data.length - 1) {
     //   position = "prev sliderContainer";
     //  }
     // console.log({ id, header, title, image, info });
     return (
      <article
       key={id}
       className={
        indexOf === position ? "slide active sliderContainer" : "slide"
       }
      >
       {indexOf === position && (
        <ul className="slider">
         <li className="cardHeader">{header}</li>
         <li className="cardTitle">{title}</li>
         <li>
          <img src={image} alt={title} />
         </li>
         <li className="cardInfo">{info}</li>
        </ul>
       )}
      </article>
     );
    })}
   </main>
   <button className="lowerBtn">get started for FREE!</button>
  </section>
 );
};

export default ThirdSection;
