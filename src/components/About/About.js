import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/profile-pic.jpeg"
              alt="profile-pic"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Sheetal Tripathi</strong>. I'm originally from India.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I'm Sheetal Tripathi, a frontend developer with a BSc in Information Technology. I specialize in building responsive web applications using HTML, CSS, JavaScript, and React.js. Passionate about coding, I'm constantly expanding my skills to create impactful, user-friendly projects. Currently, I'm seeking opportunities to contribute to innovative tech solutions.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">

              With a strong foundation in web development, I excel in crafting intuitive interfaces and dynamic user experiences. My recent projects demonstrate my ability to adapt and innovate, integrating modern design practices and interactive features. I'm eager to bring my expertise to collaborative environments where I can both learn and make meaningful contributions. Driven by curiosity, I embrace new challenges to enhance my skills further.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
