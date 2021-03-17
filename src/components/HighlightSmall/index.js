import * as S from "./styles"

import { Image } from "@/BackgroundImage"
import React from "react"

const Highlight = ({ children, title, bgColor, alt, name, alignRight }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.BackgroundImage alignRight={alignRight}>
          <Image name={name} alt={alt} />
        </S.BackgroundImage>
        <S.BoxInfos bgColor={bgColor}>
          <S.Infos>
            <S.Title>{title ? title : ""}</S.Title>
            <S.Content>{children}</S.Content>
          </S.Infos>
        </S.BoxInfos>
      </S.Wrapper>
    </S.Container>
  )
}

export default Highlight
