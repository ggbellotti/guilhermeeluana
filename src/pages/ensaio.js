import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/Layout"
import Prewedding from "@/Sections/Prewedding"
import React from "react"
import SEO from "@/seo"

const Ensaio = () => {
  const Metadata = useStaticQuery(graphql`
    query metadataEnsaio {
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
        title="Ensaio Pré-wedding"
        description={Metadata.site.siteMetadata.description}
      />
      <Prewedding />
    </Layout>
  )
}

export default Ensaio
