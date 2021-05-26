import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <>
      <motion.div
      variants={pageAnimation.animate(0.5 , 1)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
        <AboutSection />
     </motion.div>

     <motion.div
      variants={pageAnimation.animate(0.9 , 5)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
        <ServicesSection />
     </motion.div>

     <motion.div
      variants={pageAnimation.animate(0.9 , 9)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
        <FaqSection />
     </motion.div>

    </>
  );
};

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;


export default AboutUs;
