import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const DicasPousadas = () => {
  const Metadata = useStaticQuery(graphql`
    query metadataPousadas {
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
        title="Dicas de Pousadas"
        description={Metadata.site.siteMetadata.description}
      />
      <h1>Dicas de pousadas</h1>
    </Layout>
  )
}

export default DicasPousadas
