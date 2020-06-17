import React from "react"
import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css"
import { library } from '@fortawesome/fontawesome-svg-core';

import {faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn);
class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Row>
               <Col md="12">
                © {new Date().getFullYear()} LOKYATA
               </Col>
               <Col md="12" className="mt-2">
                <a href="tel:+2023559480">(202) 355-9480</a>
               </Col>
               <Col md="12" className="mt-2">
                <a href="mailto:info@lokyata.com">info@lokyata.com</a>
               </Col>
               <Col md="12" className="mt-2 social_icon">
                  <ul>
                    <li><Link to="#"><FontAwesomeIcon icon={faLinkedinIn}/></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faInstagram}/></Link></li>
                    <li><Link to="#"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
							    </ul>
               </Col>
            </Row>
          </Container>
        </div>
    )
  }
}
export default Footer
