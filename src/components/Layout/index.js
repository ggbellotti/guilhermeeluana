import * as S from "@/Layout/styles"

import GlobalStyle from "@/Global/styles"
import Menu from "@/Menu"
import { ParallaxProvider } from "react-scroll-parallax"
import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <GlobalStyle />
      <ParallaxProvider>
        <Menu />
        <section>{children}</section>
      </ParallaxProvider>
    </S.Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
