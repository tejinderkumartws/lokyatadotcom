import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import "./contactform.css"
import sal from 'sal.js'
import  '../sal.css';
  sal();
const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
class ContactformrData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          errcaptcha: null
        };
        }

        handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        };

        handleRecaptcha = value => {
        this.setState({ "grecaptcharesponse": value });
        };

        handleSubmit = e => {
          if(!this.state.grecaptcharesponse){
            this.setState({errcaptcha: true})
          }else{
            e.preventDefault();
              const form = e.target;
              fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: encode({
                  "form-name": form.getAttribute("name"),
                  ...this.state
                  })
              })
            .then(() => navigateTo(form.getAttribute("action")))
            .catch(error => alert(error));
          }
        
        };
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
               className="form"
               method="post"
               action="/thanks/"
               data-netlify="true"
               data-netlify-recaptcha="true"
               onSubmit={this.handleSubmit}
            >
            <Row>
              <Col md="6" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label htmlFor="First Name">First Name <sup>*</sup></Form.Label>
                    <Form.Control type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label htmlFor="Last Name">Last Name <sup>*</sup></Form.Label>
                    <Form.Control type="tex" name="lastname" placeholder="Last Name"  onChange={this.handleChange} />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label htmlFor="Email">Email <sup>*</sup></Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email Address"  onChange={this.handleChange} />
                  </Form.Group>
              </Col>
              <Col md="6" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-bounce">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label htmlFor="Message">Message <sup>*</sup></Form.Label>
                    <Form.Control as="textarea" name="message" onChange={this.handleChange} />
                  </Form.Group>
              </Col>
              <Col md="12" className="mb-3 mt-2" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-bounce">
                <Recaptcha
                      ref="recaptcha"
                      sitekey={"6LeHT6gZAAAAAC88WSw7jF7k97sillbbMOrwWgco"}
                      onChange={this.handleRecaptcha}
                  />
                  {this.state.errcaptcha && <p className="text-danger">Captcha is required</p>}
              </Col>
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