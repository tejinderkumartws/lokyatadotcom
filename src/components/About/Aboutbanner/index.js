import React from "react";
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import "./banner.css"
// import Img from 'gatsby-image'
import { Container, Row, Col} from 'react-bootstrap';
import sal from 'sal.js'
import  '../../sal.css';
  sal();

class AboutbannerData extends React.Component {
  render() {
    const { data } = this.props
    const { contentfulAbout } = data
    return (
      <div>
         <div className="about_banner">
              <img src={contentfulAbout.banner.fluid.src} alt="#" />
         </div>
          <div className="about-text">
             <Container>
               <Row>
                   <Col data-sal-duration="800" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                    <h1>{contentfulAbout.lokyataIs}</h1>
                     <span dangerouslySetInnerHTML={{
                      __html:
                      contentfulAbout.childContentfulAboutATeamOfTextNode
                          .aTeamOf,
                      }}/>
                    </Col>
                 </Row>
             </Container>
         </div>
      </div>
    )
  }
}

AboutbannerData.propTypes = {
  data: PropTypes.object,
}

export default function Aboutbanner(props) {
  return (
    <StaticQuery
      query={graphql`
            query aboutQuery {
              contentfulAbout {
                childContentfulAboutATeamOfTextNode {
                  aTeamOf
                }
                banner {
                  fluid (maxWidth: 1900){
                    src
                    sizes
                    tracedSVG
                    srcSet
                  }
                }
                lokyataIs
              }
            }
      `}
      render={data => <AboutbannerData data={data} {...props} />}
    />
  )
}
