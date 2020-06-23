import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import "./contactform.css"
import sal from 'sal.js'
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import  '../sal.css';
  sal();
  const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  export default class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
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
  };
render() {

  return (
      <div className="Contactform container">
                <div>
        <h1>reCAPTCHA 2</h1>
        <form
          name="contact-recaptcha"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <Recaptcha
            ref="recaptcha"
            sitekey={"6LeHT6gZAAAAAC88WSw7jF7k97sillbbMOrwWgco"}
            onChange={this.handleRecaptcha}
          />
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      </div>

    )
  }
}
// ContactformrData.propTypes = {
//   data: PropTypes.object,
// }

// export default function Contactform(props) {
//   return (
//     <StaticQuery
//       query={graphql`
//           query ContactformQuery {
//             contentfulContact {
//               anyQuestion
//               childContentfulContactTextAreaTextNode {
//                 textArea
//               }
//             }
//           }
//       `}
//       render={data => <ContactformrData data={data} {...props} />}
//     />
//   )
// }

