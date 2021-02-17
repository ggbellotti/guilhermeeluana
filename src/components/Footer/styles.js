import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 50px 0;
  @media (max-width: 845px) {
    padding-right: 0px;
  }
`
export const Wrapper = styled.div`
  min-height: 650px;
  width: 100%;
  display: flex;
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
  &:nth-child(1) {
    background-color: var(--main-color);
  }
  &:nth-child(2) {
    background-color: var(--five-color);
  }
  &:nth-child(3) {
    background-color: var(--six-color);
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
