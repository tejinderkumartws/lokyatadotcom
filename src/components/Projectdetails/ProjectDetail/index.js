import React from "react"
// import Img from 'gatsby-image'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap'
import "./ProjectDetail.css"
import sal from 'sal.js'
import  '../../sal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
library.add(faPlayCircle);
  sal();

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <div className="Lendingdetails-min">
          <Container>
            <Row>
               <Col sm="12" data-sal-duration="1000" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-out-expo" >
                   <h2 className="mb-4 h2" dangerouslySetInnerHTML={{ __html: data.childContentfulProjectDescriptionHeadingRichTextNode.childContentfulRichText.html }} />
                   <div dangerouslySetInnerHTML={{ __html: data.childContentfulProjectDescriptionRichTextNode.childContentfulRichText.html }} />
                   <Link to="/contact" className="button">Schedule a Demo &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></Link>
               </Col>
            </Row>
          </Container>
          {data.projectBlockReference.map((block) => (
            <div className={`productdetails pt-4 ${block.blockBackground} ${block.imagePosition}`}>
                <Container>
                  {block.childContentfulProjectBlockBlockTitleRichTextNode &&
                  <Row className="align-items-center">
                      <Col lg="12">
                        <h2 className="mb-4 h2 text-center" dangerouslySetInnerHTML={{ __html: block.childContentfulProjectBlockBlockTitleRichTextNode.childContentfulRichText.html }} />
                      </Col>
                  </Row>
                  }
                  <Row className="align-items-center">  
                    <Col lg={block.imagePosition==="Full" ? "12" : "6"} className="pl-lg-4 pr-lg-5 text_order" data-sal-duration="1000" data-sal={(block.imagePosition==="Left" ? "slide-up": "slide-up")} data-sal-delay="100" data-sal-easing="ease-out-expo">
                      {block.childContentfulProjectBlockBlockDescriptionRichTextNode && 
                      <div dangerouslySetInnerHTML={{ __html: block.childContentfulProjectBlockBlockDescriptionRichTextNode.childContentfulRichText.html }} 
                      />
                      } 
                    </Col>
                    <Col lg={block.imagePosition==="Full" ? "12" : "6"} className="pr-lg-5" data-sal-duration="1000" data-sal={(block.imagePosition==="Left" ? "slide-up": "slide-up")} data-sal-easing="ease-out-expo" >
                      <img className="img-fluid" src={block.image.fluid.src} alt={block.image.title} />
                    </Col>
                  </Row>
                </Container>
            </div>
          ))
          }
            <div className="ScheduleDemo text-center" >
               <Container>
                 <Row>
                    <Col>
                       <h4 className="h3 mb-4 pl-5 pr-5" data-sal-duration="1300" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-expo">
                         <div dangerouslySetInnerHTML={{ __html: data.childContentfulProjectCovid19BlockDescriptionRichTextNode.childContentfulRichText.html }} />
                       </h4>
                       <Link to="/contact" className="button " data-sal-duration="1300" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease-out-expo">Schedule a Demo &nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" /></Link>
                    </Col>
                 </Row>
               </Container>
            </div>
      </div>
    )
  }
}

export default ProjectDetail
