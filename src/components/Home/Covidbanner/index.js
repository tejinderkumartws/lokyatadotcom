import { Link } from "gatsby"
import React from "react"
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./covidestyle.css"

import sal from 'sal.js'
import  '../../sal.css';
  sal();

class CovidbannerData extends React.Component {
  render() {
    const { data } = this.props
    const { contentfulHome } = data
    return (
      <div className="covidbanner">
          <Container>
            <Row>
               <Col md="12" data-sal-duration="1000" data-sal="slide-up" data-sal-easing="ease-out-bounce">
                  <h6 className="mb-2"
                    dangerouslySetInnerHTML={{
                      __html:
                      contentfulHome.covid19Instruction
                          .covid19Instruction,
                      }}
                  />
                  <Link to="/risk-analytics" className="link">{contentfulHome.link}</Link>
               </Col>
            </Row>
          </Container>
      </div>
    )
  }
}
CovidbannerData.propTypes = {
  data: PropTypes.object,
}

export default function Covidbanner(props) {
  return (
    <StaticQuery
      query={graphql`
          query CovidQuery {
            contentfulHome {
              link
              covid19Instruction {
                covid19Instruction
              }
            }
          }
      `}
      render={data => <CovidbannerData data={data} {...props} />}
    />
  )
}
