import React from "react"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css"
import { library } from '@fortawesome/fontawesome-svg-core';

import {faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn);

class FooterData extends React.Component {
  render() {
    const { data } = this.props
    const { contentfulFooter } = data
    return (
        <div className="footer">
          <Container>
            <Row>
              <Col md="12">
                © {new Date().getFullYear()} LOKYATA
              </Col>
              <Col md="12" className="mt-2">
                <a aria-label="phone" href="tel:+2023559480">(202) 355-9480</a>
              </Col>
              <Col md="12" className="mt-2">
                <a aria-label="mail" href="mailto:info@lokyata.com">{contentfulFooter.emailId}</a>
              </Col>
              <Col md="12" className="mt-2 social_icon">
                  <ul>
                    <li><a title="Linkdin" aria-label="Linkdin" href="{contentfulFooter.linkedIn}" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    <li><a title="Instagram" aria-label="Instagram" href="{contentfulFooter.instagram}" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                    <li><a title="Facebook" aria-label="Facebook" href="{contentfulFooter.facebook}" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                  </ul>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}
FooterData.propTypes = {
data: PropTypes.object,
}

export default function Footer(props) {
return (
  <StaticQuery
    query={graphql`
      query footerQuery {
        contentfulFooter {
          facebook
          emailId
          instagram
          linkedIn
        }
      }
    `}
    render={data => <FooterData data={data} {...props} />}
  />
) 
}
