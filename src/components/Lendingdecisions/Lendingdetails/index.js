import React from "react"
// import Img from 'gatsby-image'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./Lendingdetails.css"
import sal from 'sal.js'
import  '../../sal.css';
import img1 from '../../../images/astronaut2-1024x1024.png'
import img2 from '../../../images/robot3-1024x1024.png'
import img3 from '../../../images/cloud2-1024x1024.png'
import img4 from '../../../images/fairLending3-1024x1024.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faPlayCircle);
const scrollAnimations = sal();

class Lendingdetails extends React.Component {
 
  render() {
    return (
      <div className="Lendingdetails-min">
          <Container>
            <Row>
               <Col sm="12" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-expo" >
                   <h2 className="mb-4 h2"><b>Better</b> lending decisions.</h2>
                   <p>A high-performance, real-time credit decisioning system. AI-driven scoring models are trained using your data and business goals to produce an API-accessible loan underwriting system that returns transparent credit decisions including grantable amount, interest rate, and term. Custom lending rules and policies are defined collaboratively with you and integrated by us.</p>
                   <Link to="/contact" className="button ">Schedule a Demo &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></Link>
               </Col>
            </Row>

          </Container>
            <div className="productdetails one pt-4">
                <Container>
                  <Row className="align-items-center">  
                    <Col lg="6" className="pl-lg-4 pr-lg-5 order-lg-6" data-sal-duration="1000" data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease-out-expo">
                      <h4 className="h3 mb-3">Go where others can’t.</h4>
                      <p>Lokyata has decades of experience helping lenders grow in data starved environments. Leverage alternative data and our AI platform to reach new markets where customers have no credit history or formal financial data.</p>
                    </Col>
                    <Col lg="6" className="pr-lg-5" data-sal-duration="1000" data-sal="slide-right" data-sal-delay="200" data-sal-easing="ease-out-expo" >
                      <img className="img-fluid" src={img1} alt="lending decisions" />
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className="productdetails">
              <Container>
                <Row className="align-items-center">  
                  <Col lg="6" className="pl-lg-4 pr-lg-5" data-sal-duration="1000" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-out-expo">
                    <h4 className="h3 mb-3">Understand and explain.</h4>
                    <p>Our platform helps you understand your customer and engage them throughout their lifecycle. With our proprietary transparentAI, you can dive deeper and see why lending decisions are made and which factors increase or reduce risk.</p>
                  </Col>
                  <Col lg="6" className="pr-lg-5 " data-sal-duration="1000" data-sal="slide-left" data-sal-delay="200" data-sal-easing="ease-out-expo">
                    <img className="img-fluid" src={img2} alt="lending decisions" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="productdetails two">
                <Container>
                  <Row className="align-items-center">  
                    <Col lg="6" className="pl-lg-4 pr-lg-5 order-lg-6"  data-sal-duration="1000" data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease-out-expo">
                      <h4 className="h3 mb-3">Plug in easy. Rest easy.</h4>
                      <p>We provide REST APIs for easy integration to our platform. Our multi-layered secure cloud approach ensures the highest level of security. We always put data security and privacy first. </p>
                    </Col>
                    <Col lg="6" className="pr-lg-5" data-sal-duration="1000" data-sal="slide-right" data-sal-delay="200" data-sal-easing="ease-out-expo">
                      <img className="img-fluid" src={img3} alt="lending decisions" />
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className="productdetails">
              <Container>
                <Row className="align-items-center">  
                  <Col lg="6" className="pl-lg-4 pr-lg-5" data-sal-duration="1000" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-out-expo" >
                    <h4 className="h3 mb-3">Fair, responsible lending. </h4>
                    <p>Contrary to popular belief, algorithms can be prejudiced. Ours aren’t. We ensure our lending models always comply with fair lending practices and help you monitor and immediately flag any potential issues.</p>
                  </Col>
                  <Col lg="6" className="pr-lg-5"  data-sal-duration="1000" data-sal="slide-left" data-sal-delay="200" data-sal-easing="ease-out-expo">
                    <img className="img-fluid" src={img4} alt="lending decisions" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="ScheduleDemo text-center" >
               <Container>
                 <Row>
                    <Col>
                       <h4 className="h3 mb-4 pl-5 pr-5" data-sal-duration="1300" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-expo">Better lending decisions means higher profits. Talk to us about how we can help you respond to COVID-19.</h4>
                       <Link to="/contact" className="button " data-sal-duration="1300" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease-out-expo">Schedule a Demo &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></Link>
                    </Col>
                 </Row>
               </Container>
            </div>
      </div>
    )
  }
}
export default Lendingdetails
