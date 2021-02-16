import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const Container = styled.div`
  margin-top: 70px;
  padding-right: 75px;
  @media (max-width: 845px) {
    padding-right: 0px;
  }
`
export const ContainerHL = styled.div`
  margin-bottom: 35px;
`
export const WrapperHL = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Details = styled.div`
  padding: 4px 15px;
  color: white;
  font-size: 1.375rem;
  font-family: "Cormorant";
  background-color: var(--six-color);
  margin-right: 15px;
  min-width: 50px;
  text-align: center;
`
export const Description = styled.p`
  margin: 0;
  a {
    font-family: "Didact Gothic";
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 1px;
    margin-bottom: 0;
    padding: 0;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const ButtonLink = styled.div`
  text-align: center;
  .buttonPrimary {
    padding: 8px 14px;
    background-color: var(--fourth-color);
    color: white;
    font-size: 0.8125rem;
    font-family: "Josefin Sans";
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.125s ease;
    &:hover {
      background-color: var(--third-color);
      color: white;
    }
    &:focus {
      background-color: var(--second-color);
      color: white;
    }
  }
`
export const SectionTips = styled.div`
  margin: 50px 0;
`
export const ContainerTips = styled.div`
  width: 100%;
  min-height: 410px;
  overflow: hidden;
  background-color: ${props => props.bgColor || "var(--third-color)"};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    min-height: 250px;
  }
`
export const WrapperTips = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    &:nth-child(1) {
      ${ContainerTips} {
        &:nth-child(3) {
          display: none;
        }
      }
    }
    &:nth-child(2) {
      ${ContainerTips} {
        &:nth-child(1) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    &:nth-child(1) {
      ${ContainerTips} {
        &:nth-child(2) {
          display: none;
        }
      }
    }
    &:nth-child(2) {
      ${ContainerTips} {
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
`
export const ItemTips = styled(AniLink)`
  transition: all 0.355s;
  position: relative;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
  }
`
export const TitleTips = styled.h1`
  margin-bottom: 30px;
  font-size: 2.625rem;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 575px) {
    font-size: 2.125rem;
  }
`
export const LinkOff = styled.span`
  padding: 8px 14px;
  background-color: white;
  color: black;
  font-size: 0.8125rem;
  font-family: "Josefin Sans";
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.125s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--third-color);
    color: white;
  }
  &:focus {
    background-color: var(--second-color);
    color: white;
  }
`
export const BackgroundTips = styled.div`
  position: absolute;
  width: 102%;
  height: 100%;
  .gatsby-image-wrapper {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
