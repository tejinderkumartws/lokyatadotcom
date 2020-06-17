// import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import  '../animate.min.css';
// import WOW from 'wow.js';
import "./Contactform.css"
class Contactform extends React.Component {
  // componentDidMount() {
  //   //new WOW().init();
  // }
  render() {
    return (
      <div className="Contactform">
          <Container>
            <Row>
               <Col sm="12" className="animate__animated animate__fadeInUp wow">
                  <h4 className="h2 mb-2">Any Questions?</h4>
                  <span>Contact us to learn more or schedule a demo.</span>
               </Col>
            </Row>
            <Form>
            <Row>
               <Col md="6" className="animate__animated animate__fadeInUp wow" data-wow-duration="2s">
                 <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name <sup>*</sup></Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name <sup>*</sup></Form.Label>
                    <Form.Control type="tex" placeholder="Last Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email <sup>*</sup></Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
               </Col>
               <Col md="6" className="animate__animated animate__fadeInUp wow" data-wow-duration="3s">
                 <Form.Group controlId="formBasicEmail">
                    <Form.Label>Message <sup>*</sup></Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
               </Col>
               <Col className="animate__animated animate__fadeInUp wow" data-wow-duration="4s">
                  <Button type="submit" className="button">
                    Submit
                  </Button>
               </Col>
            </Row>
            </Form>
          </Container>
      </div>
    )
  }
}
export default Contactform
