import React from "react";
import "./banner.css"
import Img from 'gatsby-image'
import { Container, Row, Col} from 'react-bootstrap';
import {  graphql, StaticQuery } from 'gatsby'
import sal from 'sal.js'
import  '../../sal.css';
const scrollAnimations = sal();
export default function Aboutbanner() {

  return (
    <StaticQuery
      query={graphql`
        query Aboutbanner {
          allFile(
            filter: {
              relativePath: {
                in: [
                  "rice-scaled.jpg"
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
          <div className="about_banner">
            <Img
                fluid={data.allFile.nodes[0].childImageSharp.fluid}
              />
          </div>
          <div className="about-text">
              <Container>
                  <Row>
                    <Col data-sal-duration="800" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                      <h1>LOKYATA IS</h1>
                      <span>A team of passionate serial entrepreneurs, tech evangelists, credit scoring experts, data scientists and software engineers on a mission to advance technology to foster financial inclusion.</span>
                    </Col>
                  </Row>
              </Container>
          </div>
         </div>
      )}
    />
  )
}
