import * as S from "./styles"

import ContentMain from "@/ContentMain"
import { Image } from "@/BackgroundImage"
import Logo from "@/Logo"
import React from "react"
import SidebarMenu from "@/SidebarMenu"

const Footer = () => {
  return (
    <ContentMain>
      <SidebarMenu id="fim" title="Chegamos ao fim" topo full />
      <S.Container>
        <S.Wrapper>
          <S.Item>
            <Logo />
            <S.Title>
              Guilherme
              <br /> & <br />
              Luana
            </S.Title>
            <S.Description>
              Domingo, 12 de setembro de 2021 <br />
              São Sebastião - Espaço Chico
            </S.Description>
          </S.Item>
          <S.Item>
            <S.BackgroundImage>
              <Image name="_MG_2442.jpg" alt="Guilherme e Luana" />
            </S.BackgroundImage>
          </S.Item>
          <S.Item>
            <S.Title style={{ marginBottom: "15px" }}>
              Colossensses 3:14
            </S.Title>
            <S.Description>
              “... revistam-se de amor,
              <br /> pois é o perfeito vínculo de
              <br /> união.“
            </S.Description>
          </S.Item>
        </S.Wrapper>
      </S.Container>
    </ContentMain>
  )
}

export default Footer
