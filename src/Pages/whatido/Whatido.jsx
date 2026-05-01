import React from "react";
import "./Whatido.css";

const row1 = [
  "Web Design",
  "UI/UX Design",
  "Landing Pages",
  "E-commerce",
  "Portfolio",
  "SaaS Design",
];

const row2 = [
  "React Development",
  "Frontend",
  "Responsive Design",
  "Branding",
  "Figma",
  "Redesign",
];

function MarqueeSection() {
  return (
    <section className="marquee-section" id="what-we-do">

      {/* TEXT */}
      <div className="top-text">
        <span className="badge">What We do</span>

        <h2>
          Everything your brand <br />
          needs to show up right
        </h2>
      </div>

      {/* SLIDER 1 */}
      <div className="marquee-container">
        <div className="marquee-track marquee-left">
          {[...row1, ...row1].map((item, i) => (
            <div className="marquee-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* SLIDER 2 */}
      <div className="marquee-container">
        <div className="marquee-track marquee-right">
          {[...row2, ...row2].map((item, i) => (
            <div className="marquee-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default MarqueeSection;