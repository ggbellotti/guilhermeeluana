import "react-medium-image-zoom/dist/styles.css"

import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import ModalVideoYT from "./ModalVideoYT"
import React from "react"
import Zoom from "react-medium-image-zoom"

function GalleryImages() {
  const query = useStaticQuery(graphql`
    query indexQuery {
      allFile(
        filter: { relativePath: { regex: "/gallery*/" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 2440, quality: 100) {
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
                <S.ItemsImages key={id} title="Ampliar foto">
                  <Zoom>
                    <S.Image fluid={fluid} />
                  </Zoom>
                </S.ItemsImages>
              ))}
          <ModalVideoYT />
        </S.ImagesBox>
      </S.Wrapper>
    </S.Container>
  )
}

export default GalleryImages
