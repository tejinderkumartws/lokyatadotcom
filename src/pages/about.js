import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Aboutbanner, Team, Boardmembers} from '../components/About'
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Aboutbanner></Aboutbanner>
    <Boardmembers teamrole="Board Members & Advisors"></Boardmembers>
    <Team teamrole="Team"></Team>
  </Layout>
)

export default AboutPage
