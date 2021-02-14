import * as S from "./styles"

import Logo from "@/Logo"
import React from "react"

const SidebarMenu = props => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoGL>
          <Logo />
        </S.LogoGL>
        <S.TitleSection>{props.title ? props.title : ""}</S.TitleSection>
      </S.Wrapper>
    </S.Container>
  )
}

export default SidebarMenu
