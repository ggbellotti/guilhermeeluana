import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const DicasRoupas = () => {
  const Metadata = useStaticQuery(graphql`
    query metadataRoupas {
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
        title="Dicas de roupas"
        description={Metadata.site.siteMetadata.description}
      />
      <h1>Dicas de roupas</h1>
    </Layout>
  )
}

export default DicasRoupas
