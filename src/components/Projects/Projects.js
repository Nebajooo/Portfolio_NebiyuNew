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
import hakim from "../../Assets/Projects/hakim.png";
import kachamale from "../../Assets/Projects/kachamale.png";
import cms from "../../Assets/Projects/cms.png";
import gojoreal from "../../Assets/Projects/gojoreal.png";
import sage from "../../Assets/Projects/sage.png";
import yearbook from "../../Assets/Projects/yearbook.png";

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
              imgPath={cms}
              isBlog={false}
              title="CMS"
              description="College Management System is a full-stack web application designed to manage student records, teacher profiles, course registrations, grades, and announcements. Built using React, Node.js, Express, and MongoDB, the system includes separate dashboards for students, teachers, and admins with secure login and role-based access."
              ghLink="https://github.com/Nebajooo/CMS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hakim}
              isBlog={false}
              title="Hakim_Ketero"
              description="Hakim Ketero is a full-stack web-based doctor appointment system developed using React, Node.js, Express, and MongoDB. It allows patients to register, view doctors, and book appointments, while doctors can manage their schedules. The platform includes secure authentication and an admin dashboard for user and doctor management."
              ghLink="https://github.com/Nebajooo/Hakim_Ketero"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kachamale}
              isBlog={false}
              title="Bus Online Ticket system"
              description="Bus Online Ticket System is a full-stack web application developed using React, Node.js, and MongoDB. It allows users to search buses, book tickets, select seats, and make secure payments. "
              ghLink="https://github.com/Nebajooo/Kachamale_-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gojoreal}
              isBlog={false}
              title="GOJO Real state"
              description="Gojo Real Estate is a real estate platform developed as a frontend-only project using modern web technologies. The website showcases available properties, company services, and contact information in a clean and user-friendly layout. Key features include property listings, responsive design, and intuitive navigation. The project demonstrates skills in React, Tailwind CSS, and responsive UI development. "
              ghLink="https://github.com/Nebajooo/Gojo_Real-estate"
              demoLink="https://gojorealstate.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yearbook}
              isBlog={false}
              title="Year Book"
              description="A visual yearbook of HiLCoE students — a gallery of classmate photos with names and memorable moments. Simple, clean, and made to capture faces and friendships from our college journey."
              ghLink="https://github.com/Nebajooo/HiLCoE-YearBook-class-of-2025"
              demoLink="https://hi-l-co-e-year-book-class-of-2025.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="It enables users to search for weather conditions worldwide and delivers current weather 
              information. Developed by react.js,"
              ghLink="https://github.com/Nebajooo/Weather_App_By_ReactJs"
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
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sage}
              isBlog={false}
              title="Sage Training Institute Website"
              description="The MERN stack project integrates user registration, attendance tracking, e-learning 
              capabilities,
               and a book store with features"
              ghLink="https://github.com/Nebajooo/Sage_Website_Project"
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
              demoLink="https://tictactoene.netlify.app"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List App By ReactJs"
              description="To create a to-do item we are going to need a button that triggers a function which adds a 
              to-do item to our to-do list."
              ghLink="https://github.com/Nebajooo/Todo_List_App_By_ReactJs"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

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
