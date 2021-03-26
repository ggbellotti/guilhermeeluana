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
          <h3>O que vestir em um casamento na praia?</h3>
          <h1>Dicas e recomendações de vestimenta</h1>
          <p>
            No litoral o clima costuma ser quente, porém com bastante ventania;
            o que pede um visual mais leve e de cores claras. Sendo assim,
            indicamos que não usem roupas pesadas e nem chamativas demais, visto
            que o casamento ocorrerá durante o dia. Outro detalhe importante é
            que o traje deverá ser inteiramente social, evitando o uso de roupas
            casuais, principalmente o chinelo.
          </p>
          <S.GridImages>
            <S.Item>
              <Zoom>
                <Image
                  name="vestido_lavanda_semi_sereia_com_manga_voal_1800_1_19af74d96e9c4702ca8caec834409c84.jpg"
                  alt="Dicas roupas femininas"
                />
              </Zoom>
              {/* <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend> */}
            </S.Item>
            <S.Item>
              <Zoom>
                <Image
                  name="vestido_midi_estampado_rose_1740_1_1a8ba00ca758eca90db6bff6a1ecb074.jpg"
                  alt="Dicas roupas femininas"
                />
              </Zoom>
              {/* <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend> */}
            </S.Item>
            <S.Item>
              <Zoom>
                <Image
                  name="vestido_rose_com_manga_assimetrica_e_babados_1790_1_08a4abe71dd4f135ec1db2a52c5173c5.jpg"
                  alt="Dicas roupas femininas"
                />
              </Zoom>
              {/* <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend> */}
            </S.Item>
          </S.GridImages>
          <S.GridImages>
            <S.Item>
              <Zoom>
                <Image
                  name="noivo-casamento-praia-blazer-claro.jpg"
                  alt="Vestidos"
                />
              </Zoom>
              {/* <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend> */}
            </S.Item>
            <S.Item>
              <Zoom>
                <Image name="t10_2x_1439143.jpg" alt="Vestidos" />
              </Zoom>
              {/* <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend> */}
            </S.Item>
            <S.Item>
              <Zoom>
                <Image name="homens-casamento-praia.jpg" alt="Vestidos" />
              </Zoom>
              {/* <S.Legend>
                Cores para praia - Vestidos bla bla bla bla bla
              </S.Legend> */}
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
