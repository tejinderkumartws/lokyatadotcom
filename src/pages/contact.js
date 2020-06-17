import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contactform from "../components/Contactform"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Contactform></Contactform>
  </Layout>
)

export default ContactPage
