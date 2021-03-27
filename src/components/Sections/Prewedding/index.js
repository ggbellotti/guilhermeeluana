import * as S from "./styles"

import { ButtonIcon } from "@/Buttons"
import ContentMain from "@/ContentMain"
import GalleryImages from "@/GalleryImages"
import React from "react"
import SidebarMenu from "@/SidebarMenu"

const Prewedding = () => {
  return (
    <ContentMain>
      <SidebarMenu
        id="prewedding"
        title="Pré-wedding"
        voltar
        to="/#prewedding"
        noHeader
      />

      <S.Container>
        <S.Wrapper id="ensaio">
          <h3>Um lugar maravilhoso</h3>
          <h1>Nosso pré-wedding: Morro do capuava</h1>
          <p>
            Esse foi sem dúvidas um dos lugares mais lindos que já tivemos o
            prazer de conhecer e de fotografar, no dia 21/02/21. Uma paisagem
            linda e com uma vista incomparável, um pedacinho do paraíso bem
            pertinho de nós. Além do lugar, o mais especial de tudo foi que nós
            mesmos tivemos o prazer de nos fotografar e com certeza isso fez
            toda a diferença no nosso ensaio. Tivemos tudo do jeitinho que
            imaginávamos, além de registrarmos eternamente momentos mágicos que
            vivemos juntos.
          </p>
          <p>
            Seguem abaixo algumas fotos desse dia sensacional e um vídeo que foi
            feito com muito amor e carinho!
          </p>
          <GalleryImages />
          <ButtonIcon to="/#prewedding" title="Voltar">
            <svg
              style={{ transform: "rotate(0)" }}
              width="21"
              height="8"
              viewBox="0 0 21 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269202 4.02369 0.269202 3.82843 0.464465L0.646446 3.64644ZM21 3.5L1 3.5L1 4.5L21 4.5L21 3.5Z"
                fill="white"
              />
            </svg>
          </ButtonIcon>
        </S.Wrapper>
      </S.Container>
    </ContentMain>
  )
}

export default Prewedding
