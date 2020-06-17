import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./covidestyle.css"
import  '../../animate.min.css';
// import WOW from 'wow.js';
class Covidbanner extends React.Component {
  // componentDidMount() {
  //   //new WOW().init();
  // }
  render() {
    return (
      <div className="covidbanner">
          <Container>
            <Row>
               <Col md="12" className="animate__animated animate__fadeInUp wow">
                  <h6 className="mb-2">Use Lokyata’s AI-driven Predictive Risk Analytics platform in uncertain times like today’s COVID-19 impact, to proactively mitigate risks and optimize portfolio performance.</h6>
                  <Link to="#" className="link">Click here to see how we are helping our clients.</Link>
               </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
export default Covidbanner
