import React from "react";
import "./Hero.css";
import whatsapp from "../../assets/whatsapp.png";
import arrow from "../../assets/arrow.png";


function Home() {
  return (
    <section className="hero" >

      {/* Badge */}
      <div className="hero-badge">
        <span className="dot"></span>
        Visual & Product Designer · Available for projects
      </div>

      {/* Heading */}
      <h1 className="hero-title">
        We design websites that <br /> convert visitors into customers
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        We help startups and businesses create high-performing <br /> websites
        that look great, load fast, and convert better.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">

        <button className="secondary-btn">
          Let's chat   <img src={arrow} alt="Arrow" className="btn-icon-arrow" /></button>
      </div>

      {/* Logos */}
      {/* <div className="hero-logos">
        <span>Taskgen</span>
        <span>Trackly</span>
        <span>Finte</span>
        <span>Proofly</span>
      </div> */}

    </section>
  );
}

export default Home;