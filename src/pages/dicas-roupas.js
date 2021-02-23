import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"
import TipsClothing from "@/Sections/TipsClothing"

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
        image="/static/img/_MG_4464.jpg"
      />
      <TipsClothing />
    </Layout>
  )
}

export default DicasRoupas
