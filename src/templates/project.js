import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {ProjectTop, ProjectDetail} from '../components/Projectdetails'

const Projectdetailpage = (props) => {
    const post = props.data.contentfulProject;

    return (
        <Layout>
            <SEO title={post.title} />
            <ProjectTop data={post}></ProjectTop>
            <ProjectDetail data={post}></ProjectDetail>
        </Layout>
    )
  
}

export default Projectdetailpage

export const pageQuery = graphql`
   query ProjectQuery($id: String!) {
    contentfulProject(id: {eq: $id}) {
        title
        subtitle
        pageTitle
        projectBlockReference {
          blockBackground
          blockTitle {
            blockTitle
          }
          imagePosition
          image {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              src
            }
            title
          }
          blockRepersentation
          childContentfulProjectBlockBlockDescriptionRichTextNode {
            childContentfulRichText {
              html
            }
          }
          childContentfulProjectBlockBlockTitleRichTextNode {
            childContentfulRichText {
              html
            }
          }
        }
        childContentfulProjectCovid19BlockDescriptionRichTextNode {
          childContentfulRichText {
            html
          }
        }
        childContentfulProjectDescriptionHeadingRichTextNode {
          childContentfulRichText {
            html
          }
        }
        childContentfulProjectDescriptionRichTextNode {
          childContentfulRichText {
            html
          }
        }
    }
  }
`