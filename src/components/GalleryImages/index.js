import "react-medium-image-zoom/dist/styles.css"

import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Zoom from "react-medium-image-zoom"

function GalleryImages() {
  const query = useStaticQuery(graphql`
    query indexQuery {
      allFile(filter: { relativePath: { regex: "/gallery*/" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const itemsImage = query.allFile.edges
  return (
    <S.Container>
      <S.Wrapper>
        <S.ImagesBox>
          {itemsImage.length === 0
            ? ""
            : itemsImage.map(({ node: { id, childImageSharp: { fluid } } }) => (
                <S.ItemsImages key={id}>
                  <Zoom>
                    <S.Image fluid={fluid} />
                  </Zoom>
                </S.ItemsImages>
              ))}
        </S.ImagesBox>
      </S.Wrapper>
    </S.Container>
  )
}

export default GalleryImages
