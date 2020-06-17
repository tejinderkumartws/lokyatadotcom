import React from "react";
import "./team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from 'gatsby-image'
import { Container, Row, Col} from 'react-bootstrap';
import {Link,  graphql, StaticQuery } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core';
import  '../../animate.min.css';
// import WOW from 'wow.js';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedinIn);
export default function Team() {
  // new WOW().init();
  return (
    <StaticQuery
      query={graphql`
        query Team {
          allFile(
            filter: {
              relativePath: {
                in: [
                  "charu.jpg"
                  "santhosh.jpg"
                  "ketal.jpg"
                  "aiaze.jpg"
                  "steve.png"
                  "tommy.jpg"
                  "sanker.jpg"
                  "dan.jpg"
                  "roma.jpg"
                  "qing.jpg"
                  "yanlin.png"
                ]
              }
            }
          ) {
            nodes {
              childImageSharp {
                fluid (maxWidth: 1000){
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <div className="our-team">
              <Container className="text-center pb-5 animate__animated animate__fadeInUp wow" >
                 <h2 className="h2 pb-4">Board Members & Advisors</h2>
                 <Row>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[0].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Charu Ramanathan </h5>
                        <span>Board Chair & Co-founder</span>
                        <Link to="https://www.linkedin.com/in/charu-ramanathan-phd-9a814/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[1].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Santosh Thiruthi </h5>
                        <span>CEO & Co-founder</span>
                        <Link href="https://www.linkedin.com/in/santosh-thiruthi-9088981/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[2].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Ketal Patel </h5>
                        <span>Board Member & Co-founder</span>
                        <Link href="https://www.linkedin.com/in/ketalpatel/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[3].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Aiaze Mitha</h5>
                        <span>Advisor</span>
                        <Link href="https://www.linkedin.com/in/aiazemitha/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                 </Row>
              </Container>
              <Container className="text-center pt-5 animate__animated animate__fadeInUp wow" >
                 <h2 className="h2 pb-4">Team</h2>
                 <Row>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[1].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Santosh Thiruthi </h5>
                        <span>CEO & Co-founder</span>
                        <Link  href="https://www.linkedin.com/in/santosh-thiruthi-9088981/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[4].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Steve Bireley  </h5>
                        <span>CTO</span>
                        <Link href="https://www.linkedin.com/in/sabireley/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[5].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Tommy Eastman</h5>
                        <span>Product & Data Science Director</span>
                        <Link href="https://www.linkedin.com/in/tommyeastman/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[6].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Sanker Gopinathan </h5>
                        <span>Director, Operations & Client Engagement</span>
                        <Link  href="https://www.linkedin.com/in/sankerpg/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                 </Row>
                 <Row className="pt-3">
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[7].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Daniel Citbaj</h5>
                        <span>Chief Scoring Expert</span>
                        <Link href="https://www.linkedin.com/in/daniel-citbaj-8a284513/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>  
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[8].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Roma Vasudevan </h5>
                        <span>Credit and Risk Specialist</span>
                        <Link href="https://www.linkedin.com/in/roma-vasudevan-72323a9/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[9].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Qing Chen </h5>
                        <span>Machine Learning Engineer</span>
                        <Link href="https://www.linkedin.com/in/qchen7/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col> 
                    <Col md="3" sm="6" className="mt-3">
                        <Img
                            fluid={data.allFile.nodes[10].childImageSharp.fluid}
                        />
                        <h5 className="h6 mb-1 mt-3">Yanlin Chen  </h5>
                        <span>Data Analyst</span>
                        <Link href="https://www.linkedin.com/in/ny-yanlin-chen/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </Col>                  
                 </Row>
              </Container>
          </div>
          
         </div>
      )}
    />
  )
}
