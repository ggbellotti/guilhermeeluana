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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
export const ItemsImages = styled.div`
  width: 100%;
  & > div {
    width: 100%;
    height: 100%;
  }
`
export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
