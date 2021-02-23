import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"

export const Container = styled.nav`
  width: 100%;
  margin: 40px auto;
  text-align: center;
  position: absolute;
  z-index: 50;
  @media (max-width: 845px) {
    top: 0;
    margin: 0;
    height: ${({ open }) => (open ? "100%" : "0%")};
    overflow: auto;
  }
`
export const MenuToggle = styled.a`
  display: none;
  text-transform: uppercase;
  max-width: fit-content;
  width: 50px;
  z-index: 99;
  position: fixed;
  right: 0;
  @media (max-width: 845px) {
    background-color: var(--main-color);
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-left: auto;
    margin-right: 100px;
    transition: all 0.125s ease;
    text-decoration: ${({ open }) => (open ? "underline" : "none")};
    /* span {
      display: block;
      width: 33px;
      height: 2px;
      margin-bottom: 6px;
      position: relative;
      background: white;
      &:last-child {
        margin-bottom: 0;
      }
    } */
  }
  @media (max-width: 475px) {
    margin-right: 50px;
  }
`
export const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  transition: all 0s ease;
  z-index: 5;
  overflow: auto;
  @media (max-width: 845px) {
    position: fixed;
    width: 100%;
    left: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 320px;
    height: 70vh;
    padding-top: 30px;
    top: 0;
    background-color: var(--main-color);
    transition: ${({ open }) => (open ? "all 0.25s ease" : "all 0s ease")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  }
`
export const NavItem = styled.li`
  margin: 0 25px;
  transition: all 0.5s ease;
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
  @media (max-width: 845px) {
    margin: 0;
    padding: 10px 0;
    &:first-of-type {
      padding-top: 0;
    }
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-100px)"};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-125px)"};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-150px)"};
    }
    &:nth-child(4) {
      transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-175px)"};
    }
  }
`
export const NavLink = styled(AnchorLink)`
  text-decoration: none;
  padding: 5px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: 50%;
    z-index: -1;
    border: none;
    outline: none;
    background-image: linear-gradient(
      45deg,
      var(--main-color),
      var(--main-color)
    );
    transition: 0.125s;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    right: 50%;
    z-index: -1;
    background-image: linear-gradient(
      135deg,
      var(--main-color),
      var(--main-color)
    );
    border: none;
    outline: none;
    transition: 0.125s;
  }
  &:hover {
    &::before {
      width: 50%;
    }
    &::after {
      width: 50%;
    }
  }
  @media (max-width: 845px) {
    &::before {
      background-image: linear-gradient(
        45deg,
        var(--second-color),
        var(--second-color)
      );
    }
    &::after {
      background-image: linear-gradient(
        135deg,
        var(--second-color),
        var(--second-color)
      );
    }
  }
`
export const NavLinkDefault = styled.a`
  text-decoration: none;
  padding: 5px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: 50%;
    z-index: -1;
    border: none;
    outline: none;
    background-image: linear-gradient(
      45deg,
      var(--main-color),
      var(--main-color)
    );
    transition: 0.125s;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    right: 50%;
    z-index: -1;
    background-image: linear-gradient(
      135deg,
      var(--main-color),
      var(--main-color)
    );
    border: none;
    outline: none;
    transition: 0.125s;
  }
  &:hover {
    &::before {
      width: 50%;
    }
    &::after {
      width: 50%;
    }
  }
  @media (max-width: 845px) {
    &::before {
      background-image: linear-gradient(
        45deg,
        var(--second-color),
        var(--second-color)
      );
    }
    &::after {
      background-image: linear-gradient(
        135deg,
        var(--second-color),
        var(--second-color)
      );
    }
  }
`
export const Overlay = styled.div`
  display: none;
  @media (max-width: 845px) {
    display: block;
    background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: ${({ open }) => (open ? "4" : "-1")};
    /* transition: ${({ open }) =>
      open ? "all 0.05s ease" : "all 0s ease"}; */
    opacity: ${({ open }) => (open ? "1" : "0")};
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  }
`
