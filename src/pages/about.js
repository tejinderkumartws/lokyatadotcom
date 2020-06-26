import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Aboutbanner, Team} from '../components/About'
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Aboutbanner></Aboutbanner>
    <Team teamrole="Board Members & Advisors"></Team>
    <Team teamrole="Team"></Team>
  </Layout>
)

export default AboutPage
