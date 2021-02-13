import * as S from "./styles"

import Logo from "@/Logo"
import React from "react"

const SidebarMenu = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Logo />
        <S.TitleSection>INFORMAÇÕES E DICAS</S.TitleSection>
      </S.Wrapper>
    </S.Container>
  )
}

export default SidebarMenu
