// import { Link } from "gatsby";
import React from "react";
import "./banner.css"
import  '../../animate.min.css';
// import WOW from 'wow.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import scrollTo from 'gatsby-plugin-smoothscroll'
import ReactPlayer from 'react-player'
import {Container, Row, Col} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
// import myVideo from '../../../images/LokyataIntroduction.MP4'
library.add(faPlayCircle);
class Banner extends React.Component {
  // componentDidMount() {
  //   // new WOW().init();
  // }
  
  render() {
    return (
      <div className="banner-min">
          <div className="position-relative">
            <div className="player-wrapper ">
              <ReactPlayer
                  className="react-player"
                  url='https://www.youtube.com/embed/R8qN1WL5RKgautoplay=1&modestbranding=1rel=0'
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
                    <h1 className="animate__animated animate__fadeInUp wow" data-wow-duration="2s" >Better Decisions Lower Losses Higher Profits</h1>
                    <h2 className="animate__animated animate__fadeInUp wow" data-wow-duration="3s" >AI-Driven Lending Decisions & Portfolio Risk Analytics</h2>
                    <button onClick={() => scrollTo('#videodev')} className="button mt-4 animate__animated animate__fadeInUp wow" data-wow-duration="3s">Watch Video &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></button>
                  </Col>
                </Row>
              </Container>
           </div> 
      </div>
    )
  }
}
export default Banner
