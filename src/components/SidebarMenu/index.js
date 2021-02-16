import * as S from "./styles"

import Logo from "@/Logo"
import React from "react"

const SidebarMenu = ({ id, title }) => {
  return (
    <S.Container id={id ? id : ""}>
      <S.Wrapper>
        <S.Content>
          <S.LogoGL>
            <Logo />
          </S.LogoGL>
          <S.TitleSection>{title ? title : ""}</S.TitleSection>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default SidebarMenu
