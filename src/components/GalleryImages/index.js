import "react-medium-image-zoom/dist/styles.css"

import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import ModalVideoYT from "./ModalVideoYT"
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
              fluid(maxWidth: 2440, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      imageSharp(fluid: { originalName: { eq: "thumb-video.jpg" } }) {
        fluid(maxWidth: 2440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
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
      {/* <S.VideoEmbed open={open}>
        <S.CloseBtn onClick={() => setOpen(!open)} title="Fechar vídeo">
          <span>X</span>
        </S.CloseBtn>
        <S.Overlay onClick={() => setOpen(!open)} />
        <iframe
          title="Guilherme e Luana - Pré-wedding"
          src="https://www.youtube.com/embed/DfL8ClkkbSw"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </S.VideoEmbed> */}
    </S.Container>
  )
}

export default GalleryImages
