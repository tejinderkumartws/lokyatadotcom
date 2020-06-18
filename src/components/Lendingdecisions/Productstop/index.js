import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./productbanner.css"
import sal from 'sal.js'
import  '../../sal.css';
const scrollAnimations = sal();

class Productstop extends React.Component {
  render() {
    return (
      <div className="product-banner">
          <Container>
            <Row>
               <Col sm="12">
                   <h1 className="mb-1" data-sal-duration="1000" data-sal="slide-up" data-sal-easing="ease-out-expo">Lokyata ExcelRate</h1>
                   <span className="d-block" data-sal-duration="1800" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-expo">AI-Driven Lending Decisions</span>
               </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
export default Productstop
