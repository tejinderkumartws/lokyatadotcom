import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./covidestyle.css"
// import  '../../animate.min.css';
import sal from 'sal.js'
import  '../../sal.css';
const scrollAnimations = sal();
class Covidbanner extends React.Component {

  render() {
    return (
      <div className="covidbanner">
          <Container>
            <Row>
               <Col md="12" data-sal-duration="1000" data-sal="slide-up" data-sal-easing="ease-out-bounce">
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
