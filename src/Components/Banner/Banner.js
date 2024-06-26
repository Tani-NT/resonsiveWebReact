import React, { useEffect, useState } from 'react'
import headerImg from '../../assets/img/header-img.svg'
import {Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import './Banner.css';

const Banner = () => {

    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const [text, settext] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;
    const toRotate = ['Web Developer', 'UI/UX Designer', 'Web Designer']

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        }, delta)
        return ()=>{
            clearInterval(ticker);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);
        settext(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setisDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setisDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }
    }

  return (
    <section className='banner home' >
        <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ducimus commodi minus aperiam nulla accusantium nobis distinctio, est enim repudiandae deleniti sapiente molestiae earum velit omnis voluptatem voluptate inventore ipsa non illo!</p>
                <button  onClick={()=> console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} className="mainImg" alt="headerImage"/>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Banner