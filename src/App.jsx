import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <section className="min-h-screen" />
      {/*projects*/}
      {/*testimonial*/}
      {/*footer*/}
    </div>
  );
};

export default App;
