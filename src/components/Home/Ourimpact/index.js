// import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./ourimpact.css"
import  '../../animate.min.css';
// import WOW from 'wow.js';
class Ourimpact extends React.Component {
  // componentDidMount() {
  //   //new WOW().init();
  // }
  render() {
    return (
      <div className="ourimpact-min text-center ">
          <Container>
            <Row>
               <Col>
                   <h3 className="mb-lg-4 h1 animate__animated animate__fadeInUp  wow">Our Impact</h3>
               </Col>
            </Row>
            <Row>
               <Col md="4" className="mt-4 animate__animated animate__fadeInUp wow" data-wow-duration="1s">
                   <strong>4,800,000 +</strong>
                   <span>Loans Scored</span>
               </Col>
               <Col md="4" className="mt-4 animate__animated animate__fadeInUp wow" data-wow-duration="2s">
                   <strong>1,300,000 +</strong>
                   <span>Loans Disbursed</span>
               </Col>
               <Col md="4" className="mt-4 animate__animated animate__fadeInUp wow" data-wow-duration="3s">
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
