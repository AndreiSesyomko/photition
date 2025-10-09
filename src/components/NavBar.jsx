import React from "react";
import { Navbar, Container, Form, FormControl, Nav, Image } from "react-bootstrap";
import logo from '../assets/logo.png'
import '../styles/index.css';
import {BellFill, Person} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";


const CustomNavbar = () => {
  const navigate = useNavigate();
  return (
      <Navbar style={{width: '100%'}} bg="dark" expand="lg" className="photition-navbar">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}  style={{fontWeight: 'bold', cursor: 'pointer', fontSize: '1.25em', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '250px'}}>
            <Image width="61" height="61" src={logo}></Image>
            Photition
          </Navbar.Brand>
          <Form className="search-form mx-auto" style={{width: '550px'}}>
            <FormControl type="search" placeholder="Поиск..." className="search-input" />
          </Form>
          <Nav className="ms-auto nav-icons">
            <Nav.Link href="#"><Person className='nav-icon' /></Nav.Link>
            <Nav.Link href="#"><BellFill className='nav-icon' /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default CustomNavbar;
