import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/img/logo.svg'
import navbarIcon1 from '../../assets/img/navIcon1.svg'
import navbarIcon2 from '../../assets/img/navIcon2.svg'
import navbarIcon3 from '../../assets/img/navIcon3.svg'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
    const [activeLink, setactiveLink] = useState("home");
    const [scrolled, setscrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setscrolled(true);
            }
            else{
                setscrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=> window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value)=>{
        setactiveLink(value);
    }

  return (
    <>
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="home">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}  >Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}onClick={()=>onUpdateActiveLink('project')}>Project</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="1">
                            <img src={navbarIcon1} alt="insta"/>
                        </a>
                        <a href="2">
                            <img src={navbarIcon2} alt="insta"/>
                        </a>
                        <a href="3">
                            <img src={navbarIcon3} alt="insta"/>
                        </a>
                    </div>
                    <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default NavBar