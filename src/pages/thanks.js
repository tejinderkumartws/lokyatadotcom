import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import Logo from "../components/logo"
class Thankspage extends React.Component {
  render() {
    return (
      <div className="product-banner">
          <Container>
            <Row>
               <Col sm="12">
                   <Logo />
                   <h1 className="mb-1" data-sal-duration="1000" data-sal="slide-up" data-sal-easing="ease-out-expo">Thank you!</h1>
                   <p>Your contact information has been received and we will contact you soon.</p>
               </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
export default Thankspage