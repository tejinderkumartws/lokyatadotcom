import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import CountUp from 'react-countup';
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
                   <h3 className="mb-lg-5 h1" data-sal-duration="1000" data-sal="slide-up"  data-sal-easing="ease-out-bounce">{contentfulHomeOurImpactTextNode.ourImpact}</h3>
               </Col>
            </Row>
            <Row>
               <Col md="4" className="mt-3" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-bounce">
                  <div className="d-flex justify-content-center">
                    <CountUp
                      start={1000}
                      end={4800.000}
                      separator=", "
                      delay={2} 
                      decimals={3}
                      decimal=","
                    >
                    </CountUp>
                    <span>+</span>
                  </div>
                  <em>Loans Scored</em>
               </Col>
               <Col md="4" className="mt-4 pt-lg-3" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease-out-bounce">
                  <div className="d-flex justify-content-center">
                    <CountUp
                      start={1500}
                      end={1300.000}
                      separator=", "
                      decimals={3}
                      delay={2} 
                      decimal=","
                    > 
                    </CountUp>
                    <span>+</span>
                  </div>
                  <em>Loans Disbursed</em>
               </Col>
               <Col md="4" className="mt-4 pt-lg-5" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-bounce">
                  <div className="d-flex justify-content-center">
                    <CountUp
                      start={1900}
                      end={200.000}
                      decimals={3}
                      delay={2} 
                      decimal=","
                    >
                    </CountUp>
                    <span>+</span>
                  </div>
                  <em>Customers Impacted</em>
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
