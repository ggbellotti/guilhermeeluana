import * as S from "./styles"

import React from "react"

const ContentMain = ({ children }) => {
  return (
    <S.Container>
      {/* <S.Wrapper>{children}</S.Wrapper> */}
      {children}
    </S.Container>
  )
}

export default ContentMain
