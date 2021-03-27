import Img from "gatsby-image"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 275px;
  margin: 50px 0;
  height: auto;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const ImagesBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

  & > div {
    width: 100%;
    grid-column: 1/4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
`
export const ItemsImages = styled.a`
  width: 100%;
  text-decoration: none;
  margin: 0;
  padding: 0;
  & > div {
    width: 100%;
    height: 100%;
  }
`
export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
export const ModalVideo = styled.div`
  cursor: pointer;
`
export const VideoEmbed = styled.div`
  width: 90%;
  max-width: 1920px;
  height: 90vh;
  max-height: 1080px;
  margin: 0 auto;
  position: fixed;
  z-index: ${({ open }) => (open ? "999" : "-1")};
  left: 0;
  right: 0;
  top: 5vh;
  /* display: ${({ open }) => (open ? "flex" : "none")}; */
  display: flex;
  transition: all 1s ease;
  transform: scale(0);
  iframe {
    position: relative;
    z-index: ${({ open }) => (open ? "998" : "-1")};
  }
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  width: 15px;
  height: 15px;
  background-color: black;
  padding: 10px;
  z-index: ${({ open }) => (open ? "999" : "-1")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: white;
    font-size: 22px;
  }
`
export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: fixed;
  z-index: 997;
  left: 0;
  right: 0;
  top: 0;
`
