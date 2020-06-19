import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./ourimpact.css"
import sal from 'sal.js'
import  '../../sal.css';
   sal();
class OurimpactData extends React.Component {

  render() {
    const { data } = this.props
    const { contentfulHomeOurImpactTextNode } = data
    return (
      <div className="ourimpact-min text-center ">
          <Container>
            <Row>
               <Col>
                   <h3 className="mb-lg-4 h1" data-sal-duration="1000" data-sal="slide-up"  data-sal-easing="ease-out-bounce">{contentfulHomeOurImpactTextNode.ourImpact}</h3>
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
OurimpactData.propTypes = {
data: PropTypes.object,
}

export default function Ourimpact(props) {
return (
    <StaticQuery
      query={graphql`
          query ourImpactQuery {
            contentfulHomeOurImpactTextNode {
              ourImpact
            }
          }
      `}
      render={data => <OurimpactData data={data} {...props} />}
    />
  ) 
}
