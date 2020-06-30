import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import img from '../images/rice-scaled2.jpg'
class Thankspage extends React.Component {
  render() {
    return (
      <Layout>
         <SEO title="Thanks" />
          <div className="text-left thanks-min d-flex align-items-center">
              <Container className="">
                <Row>
                  <Col sm="12">
                      <h1 className="mb-3 mt-3">Thanks!</h1>
                      <p>We will be in touch with you via email shortly.</p>
                  </Col>
                </Row>
              </Container>
          </div>
          <img className="img-fluid mb-0" src={img} alt="img" />

      </Layout>
    )
  }
}
export default Thankspage