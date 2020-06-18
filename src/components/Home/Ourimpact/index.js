// import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./ourimpact.css"
import sal from 'sal.js'
import  '../../sal.css';
const scrollAnimations = sal();
class Ourimpact extends React.Component {

  render() {
    return (
      <div className="ourimpact-min text-center ">
          <Container>
            <Row>
               <Col>
                   <h3 className="mb-lg-4 h1" data-sal-duration="1000" data-sal="slide-up"  data-sal-easing="ease-out-bounce">Our Impact</h3>
               </Col>
            </Row>
            <Row>
               <Col md="4" className="mt-4" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                   <strong>4,800,000 +</strong>
                   <span>Loans Scored</span>
               </Col>
               <Col md="4" className="mt-4" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-bounce">
                   <strong>1,300,000 +</strong>
                   <span>Loans Disbursed</span>
               </Col>
               <Col md="4" className="mt-4" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
                   <strong>200,000 +</strong>
                   <span>Customers Impacted</span>
               </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
export default Ourimpact
