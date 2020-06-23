import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
class Thankspage extends React.Component {
  render() {
    return (
      <Layout>
         <SEO title="Thanks" />
          <div className="text-center thanks-min d-flex align-items-center">
              <Container className="">
                <Row>
                  <Col sm="12">
                      <h1 className="mb-3 mt-3">Thank you!</h1>
                      <p>Your contact information has been received and we will contact you soon.</p>
                  </Col>
                </Row>
              </Container>
          </div>
      </Layout>
    )
  }
}
export default Thankspage