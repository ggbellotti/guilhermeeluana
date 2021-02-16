import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

export const ButtonPrimary = styled(AniLink)`
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
`
export const ButtonSecondary = styled(AniLink)`
  padding: 8px 14px;
  background-color: white;
  color: black;
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
`
