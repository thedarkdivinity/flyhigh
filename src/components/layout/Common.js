import React from "react";
import Heading from "./Heading";


const Common = ({ heading, para, imgsrc, headingColor }) => {
  return (
    <>
        <section className="common">
        <div className="container">
      <Heading heading={heading} headingColor={headingColor} />
      <hr/>
      <br/>
      <div className="grid">
      <div className="para-text-grid">
        <p data-aos="fade-right">
          {para}
        </p>
        </div>
        <figure className="grid-img" data-aos="fade-left">
        <img src={imgsrc} alt="indian women progressing"/>
        </figure>
      </div>
      </div>
      </section>
    </>
  );
};

export default Common;
