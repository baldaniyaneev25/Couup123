import React from "react";
import Hero from "../../Pages/Hero/Hero";
import Slider from "../../components/slider/Slider";
import Projects from "../Projects/Projects";
import Whatido from "../whatido/Whatido";
import Step from "../Step/Step";
import Form from "../Form/Form";  

function Home() {
  return (

  <>
  <Hero />
  <Slider />
  <Projects/>
  <Whatido />
  <Step/>
  <Form/>
  </>
  
  );
}

export default Home;