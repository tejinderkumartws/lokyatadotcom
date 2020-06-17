import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Productstop, Lendingdetails} from '../components/Lendingdecisions'

const Lendingdecisions = () => (
  <Layout>
    <SEO title="Lending Decisions" />
    <Productstop></Productstop>
    <Lendingdetails></Lendingdetails>
  </Layout>
)

export default Lendingdecisions
