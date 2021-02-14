import Img from "gatsby-image"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 275px;
  height: auto;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 50px 0;
`
export const BackgroundImage = styled(Img)`
  width: 85%;
  height: auto;
  max-height: 480px;
  picture > img {
    width: 130% !important; //Deixar editavél
    object-position: -190px !important; //Deixar editavél
  }
`
export const BoxInfos = styled.div`
  position: absolute;
  left: 50%;
  width: calc(100% - 50%);
  height: auto;
  min-height: 320px;
  background-color: var(--main-color); //Deixar editavél
  z-index: 2;
  padding: 45px 35px;
`
export const Title = styled.h1``
export const Content = styled.div``
