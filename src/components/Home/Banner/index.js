import React from "react";
import "./banner.css"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import sal from 'sal.js'
import  '../../sal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import scrollTo from 'gatsby-plugin-smoothscroll'
import ReactPlayer from 'react-player'
import {Container, Row, Col} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faPlayCircle);
 sal();
class BannerData extends React.Component {
  render() {
    const { data } = this.props
    const { contentfulHome } = data
    return (
      <div className="banner-min">
          <div className="position-relative">
            <div className="player-wrapper ">
              <ReactPlayer
                  className="react-player"
                  url={contentfulHome.youtube.file.url}
                  width="100%"
                  height="100%"
                  playing
                  muted
                  loop
                 
                  config={{ file: { attributes: {
                    autoPlay: true,
                    muted: true,
                    loop: true,
                  }}}}
              />
            </div>
            
          </div>
          <div className="banner-text">
              <Container>
                <Row>
                  <Col sm="12" >
                    <h1 data-sal-duration="1000" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">{contentfulHome.betterDecisions}</h1>
                   
                    <h2 data-sal-duration="1000" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-bounce">{contentfulHome.childContentfulHomeAiDrivenLendingDecisionTextNode.aiDrivenLendingDecision}</h2>
                    <button onClick={() => scrollTo('#videodev')} className="button mt-4"  data-sal-duration="1000" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-bounce">Watch Video &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></button>
                  </Col>
                </Row>
              </Container>
           </div> 
      </div>
   )
  }
}
BannerData.propTypes = {
data: PropTypes.object,
}

export default function Banner(props) {
return (
  <StaticQuery
    query={graphql`
          query bannerQuery {
            contentfulHome {
              childContentfulHomeAiDrivenLendingDecisionTextNode {
                aiDrivenLendingDecision
              }
              youtube {
                file {
                  url
                }
              }
              betterDecisions
            }
          }
    `}
    render={data => <BannerData data={data} {...props} />}
  />
)
}

