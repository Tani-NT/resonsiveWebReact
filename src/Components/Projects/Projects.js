import React from 'react'
import projImg1 from '../../assets/img/project-img1.png'
import projImg2 from '../../assets/img/project-img2.png'
import projImg3 from '../../assets/img/project-img3.png'
import {Container, Row, Col, Nav, Tab} from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.svg';
import './Projects.css';

const Projects = () => {
    const projects = [
        {title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1, 
        },
        {title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2, 
        },
        {title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3, 
        },
        {title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1, 
        },
        {title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2, 
        },
        {title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3, 
        },
    ];
  return (
    <section className='project' id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet placeat debitis eius repudiandae maiores id commodi, assumenda similique molestias iste, optio deserunt in maxime saepe.</p>
                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {projects.map((project,index)=>{
                                    return(
                                        <ProjectCard key={index} {...project}/>
                                    )
                                })}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp2} className="background-image-right" alt="bg"></img>
    </section>
  )
}

export default Projects