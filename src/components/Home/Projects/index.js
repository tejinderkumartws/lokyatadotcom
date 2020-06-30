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
              <Col md="12">
                  <h3 className="mb-lg-4 h2" data-sal-duration="500" data-sal="zoom-in"  data-sal-easing="easeOutElastic" dangerouslySetInnerHTML={{
                      __html:
                      contentfulHome.buildDigital
                          .childContentfulRichText.html,
                    }}/>
                  <p className="m-auto pb-3 pt-4" 
                  dangerouslySetInnerHTML={{
                      __html:
                      contentfulHome.lokyataProvides
                          .lokyataProvides,
                      }} />
              </Col>
            </Row>
            <Row className="project-d">
              {data.allContentfulProject.nodes.map(project => (
              <Col lg="6" className="pt-4">
                <Link to={`/project/${project.slug}`}>
                    <div className="img-d"  data-sal-duration="600" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                      <img src={project.homeIconImage.fluid.src} />
                    </div>
                    <h4 style={{textTransform: "uppercase"}}  data-sal-duration="600" data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease-out-bounce">{project.title} </h4>
                    <div dangerouslySetInnerHTML={{ __html: project.homeBlockDescription.childContentfulRichText.html }} 
                          />
                </Link>
                <Link className="button mt-2 hide-mobile" to={`/project/${project.slug}`}>Learn More About {project.pageLink}</Link>
                <Link className="button mt-2 hide-lg" to={`/project/${project.slug}`}>Learn More</Link>
              </Col>

              ))}

              <Col sm="12" className="position-relative pt-lg-5" >
                <div className="player-wrapper mt-5" id="videodev">
                  <ReactPlayer
                    className="react-player"
                    // url="https://www.youtube.com/embed/R8qN1WL5RKg?controls=0&rel=0&enablejsapi=1&origin=https%3A%2F%2Fwww.lokyata.com&widgetid=1"
                    url={contentfulHome.homeVideoYouTubLink}
                    width="100%"
                    height="100%"
                    controls
                   
                    muted
                    config={{ file: { attributes: {
                      autoPlay: true,
                      muted: true,
                      loop: true,
                      
                    }}}}
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
              childContentfulRichText {
                html
              }
            }
            lokyataProvides {
              lokyataProvides
            }
            homeVideoYouTubLink
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
          allContentfulProject(sort: {fields: projectPositionInList, order: ASC})
           {
            nodes {
              title
              slug
              pageLink
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