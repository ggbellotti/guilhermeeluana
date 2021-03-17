import { graphql, useStaticQuery } from "gatsby"

import AboutUs from "@/Sections/AboutUs"
import Footer from "@/Footer"
import Header from "@/Header"
import InfosAndTips from "@/Sections/InfosAndTips"
import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const IndexPage = () => {
  const Metadata = useStaticQuery(graphql`
    query metadataIndex {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Guilherme e Luana"
        description={Metadata.site.siteMetadata.description}
      />
      <Header />
      <InfosAndTips />
      <AboutUs />
      <Footer />
      {/* <h1>Em teste</h1> */}
    </Layout>
  )
}

export default IndexPage
