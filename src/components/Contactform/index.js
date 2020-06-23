import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

export const ContactformrData = ({data}) => {
    const [recaptchaval, setRecaptchaval] = useState();
    const [errcaptcha, setErrcaptcha] = useState();
    const { register, handleSubmit, watch, errors } = useForm({
      mode: "onBlur"
    });
    const onSubmit = submitdata => {
      if(!recaptchaval){
        setErrcaptcha("Captcha is required")
      }else{
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
            "form-name": "contact",
            ...submitdata
            })
        })
        .then((data) => { 
          console.log(data)
          navigateTo("/thanks/")
        })
        .catch(error => alert(error));
      }
    };

    const handleRecaptcha = value => {
      setRecaptchaval(value);
    };

    const { contentfulContact } = data;
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
        <div className="Contactform">
            <Container>
            <Row>
                <Col sm="12" data-sal-duration="1000" data-sal="slide-up"  data-sal-easing="ease-out-bounce">
                    <h4 className="h2 mb-2">{contentfulContact.anyQuestion}</h4>
                    <span>{contentfulContact.childContentfulContactTextAreaTextNode.textArea}</span>
                </Col>
            </Row>
            <form 
                name="contact" 
                className="form"
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-recaptcha="true"
                class="needs-validation"
                novalidate netlify
                onSubmit={handleSubmit(onSubmit)}
            >
            <Row>
                <Col md="6" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="firstname" placeholder="First Name" ref={register({ required: true })} />
                {errors.firstname && <p className="text-danger">First name is required</p>}

                <input type="text" name="lastname" placeholder="Last Name" ref={register({ required: true })} />
                {errors.lastname && <p className="text-danger">Last name is required</p>}

                <input type="email" name="email" placeholder="Email" ref={register({ required: true })} />
                {errors.email && <p className="text-danger">Email is not valid</p>}

                <textarea name="message" ref={register({ required: true })}></textarea>
                {errors.message && <p className="text-danger">Message is required</p>}

                <Recaptcha
                  sitekey={"6LeHT6gZAAAAAC88WSw7jF7k97sillbbMOrwWgco"}
                  onChange={handleRecaptcha}
                />
                {errcaptcha && <p className="text-danger">Captcha is required</p>}

                <input type="submit" />
                </Col>
            </Row>
            </form>
            </Container>
        </div>
    );
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