import React from "react";
import "./team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from 'gatsby-image'
import { Container, Row, Col} from 'react-bootstrap';
import { graphql, StaticQuery } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core';
import  '../../animate.min.css';
import sal from 'sal.js'
import  '../../sal.css';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedinIn);
  sal();

export default function Team({ teamrole }) {
  // console.log(teamrole);
  return (
    <StaticQuery
      query={graphql`
        query TeamQuery {
          allContentfulTeam(
            sort: {fields: teamMemnerPositionInList, order: ASC}) {
            nodes {
              memberName
              memberDesignation
              memberRole
              linkdin
              image {
                fluid {
                  tracedSVG
                  srcWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <div className="our-team pt-0"  >
              <Container className="text-center pb-5 animate__animated animate__fadeInUp wow" >
                <h2 className="h2 pb-4" data-sal-duration="300" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">{teamrole}</h2>
                 <Row>
                    {data.allContentfulTeam.nodes.map((node)=> (
                      <>
                      {node.memberRole === teamrole &&
                      <Col md="3" sm="6" className="mt-3" data-sal-duration="350" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                      <Img className="team-img"
                          fluid={node.image.fluid}
                      />
                      <h5 className="h6 mb-1 mt-3">{node.memberName} </h5>
                      <span>{node.memberDesignation}</span>
                      <a aria-label="team" href={node.linkdin}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </Col>
                      }
                      </>
                    ))}
                 </Row>
              </Container>
          </div>
          
         </div>
      )}
    />
  )
}
