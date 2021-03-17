import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 50px 0 15px 0;
  @media (max-width: 845px) {
    /* padding-right: 0px; */
    /* padding: 0 25px;
    width: calc(100% - 50px); */
  }
`
export const Wrapper = styled.div`
  min-height: 650px;
  width: 100%;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const Item = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 55px;
  position: relative;
  @media (max-width: 1024px) {
    padding: 15px;
    max-width: calc(100% - 30px);
    min-height: 250px;
  }
  &:nth-child(1) {
    background-color: var(--main-color);
    @media (max-width: 1024px) {
      order: 3;
    }
  }
  &:nth-child(2) {
    background-color: var(--five-color);
    @media (max-width: 1024px) {
      order: 2;
    }
  }
  &:nth-child(3) {
    background-color: var(--six-color);
    @media (max-width: 1024px) {
      order: 1;
    }
  }
`
export const BackgroundImage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    picture img {
      object-position: center bottom !important;
    }
  }
`
export const Title = styled.h1`
  font-size: 2.375rem;
  line-height: 1;
  text-align: center;
  margin: 35px 0 50px 0;
`
export const Description = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 1rem;
`
export const By = styled.a`
  font-size: 0.75rem;
  font-family: "Josefin Sans";
  text-decoration: none;
  text-align: center;
  margin: 25px auto 0 auto;
  display: flex;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`
