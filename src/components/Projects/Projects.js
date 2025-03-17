import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import happy from "../../Assets/Projects/happy.png";
import calfit from "../../Assets/Projects/calfit.png";
import netflix from "../../Assets/Projects/netflix.png";
import major from "../../Assets/Projects/Major.png";
import keshav from "../../Assets/Projects/keshav.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keshav}
              isBlog={false}
              title="Catalogue Website for keshav Shoes"
              description="Built a sleek catalogue website for Keshav Shoes using React.js + Vite and Tailwind CSS. It offers fast, responsive browsing of the latest shoe collections with clean navigation. Catalogue-only — customers can explore styles online and purchase in-store. Mastered Tailwind CSS for efficient development! 😎"
              ghLink="https://github.com/SakshamMohan18/keshav-shoe"
              demoLink="https://keshav-shoes.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={major}
              isBlog={false}
              title="A Tool for Lecture assessments as per OBE Policy (Under Development)"
              description="This device automates post-lecture assessments using the MERN stack and IoT, collecting real-time student responses, aligning them with CLOs, providing instant feedback, and delivering analytics for data-driven improvements, enhancing educational efficiency and teaching effectiveness. 🚀"
              ghLink="https://github.com/SakshamMohan18"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calfit}
              isBlog={false}
              title="Calfit"
              description="Calfit is a personalized meal planner that promotes healthier lifestyles by suggesting meals and tracking calories based on user input. Built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, it delivers personalized, scalable meal plans."
              ghLink="https://github.com/SakshamMohan18"
              demoLink="https://www.linkedin.com/posts/saksham-mohan-452255265_mealplanner-calorietracker-healthtech-activity-7282053400534392832-KKBR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED_oT4BFzoG_3xlemMncfe1D6PFmnltQR8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={happy}
              isBlog={false}
              title="Happy Pizza"
              description="Developed a responsive pizza delivery web app using React, featuring dynamic customization, real-time updates, and a seamless user experience. Focused on scalability, accessibility, and performance optimization, showcasing expertise in front-end development and user-centric design. "
              ghLink="https://github.com/SakshamMohan18/Happy-Pizza"
              demoLink="https://www.linkedin.com/posts/saksham-mohan-452255265_webdevelopment-html5-css-activity-7229417556485234690-bhHQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED_oT4BFzoG_3xlemMncfe1D6PFmnltQR8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Developed a responsive Netflix clone using React, replicating dynamic features like content browsing, user authentication, and real-time updates. Focused on scalability, performance optimization, and creating an engaging, user-friendly interface for seamless navigation."
              ghLink="https://github.com/SakshamMohan18/Netflix-Clone"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
