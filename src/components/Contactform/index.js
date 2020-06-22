import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import "./contactform.css"
import sal from 'sal.js'
import  '../sal.css';
  sal();

class ContactformrData extends React.Component {
render() {
  const { data } = this.props
  const { contentfulContact } = data
  return (
      <div className="Contactform">
          <Container>
            <Row>
              <Col sm="12" data-sal-duration="1000" data-sal="slide-up"  data-sal-easing="ease-out-bounce">
                  <h4 className="h2 mb-2">{contentfulContact.anyQuestion}</h4>
                  <span>{contentfulContact.childContentfulContactTextAreaTextNode.textArea}</span>
              </Col>
            </Row>
            <Form 
               name="contact" 
               method="post" 
               data-netlify="true" 
               data-netlify-honeypot="bot-field"
               className="form"
            >
            <Row>
              <Col md="6" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>First Name <sup>*</sup></Form.Label>
                    <Form.Control type="text" name="firstname" placeholder="First Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name <sup>*</sup></Form.Label>
                    <Form.Control type="tex" name="lastname" placeholder="Last Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email <sup>*</sup></Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email Address" />
                  </Form.Group>
              </Col>
              <Col md="6" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-bounce">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Message <sup>*</sup></Form.Label>
                    <Form.Control as="textarea" name="message" />
                  </Form.Group>
              </Col>
              {/* <div data-netlify-recaptcha="true"></div> */}
              <Col data-sal-duration="900" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
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
ContactformrData.propTypes = {
  data: PropTypes.object,
}

export default function Contactform(props) {
  return (
    <StaticQuery
      query={graphql`
          query ContactformQuery {
            contentfulContact {
              anyQuestion
              childContentfulContactTextAreaTextNode {
                textArea
              }
            }
          }
      `}
      render={data => <ContactformrData data={data} {...props} />}
    />
  )
}

