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

  constructor(props) {
    super(props)
    this.state = {
      loadvideo: false
    }
    this.isvideoloaded = this.isvideoloaded.bind(this);
  }

  isvideoloaded() {
    this.setState({loadvideo:true})
  }

  render() {
    const { data } = this.props
    const { contentfulHome } = data
    return (
      <div className="banner-min">
          {!this.state.loadvideo && 
            <div className="banner_loader_img">&nbsp;</div>
          }
          <div className={"position-relative "+(this.state.loadvideo ? 'd-block' : 'd-none')}>
            <div className="player-wrapper ">
              <ReactPlayer
                  className="react-player"
                  url={contentfulHome.bannerVideoYoutubeLink}
                  //  url="https://youtu.be/R8qN1WL5RKg?t=79:controls=0"
                    width="100%"
                    height="100%"
                    playing
                    muted
                    loop
                    onPlay={() => this.isvideoloaded()}
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
                  <div className="text-center w-100">
                    <h1 className="mb-1" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">{contentfulHome.betterDecisions}</h1>
                    <h2 data-sal-duration="1000" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-bounce">{contentfulHome.childContentfulHomeAiDrivenLendingDecisionTextNode.aiDrivenLendingDecision}</h2>
                    <button onClick={() => scrollTo('#videodev')} className="button mt-4"  data-sal-duration="1000" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-bounce">Watch Video &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></button>
                  </div>
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
              bannerVideoYoutubeLink
              betterDecisions
            }
          }
    `}
    render={data => <BannerData data={data} {...props} />}
  />
)
}

