import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./productbanner.css"
import sal from 'sal.js'
import  '../../sal.css';
  sal();

class ProjectTop extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div className="product-banner">
          <Container>
            <Row>
               <Col sm="12">
                  <h1 className="mb-1" data-sal-duration="1800" data-sal="fade" data-sal-easing="easeInSine">{data.pageTitle} </h1>
                  <span className="d-block" data-sal-duration="1800" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-expo">{data.subtitle} </span>
               </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
export default ProjectTop
