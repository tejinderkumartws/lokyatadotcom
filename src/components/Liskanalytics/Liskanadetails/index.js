import React from "react"
// import Img from 'gatsby-image'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./Lendingdetails.css"
import sal from 'sal.js'
import  '../../sal.css';
import img1 from '../../../images/Picture1-1.png'
import img2 from '../../../images/Picture2-1.png'
import img3 from '../../../images/Picture3-1.png'
import img4 from '../../../images/Picture4-1-1536x860.png'
import img5 from '../../../images/customer-level-3-2048x1152.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faPlayCircle);
const scrollAnimations = sal();
class Liskanadetails extends React.Component {
  render() {
    return (
      <div className="Lendingdetails-min Liskanadetails_min">
          <Container>
            <Row>
               <Col sm="12" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-expo">
                   <h2 className="mb-4 h2"><b>Better</b> risk management.</h2>
                   <p>A state-of-the-art web based analytics platform that gives you full visibility into your portfolio, including growth, liquidity, delinquency, and profitability. Define custom scenarios, analyze AI-driven forecasts, and develop custom risk mitigation strategies.</p>
                   <Link to="/contact" className="button ">Schedule a Demo &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></Link>
               </Col>
            </Row>

          </Container>
             <div className="pt-5 mt-lg-4">
                <Container>
                  <Row>
                    <Col sm="12" className="text-center">
                        <h4 className="h3 mb-3" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-expo">Uncover hidden <b>risks</b> and <b>opportunities</b> in your portfolio.</h4>
                    </Col>
                  </Row>
                </Container>
                <img className="img-fluid"  src={img5} alt="risk management" />
             </div>
            <div className="productdetails pt-4">
                <Container>
                  
                  <Row className="align-items-center">  
                    <Col lg="6" className="pl-lg-4 pr-lg-5 order-lg-6" data-sal-duration="1000" data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease-out-expo">
                      <h4 className="h3 mb-3"><b>AI Driven Customer-Level</b> Risk Segmentation</h4>
                      <ul>
                        <li>AI driven risk segmentation from individual customer risk profile data</li>
                        <li>Select risk segment to create risk scenarios</li>
                        <li>Target mitigation strategies to individuals in each segment</li>
                      </ul>
                    </Col>
                    <Col lg="6" className="text-center pr-lg-5" data-sal-duration="1000" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-out-expo">
                      <img className="img-fluid w-75" src={img1} alt="lending decisions" />
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className="productdetails pt-4">
              <Container>
                <Row className="align-items-center">  
                  <Col lg="6" className="pl-lg-4 pr-lg-5" data-sal-duration="1000" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-out-expo">
                    <h4 className="h3 mb-3"><b>Simple and Intuitive</b> Scenario Builder.</h4>
                    <ul>
                      <li>Build and run multiple scenarios, assess and compare impact</li>
                      <li>Adjust parameters to see response in real time</li>
                      <li>Optimize capital, liquidity, and customer relationship strategy</li>
                      <li>No Excel or programming skills required </li>
                    </ul>
                  </Col>
                  <Col lg="6" className="text-center pr-lg-5" data-sal-duration="1000" data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease-out-expo" >
                    <img className="img-fluid w-75" src={img2} alt="lending decisions" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="productdetails pt-4">
                <Container>
                  <Row className="align-items-center">  
                    <Col lg="6" className="pl-lg-4 pr-lg-5 order-lg-6" data-sal-duration="1000" data-sal="slide-left" data-sal-delay="100" data-sal-easing="ease-out-expo">
                      <h4 className="h3 mb-3"><b>More Accurate</b> Portfolio Forecasts</h4>
                      <ul>
                        <li>Segment-level risk scenarios roll up to portfolio forecast</li>
                        <li>Repayment behavior driven insights</li>
                        <li>Forecasts instantly refreshed</li>
                      </ul>
                    </Col>
                    <Col lg="6" className="text-center pr-lg-5" data-sal-duration="1000" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-out-expo">
                      <img className="img-fluid" src={img3} alt="lending decisions" />
                    </Col>
                  </Row>
                </Container>
            </div>
            <div className="productdetails pt-4 pb-lg-3">
              <Container>
                <Row className="align-items-center">  
                  <Col lg="12" className="pl-lg-4 " >
                    <h4 className="h3 mb-3 text-center" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-expo"><b>Portfolio Insights</b></h4>
                  </Col>
                  <Col lg="12" className="pl-lg-5 pr-lg-5" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-expo">
                    <img className="img-fluid" src={img4} alt="lending decisions" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="ScheduleDemo text-center" >
               <Container>
                 <Row>
                    <Col>
                       <h4 className="h3 mb-4 pl-5 pr-5" data-sal-duration="1300" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-expo">Better analysis means better mitigation. Talk to us about how we can help you respond to COVID-19.</h4>
                       <Link to="/contact" className="button " data-sal-duration="1300" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-expo">Schedule a Demo &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></Link>
                    </Col>
                 </Row>
               </Container>
            </div>
      </div>
    )
  }
}
export default Liskanadetails
