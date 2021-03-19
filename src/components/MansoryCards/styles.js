import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 50px 0;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0px;
  gap: 35px;
  min-height: 500px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 10px;
    min-height: auto;
  }
`
export const Item = styled.div`
  /* height: 375px;
  padding: 0 27px; */
  display: flex;
  flex-direction: column;
  &:nth-child(1) {
    /* padding-left: 0; */
  }
  &:nth-child(2) {
    /* margin-top: 115px; */
    position: relative;
    top: 55px;
    @media (max-width: 575px) {
      top: 0;
    }
  }
  &:nth-child(3) {
  }
  &:nth-child(4) {
    /* margin-top: 115px; */
    /* padding-right: 0; */
    position: relative;
    top: 55px;
    @media (max-width: 575px) {
      top: 0;
    }
  }
`
export const ImageBg = styled.div`
  height: 100%;
  width: 100%;
  & > div {
    height: 100%;
    width: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`
export const Description = styled.p`
  font-size: 1rem;
  font-family: "Josefin Sans";
  line-height: 1;
  margin-top: 5px;
  padding: 5px;
  text-align: center;
`
