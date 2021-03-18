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
          <h3>Pré-wedding no Morro do Capuava</h3>
          <h1>Um dos melhores lugares que já fotografamos</h1>
          <p>
            Queríamos um lugar aberto e com bastante ambientação natural para
            fazermos nossas fotos de ensaio. Pesquisamos bastante e então,
            decidimos fazer nossas fotos do pré-wedding no{" "}
            <a
              href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk01EBXN33RRrrjsuczKpAYY7TtW7Qw:1615915187463&q=Morro+do+Capuava&rflfq=1&num=10&ved=2ahUKEwiVgfGVqbXvAhVpDrkGHS4lAOAQtgN6BAgGEAc#rlfi=hd:;si:13326474592732203433;mv:[[-23.398028,-46.9912169],[-23.399940100000002,-46.991461699999995]]"
              rel="nofollow noreferrer"
              target="_blank"
              title="Veja o local do ensaio"
            >
              Morro do Capuava.
            </a>
          </p>
          <p>
            Além disso, resolvemos fazer algumas filmagens rápidas de última
            hora. Confira as fotos e os vídeos abaixo:
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
