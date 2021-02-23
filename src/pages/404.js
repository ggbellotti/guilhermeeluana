import Header from "@/Header"
import Layout from "@/Layout"
import React from "react"
import SEO from "@/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Página não encontrada" />
    <Header
      title="Página não encontrada..."
      subtitle="Volte para a página inicial"
    />
  </Layout>
)

export default NotFoundPage
