import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {Covidbanner, Banner, Ourimpact, Projects} from '../components/Home'
import Contactform from "../components/Contactform"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Covidbanner></Covidbanner>
    <Banner></Banner>
    <Ourimpact></Ourimpact>
    <Projects></Projects>
    <Contactform></Contactform>
  </Layout>
)

export default IndexPage
