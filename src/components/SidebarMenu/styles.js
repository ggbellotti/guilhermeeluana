import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

export const Container = styled.div`
  width: 70px;
  min-width: 70px;
  height: auto;
  /* min-height: 100vh; */
  border-right: 1px solid var(--second-color);
  margin-right: ${props => (props.full ? "0" : "75px")};
  &.noHeader {
    @media (max-width: 845px) {
      padding-top: 60px;
    }
  }
  @media (max-width: 845px) {
    width: 100%;
    min-height: auto;
    border-right: none;
    border-bottom: 1px solid var(--second-color);
    /* background-color: var(--second-color); */
    padding: 0;
    margin: 0;
  }
`
export const LogoGL = styled(AnchorLink)`
  margin-bottom: 60px;
  @media (max-width: 845px) {
    margin-bottom: 0;
    margin-right: 25px;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 845px) {
    padding: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: calc(100% - 30px);
  }
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 70px;
  margin-top: 70px;
  @media (max-width: 845px) {
    flex-direction: row;
    margin-top: 0;
  }
`
export const TitleSection = styled.h3`
  font-size: 0.875rem;
  font-family: "Josefin Sans";
  font-weight: 300;
  color: white;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: rotate(180deg);
  @media (max-width: 845px) {
    transform: rotate(0);
    writing-mode: unset;
    text-orientation: unset;
  }
`
export const Topo = styled(AnchorLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 115px;
  @media (max-width: 845px) {
    display: none;
  }
  span {
    margin: 0;
    padding: 0;
    font-size: 0.875rem;
    font-family: "Josefin Sans";
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  svg {
    margin-bottom: 20px;
    transform: rotate(90deg);
  }
`
