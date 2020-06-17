import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./productbanner.css"
import  '../../animate.min.css';
// import WOW from 'wow.js';
class Productstop extends React.Component {
  // componentDidMount() {
  //   //new WOW().init();
  // }
  render() {
    return (
      <div className="product-banner">
          <Container>
            <Row>
               <Col sm="12">
                   <h1 className="mb-1 animate__animated animate__fadeInUp wow" >Lokyata ExcelRate</h1>
                   <span className="d-block animate__animated animate__fadeInUp wow" data-wow-duration="2s">AI-Driven Lending Decisions</span>
               </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
export default Productstop
