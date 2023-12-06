import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import weather from "../../Assets/Projects/Weather.webp";
import book from "../../Assets/Projects/book.jpg";
import sms from "../../Assets/Projects/sms.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import todo from "../../Assets/Projects/todo.png";

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
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="It enables users to search for weather conditions worldwide and delivers current weather 
              information. Developed by react.js,"
              ghLink="https://github.com/Nebajooo/Weather_App_By_ReactJs"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Store"
              description="The ReactJS_Api_Book_Store project involves creating a web application 
              with ReactJS that interacts with a server through an API to manage and display book 
              information, supporting operations like adding, updating, and deleting books."
              ghLink="https://github.com/Nebajooo/ReactJs_Api_Book_Store"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Sage Training Institute Website"
              description="The MERN stack project integrates user registration, attendance tracking, e-learning 
              capabilities,
               and a book store with features"
              ghLink="https://github.com/Nebajooo/Sage_Website_Project"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="About the =>Games played on three-in-a-row boards can be traced back to ancient Egypt,
               where such game boards have been found on roofing tiles dating from around 1300 BC."
              ghLink="https://github.com/Nebajooo/Tic_Tac_Toe_Game_By_ReactJs"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List App By ReactJs"
              description="To create a to-do item we are going to need a button that triggers a function which adds a 
              to-do item to our to-do list."
              ghLink="https://github.com/Nebajooo/Todo_List_App_By_ReactJs"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="Student Management System"
              description="The student management system is developed using PHP, HTML, CSS, JavaScript, 
              and Bootstrap, combining server-side scripting with a responsive and visually appealing user 
              interface for efficient student data management."
              ghLink="https://github.com/Nebajooo/Student_Mana"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
