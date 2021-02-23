import { graphql, useStaticQuery } from "gatsby"

import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"
import TipsInns from "@/Sections/TipsInns"

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
        image="/static/img/espaco-chico.png"
      />
      <TipsInns />
    </Layout>
  )
}

export default DicasPousadas
