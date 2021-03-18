import * as S from "./styles"

import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import ModalVideo from "react-modal-video"

const ModalVideoYT = () => {
  const query = useStaticQuery(graphql`
    query thumbVideo {
      imageSharp(fluid: { originalName: { eq: "thumb-video.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  const [isOpen, setOpen] = useState(false)
  const thumbVideo = query.imageSharp.fluid
  useEffect(() => {
    document.body.classList.toggle("hiddenBar", isOpen)
    const closePopVideo = document.getElementsByClassName(
      "modal-video-close-btn"
    )
    if (isOpen === true) {
      closePopVideo[0].ariaLabel = "Fechar vídeo"
      closePopVideo[0].textContent = "Fechar vídeo"
    }
    console.log(closePopVideo[0])
  }, [isOpen])

  return (
    <S.ItemsImages
      onClick={() => setOpen(!isOpen)}
      title={isOpen ? "Fechar vídeo" : "Ver vídeo"}
      style={{ cursor: isOpen ? "default" : "pointer" }}
    >
      <S.Image fluid={thumbVideo} />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="DfL8ClkkbSw"
      />
    </S.ItemsImages>
  )
}

export default ModalVideoYT
