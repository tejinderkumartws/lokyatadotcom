import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from "../logo"
import "./header.css"
class Header extends React.Component {
  render() {
    return (
      <header>
          <Container>
            <Row>
              <Navbar expand="lg" className="w-100" >
                <Navbar.Brand className="position-relative header-logo">
                 <Link><Logo /></Link> 
                  </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Link to="/" activeClassName="active " >Home</Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                      <Link to="/lending-decisions" className="dropdown-item">Lending Decisions</Link>
                      <Link to="/risk-analytics" className="dropdown-item">Risk Analytics</Link>
                    </NavDropdown>
                    <Link to="/about" activeClassName="active " >About</Link>
                    <Link to="/contact" className="mr-0" activeClassName="active " >Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>  
            </Row>
          </Container>
      </header>
    )
  }
}
export default Header
