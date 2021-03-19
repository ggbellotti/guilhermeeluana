import "react-medium-image-zoom/dist/styles.css"

import * as S from "./styles"

import { ButtonIcon } from "@/Buttons"
import ContentMain from "@/ContentMain"
import { Image } from "@/BackgroundImage"
import React from "react"
import SidebarMenu from "@/SidebarMenu"
import Zoom from "react-medium-image-zoom"

const TipsClothing = () => {
  return (
    <ContentMain>
      <SidebarMenu
        id="dicas-de-roupas"
        title="Dicas de roupas"
        voltar
        to="/#dicas-de-roupas"
        noHeader
      />
      <S.Container>
        <S.Wrapper>
          <h3>Está em dúvida sobre sua vestimenta?</h3>
          <h1>Dicas e recomendações de roupas</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh
            ipsum, posuere quis maximus non, interdum id lectus. Aliquam sed
            porta dolor, vel facilisis orci. Aliquam feugiat mauris non
            ullamcorper porta. Integer vitae neque arcu. Phasellus quam mi,
            accumsan a mollis eu, gravida ac odio. Phasellus efficitur ligula eu
            lorem hendrerit sollicitudin sit amet eget magna. Maecenas ultrices
            odio non magna luctus viverra. Vestibulum posuere placerat sem, a
            convallis ante porta eget. Duis ut imperdiet urna. Nulla id cursus
            sapien.
          </p>
          <S.GridImages>
            <S.Item>
              <Zoom>
                <Image name="op-m-1.jpeg" alt="Vestidos" />
              </Zoom>
              <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend>
            </S.Item>
            <S.Item>
              <Zoom>
                <Image name="op-m-2.jpg" alt="Vestidos" />
              </Zoom>
              <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend>
            </S.Item>
            <S.Item>
              <Zoom>
                <Image name="op-m-3.jpg" alt="Vestidos" />
              </Zoom>
              <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend>
            </S.Item>
          </S.GridImages>
          <S.GridImages>
            <S.Item>
              <Zoom>
                <Image name="op-h-1.jpg" alt="Vestidos" />
              </Zoom>
              <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend>
            </S.Item>
            <S.Item>
              <Zoom>
                <Image name="op-h-2.jpg" alt="Vestidos" />
              </Zoom>
              <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend>
            </S.Item>
            <S.Item>
              <Zoom>
                <Image name="op-h-3.jpg" alt="Vestidos" />
              </Zoom>
              <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend>
            </S.Item>
          </S.GridImages>
          <ButtonIcon to="/#dicas-de-roupas" title="Voltar">
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

export default TipsClothing
