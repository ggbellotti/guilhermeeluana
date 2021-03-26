import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

export const ButtonPrimary = styled(AnchorLink)`
  background-color: var(--fourth-color);
  color: white;
  font-size: 1rem;
  font-family: "Josefin Sans";
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.125s ease;
  line-height: 1;
  padding: 11px 14px 8px 14px;
  &:hover {
    background-color: var(--third-color);
    color: white;
  }
  &:focus {
    background-color: var(--second-color);
    color: white;
  }
`
export const ButtonSecondary = styled(AnchorLink)`
  background-color: white;
  color: black;
  font-size: 1rem;
  font-family: "Josefin Sans";
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.125s ease;
  line-height: 1;
  padding: 11px 14px 8px 14px;
  &:hover {
    background-color: var(--third-color);
    color: white;
  }
  &:focus {
    background-color: var(--second-color);
    color: white;
  }
`
export const ButtonIcon = styled(AnchorLink)`
  font-family: "Josefin Sans";
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  width: fit-content;
  ${props =>
    props.alignRight
      ? "margin: 50px auto 50px 0;"
      : "margin: 50px 0 50px auto;"}
  ${props => (props.alignCenter ? "margin: 50px auto;" : "")}
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img,
  svg {
    margin-bottom: 20px;
  }
`
