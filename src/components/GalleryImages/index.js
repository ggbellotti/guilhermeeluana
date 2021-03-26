import "react-medium-image-zoom/dist/styles.css"

import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"
import { SRLWrapper } from "simple-react-lightbox-pro"
import SimpleReactLightbox from "simple-react-lightbox-pro"

// import Zoom from "react-medium-image-zoom"

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
            publicURL
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
          src
        }
      }
    }
  `)
  const itemsImage = query.allFile.edges

  const options = {
    buttons: {
      backgroundColor: "rgba(30,30,36,0.8)",
      iconColor: "rgba(255, 255, 255, 0.8)",
      iconPadding: "10px",
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: false,
    },
  }

  return (
    <SimpleReactLightbox>
      <S.Container>
        <S.Wrapper>
          <S.ImagesBox>
            <SRLWrapper options={options}>
              {itemsImage.length === 0
                ? ""
                : itemsImage.map(
                    ({
                      node: {
                        id,
                        publicURL,
                        childImageSharp: { fluid },
                      },
                    }) => (
                      <S.ItemsImages
                        href={publicURL}
                        key={id}
                        title="Ampliar foto"
                      >
                        <Img fluid={fluid} />
                      </S.ItemsImages>
                    )
                  )}
              <S.ItemsImages
                href="https://www.youtube.com/watch?v=DfL8ClkkbSw"
                srl_video_thumbnail={query.imageSharp.fluid.src}
                srl_video_caption="Pré-wedding - Guilherme e Luana"
                title="Ampliar foto"
              >
                <Img fluid={query.imageSharp.fluid} />
              </S.ItemsImages>
            </SRLWrapper>
          </S.ImagesBox>
        </S.Wrapper>
      </S.Container>
    </SimpleReactLightbox>
  )
}

export default GalleryImages
