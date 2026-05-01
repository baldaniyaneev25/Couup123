import React from "react";
import "./Projects.css";

import couptravel from "../../assets/coup-travel1.png";
import coupecom from "../../assets/couupecom1.png";

const projects = [
  { img: couptravel, title: "Auten - AI Agency", category: "Web design" },
  { img: coupecom, title: "Coupecom - E-commerce", category: "E-commerce Website" },

];

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-badge">Selected projects</div>

      <h2 className="projects-title">
        Projects built on strategy, <br />
        finished with craft.
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* Image container */}
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>

            <h3>{project.title}</h3>
            <p>{project.category}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;