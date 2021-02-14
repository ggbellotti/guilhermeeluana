import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const Highlight = ({ children, title }) => {
  const bg = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "20200705_142223_01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const imageBg = bg.file.childImageSharp.fluid
  return (
    <S.Container>
      <S.Wrapper>
        <S.BackgroundImage fluid={imageBg} /> {/* Deixar editavél */}
        <S.BoxInfos>
          <S.Title>{title ? title : ""}</S.Title>
          <S.Content>{children}</S.Content>
        </S.BoxInfos>
      </S.Wrapper>
    </S.Container>
  )
}

export default Highlight
