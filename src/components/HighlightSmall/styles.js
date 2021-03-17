import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 275px;
  margin: 50px 0;
  height: auto;
  @media (max-width: 1024px) {
    display: flex;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    height: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const BackgroundImage = styled.div`
  width: 100%;
  @media (max-width: 1024px) {
    height: 100%;
  }
  .gatsby-image-wrapper {
    width: 50%;
    height: auto;
    height: 600px;
    picture img {
      object-position: ${props =>
        props.alignRight ? "right !important" : "center center !important"};
    }
    @media (max-width: 1280px) {
    }
    @media (max-width: 1024px) {
      max-height: auto;
      width: 100%;
      height: 100%;
    }
  }
`
export const BoxInfos = styled.div`
  position: absolute;
  left: 40%;
  width: calc(100% - 50%);
  height: auto;
  min-height: 320px;
  z-index: 2;
  background-color: ${props => props.bgColor || "var(--main-color)"};
  @media (max-width: 1280px) {
    left: 35%;
    width: calc(100% - 30%);
  }
  @media (max-width: 1024px) {
    width: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    position: relative;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    margin-top: 0px;
  }
`
export const Infos = styled.div`
  padding: 45px 35px;
  @media (max-width: 1024px) {
    padding: 45px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 90px);
  }
  @media (max-width: 1024px) {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100% - 50px);
  }
  @media (max-width: 575px) {
    padding: 15px;
  }
`
export const Title = styled.h1``
export const Content = styled.div``
