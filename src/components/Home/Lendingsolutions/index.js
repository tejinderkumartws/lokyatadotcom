import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import React from "react"
import "./lendingsolutions.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import sal from 'sal.js'
import  '../../sal.css';
 sal();

class LendingsolutionsData extends React.Component {

  render() {
    const { data } = this.props
    const { contentfulHome } = data
    return (
      <div className="lendingsolutions text-center ">
          <Container>
            <Row>
              <Col>
                  <h3 className="mb-lg-4 h2" data-sal-duration="1000" data-sal="slide-up"  data-sal-easing="ease-out-bounce">{contentfulHome.buildDigital.buildDigital}</h3>
                  <p className="w-75 m-auto pb-3 pt-1" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce" 
                  dangerouslySetInnerHTML={{
                      __html:
                      contentfulHome.lokyataProvides
                          .lokyataProvides,
                      }} />
              </Col>
            </Row>
            <Row>
              <Col lg="6" className="pt-4" data-sal-duration="900" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                  <div className="img-d">
                    <Img
                      fluid={data.allFile.nodes[1].childImageSharp.fluid}
                    />
                  </div>
                  <h4>LENDING DECISIONS</h4>
                  <p>A high-performance, real-time credit decisioning system. AI-driven scoring models are trained using your data and business goals to produce an API-accessible loan underwriting system that returns transparent credit decisions including grantable amount, interest rate, and term.</p>
                  <Link className="button mt-4">Learn More About Lending Decisions</Link>
              </Col>
              <Col lg="6" className="pt-4" data-sal-duration="900" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                  <div className="img-d">
                    <Img
                      fluid={data.allFile.nodes[0].childImageSharp.fluid}
                    />
                    </div>
                  <h4>PORTFOLIO RISK ANALYTICS</h4>
                  <p>A state-of-the-art web based analytics platform that gives you full visibility into your portfolio, including growth, liquidity, delinquency, and profitability. Define custom scenarios, analyze AI-driven forecasts, and develop custom risk mitigation strategies.​</p>
                  <Link className="button mt-4">Learn More About Risk Analytics</Link>
              </Col>
              <Col sm="12" className="position-relative pt-lg-5" >
                <div className="player-wrapper mt-5" id="videodev">
                  <ReactPlayer
                    className="react-player"
                    url={contentfulHome.youtube.file.url}
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
    )
  }
}
LendingsolutionsData.propTypes = {
data: PropTypes.object,
}

export default function Lendingsolutions(props) {
return (
  <StaticQuery
    query={graphql`
      query LendingMyQuery {
          contentfulHome {
            buildDigital {
              buildDigital
            }
            lokyataProvides {
              lokyataProvides
            }
            youtube {
              file {
                url
              }
            }
          }
          allFile(filter: {relativePath: {in: ["analytics-1.png", "lendingDecisions-1.png"]}}) {
            nodes {
              childImageSharp {
                fluid {
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  presentationWidth
                  presentationHeight
                  base64
                  aspectRatio
                }
              }
            }
          }
        }
    `}
    render={data => <LendingsolutionsData data={data} {...props} />}
  />
 ) 
}