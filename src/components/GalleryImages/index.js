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
      imageSharp(fluid: { originalName: { eq: "thumb-video.png" } }) {
        fluid(maxWidth: 2440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          src
          originalImg
        }
      }
    }
  `)
  const itemsImage = query.allFile.edges

  const options = {
    buttons: {
      backgroundColor: "rgba(255,255, 255,1)",
      iconColor: "rgba(0, 0, 0, 1)",
      iconPadding: "10px",
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showThumbnailsButton: false,
    },
    progressBar: {
      backgroundColor: "#f2f2f2",
      fillColor: "#000000",
      height: "3px",
      showProgressBar: true,
    },
    translations: {
      autoplayText: "Reproduzir fotos",
      closeText: "Fechar",
      downloadText: "Baixar",
      fullscreenText: "Tela cheia",
      nextText: "Próxima",
      pauseText: "Pausar",
      previousText: "Voltar",
      thumbnailsText: "Esconder miniaturas",
      zoomOutText: "Ampliar",
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
                        <Img
                          fluid={fluid}
                          alt="Pré-wedding - Guilherme e Luana - Morro do Capuava"
                        />
                      </S.ItemsImages>
                    )
                  )}
              <S.ItemsImages
                href="https://www.youtube.com/watch?v=DfL8ClkkbSw"
                srl_video_thumbnail={query.imageSharp.fluid.src}
                srl_video_caption="Pré-wedding - Guilherme e Luana"
                title="Assistir vídeo"
                srl_width="100%"
                srl_height="100%"
              >
                <img
                  src={query.imageSharp.fluid.originalImg}
                  alt="Pré-wedding - Guilherme e Luana - Morro do Capuava"
                  style={{
                    maxWidth: "100%",
                    minHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </S.ItemsImages>
            </SRLWrapper>
          </S.ImagesBox>
        </S.Wrapper>
      </S.Container>
    </SimpleReactLightbox>
  )
}

export default GalleryImages
