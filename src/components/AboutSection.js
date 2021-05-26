import React from "react";
import home1 from "../img/home1.png";
//style
import { About, Description, Image } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { titleAnim } from "../animation";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>we work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <p>
          contact us for any photography or videography ideas that you have. we
          have professinals with amazing skills
        </p>
        <button>contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

//styled components
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
