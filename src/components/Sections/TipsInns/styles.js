import styled from "styled-components"

export const Container = styled.div`
  margin-top: 70px;
  padding-right: 75px;
  @media (max-width: 845px) {
    /* padding-right: 0px; */
    padding: 0 25px;
    width: calc(100% - 50px);
  }
  .h2Margin {
    margin-top: 60px;
  }
`
export const Wrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 845px) {
    margin-top: 0;
  }
`
export const GridImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 50px 0;
  .gatsby-image-wrapper {
    height: 100%;
    min-height: 450px;
    max-height: 450px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    .gatsby-image-wrapper {
      height: 100%;
      min-height: 250px;
      max-height: 250px;
    }
  }
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    .gatsby-image-wrapper {
      height: 100%;
      min-height: 250px;
      max-height: 250px;
    }
  }
`
export const Item = styled.a`
  display: flex;
  flex-direction: column;
  /* background-color: var(--main-color); */
`
export const Legend = styled.span`
  font-size: 1rem;
  font-family: "Josefin Sans";
  padding: 10px;
`
