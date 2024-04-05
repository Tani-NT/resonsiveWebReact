import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Col , Row} from 'react-bootstrap';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';
import './Skills.css';


const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-box">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Blanditiis quibusdam officia id quo tenetur asperiores magni, sapiente eaque commodi vitae consequuntur eum sunt optio nobis? Ut autem quis eaque in laboriosam obcaecati, eligendi rem.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1"/>
                                <h2>Web Design</h2>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2"/>
                                <h2>Logo Design</h2>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3"/>
                                <h2>Brand Identity</h2>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image1"/>
                                <h2>Web Design</h2>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="bg"/>
    </section>
  )
}

export default Skills