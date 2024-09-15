import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import { Modal, Button, Form } from 'react-bootstrap';

function App() {
  const name = "Carlo Dela Roca";
  const title = "Beginner Web Developer";
  const introduction = "I am currently a student in De La Salle Lipa, trying my best idk what to do, to see projects open projects tab, to contact me click on my picture";

  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);


  const projects = {
    'Project 1': {
      title: 'Ingat KAmpus',
      description: 'Ingat Kampus is a web app that is made by lasallians for lasallians, it is a lost and found system that features the items found items misplaced by the students within the campus. It allows for ease of searching for your missing items if they have been found.',
      image: 'ingka.jpg'
    },
    'Project 2': {
      title: 'Sentinel',
      description: 'Sentinel is an app designed to help its users stay connected with their loved ones as well as keep themselves safe. Through this app, users will be able to receive notifications if they need help and find them if they ever get lost. Additionally, the app serves as an easy source of information for users to know if any recent crime has occurred and certain areas to avoid',
      image: 'senti.jpg'
    },
    'Project 3': {
      title: 'Hercules Mechanics',
      description: 'Hercules Mechanics offers top-quality automotive repair services and a premium online parts shop. Our skilled mechanics provide expert care for routine maintenance and complex repairs, ensuring your vehicle performs at its best. Our extensive online store features a wide range of genuine, high-quality parts from leading manufacturers, allowing you to find exactly what you need with ease. At Hercules Mechanics, we combine expertise with convenience to deliver exceptional service and reliable solutions for all your automotive needs.',
      image: 'herme.jpg'
    }
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  const handleContactClose = () => setShowContactModal(false);

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  return (
    <div className="app">
      <div className="about-me">
        <div className="content">
          <div className="text">
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{introduction}</p>
          </div>
          <div className="profile-picture">
            <button className="pfp-button" onClick={handleContactClick}>
              <img src="pfp.jpg" alt="Profile" />
            </button>
          </div>
        </div>
      </div>


      <div className="project-list">
        {Object.keys(projects).map((projectKey) => (
          <button key={projectKey} className="project" onClick={() => handleProjectClick(projectKey)}>
            <img src={projects[projectKey].image} alt={projects[projectKey].title} />
          </button>
        ))}
      </div>


      {activeProject && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{projects[activeProject].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{projects[activeProject].description}</p>
            <img src={projects[activeProject].image} alt={projects[activeProject].title} style={{ width: '100%' }} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}


      <Modal show={showContactModal} onHide={handleContactClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleContactClose}>Close</Button>
          <Button variant="primary">Send Message</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
