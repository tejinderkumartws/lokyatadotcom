import Img from 'gatsby-image'
import { Link, graphql, StaticQuery } from 'gatsby'
import React from "react"
import "./lendingsolutions.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import  '../../animate.min.css';
// import WOW from 'wow.js';

export default function Lendingsolutions() {
  
    // new WOW().init();
  
  return (
    <StaticQuery
      query={graphql`
        query Lendingquery {
          allFile(
            filter: {
              relativePath: {
                in: [
                  "analytics-1.png"
                  "lendingDecisions-1.png"
                ]
              }
            }
          ) {
            nodes {
              childImageSharp {
                fluid (maxWidth: 2000){
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
        <div className="lendingsolutions text-center ">
          <Container>
            <Row>
               <Col>
                   <h3 className="mb-lg-4 h2 animate__animated animate__fadeInUp wow">Build digital lending solutions that <b>scale.</b></h3>
                   <p className="w-75 m-auto pb-3 pt-1 animate__animated animate__fadeInUp wow" >Lokyata provides the first AI platform as a managed service for lending decisions and portfolio risk analytics. We help you build a <b>data and product strategy</b> for scalable digital lending then help you execute your strategy using our platform.</p>
               </Col>
            </Row>
            <Row>
               <Col lg="6" className="pt-4 animate__animated animate__fadeInUp wow" >
                  <div className="img-d">
                    <Img
                      fluid={data.allFile.nodes[1].childImageSharp.fluid}
                    />
                  </div>
                  
                   <h4>LENDING DECISIONS</h4>
                   <p>A high-performance, real-time credit decisioning system. AI-driven scoring models are trained using your data and business goals to produce an API-accessible loan underwriting system that returns transparent credit decisions including grantable amount, interest rate, and term.</p>
                   <Link className="button mt-4">Learn More About Lending Decisions</Link>
               </Col>
               <Col lg="6" className="pt-4 animate__animated animate__fadeInUp wow" >
                   <div className="img-d">
                     <Img
                      fluid={data.allFile.nodes[0].childImageSharp.fluid}
                     />
                    </div>
                   <h4>PORTFOLIO RISK ANALYTICS</h4>
                   <p>A state-of-the-art web based analytics platform that gives you full visibility into your portfolio, including growth, liquidity, delinquency, and profitability. Define custom scenarios, analyze AI-driven forecasts, and develop custom risk mitigation strategies.​</p>
                   <Link className="button mt-4">Learn More About Risk Analytics</Link>
               </Col>
               <Col sm="12" className="position-relative pt-lg-5 animate__animated animate__fadeInUp wow" data-wow-duration="4s">
                <div className="player-wrapper mt-5" id="videodev">
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/embed/R8qN1WL5RKg"
                    width="100%"
                    height="100%"
                    controls
                    muted
                  />
                </div>
               </Col>
            </Row>
          </Container>
      </div>
      )}
    />
  )
}
