import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Productstop, Liskanadetails} from '../components/Liskanalytics'

const Liskanalytics = () => (
  <Layout>
    <SEO title="Risk Analytics" />
    <Productstop></Productstop>
    <Liskanadetails></Liskanadetails>
  </Layout>
)

export default Liskanalytics
