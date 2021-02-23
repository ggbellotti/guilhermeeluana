import * as S from "./styles"

import Logo from "@/Logo"
import React from "react"

const SidebarMenu = ({ id, title, topo, voltar, full, to, noHeader }) => {
  return (
    <S.Container
      id={id ? id : ""}
      topo={topo ? topo : ""}
      voltar={voltar ? voltar : ""}
      full={full ? full : ""}
      className={noHeader ? "noHeader" : ""}
    >
      <S.Wrapper>
        <S.Content>
          <S.LogoGL to={id ? "/#" + id : "/#topo"}>
            <Logo />
          </S.LogoGL>
          <S.TitleSection>{title ? title : ""}</S.TitleSection>
          {topo === true ? (
            <S.Topo to="/#topo" title="Subir">
              <svg
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
              <span>Subir</span>
            </S.Topo>
          ) : (
            ""
          )}
          {voltar === true ? (
            <S.Topo to={to ? to : "/#topo"} title="Voltar">
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
              <span>Voltar</span>
            </S.Topo>
          ) : (
            ""
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default SidebarMenu
