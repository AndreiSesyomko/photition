import React from "react";
import { Navbar, Container, Form, FormControl, Nav, Image } from "react-bootstrap";
import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Bell } from '../assets/bell.svg';
import logo from '../assets/logo.png'


const CustomNavbar = () => (
  <Navbar bg="dark" expand="lg" className="photition-navbar">
    <Container>
      <Navbar.Brand href="#" style={{fontWeight: 'bold', fontSize: '1.25em', display: 'flex', justifyContent: 'start', alignItems: 'center', width: '250px'}}>
        <Image width="61" height="61" src={logo}></Image>
        Photition
      </Navbar.Brand>
      <Form className="search-form mx-auto" style={{width: '550px'}}>
        <FormControl type="search" placeholder="Поиск..." className="search-input" />
      </Form>
      <Nav className="ms-auto nav-icons">
        <Nav.Link href="#"><User /></Nav.Link>
        <Nav.Link href="#"><Bell /></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default CustomNavbar;
