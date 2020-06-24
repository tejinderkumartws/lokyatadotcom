import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import React from "react"
import "./projects.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import sal from 'sal.js'
import  '../../sal.css';
 sal();

class ProjectsData extends React.Component {

  render() {
    const { data } = this.props
    const { contentfulHome } = data
    return (
      <div className="lendingsolutions text-center ">
          <Container>
            <Row>
              <Col>
                  <h3 className="mb-lg-4 h2" data-sal-duration="500" data-sal="slide-up"  data-sal-easing="ease-out-bounce">{contentfulHome.buildDigital.buildDigital}</h3>
                  <p className="w-75 m-auto pb-3 pt-1" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce" 
                  dangerouslySetInnerHTML={{
                      __html:
                      contentfulHome.lokyataProvides
                          .lokyataProvides,
                      }} />
              </Col>
            </Row>
            <Row>
              {data.allContentfulProject.nodes.map(project => (
              <Col lg="6" className="pt-4" data-sal-duration="600" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                <div className="img-d">
                  <img src={project.homeIconImage.fluid.src} />
                </div>
                <h4 style={{textTransform: "uppercase"}}>{project.title} </h4>
                <div dangerouslySetInnerHTML={{ __html: project.homeBlockDescription.childContentfulRichText.html }} 
                      />
                <Link className="button mt-4" to={`/project/${project.slug}`}>Learn More About {project.title}</Link>
              </Col>

              ))}

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
ProjectsData.propTypes = {
data: PropTypes.object,
}

export default function Projects(props) {
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
          allContentfulProject {
            nodes {
              title
              slug
              homeBlockDescription {
                childContentfulRichText {
                  html
                }
              }
              homeIconImage {
                fluid {
                  src
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
    `}
    render={data => <ProjectsData data={data} {...props} />}
  />
 ) 
}