import * as S from "./styles"

import React, { useEffect, useState } from "react"

import links from "./content"

const Menu = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle("showMenu", open)
  }, [open])
  return (
    <S.Container open={open}>
      <S.MenuToggle
        open={open}
        href="#"
        title={open ? "Fechar menu" : "Abrir o menu"}
        onClick={() => setOpen(!open)}
      >
        {/* <span></span>
          <span></span>
          <span></span> */}
        <span>{open ? "Fechar Menu" : "Menu"}</span>
      </S.MenuToggle>
      <S.Navbar open={open}>
        {links.map((link, i) => (
          <S.NavItem open={open} key={i}>
            <S.NavLink
              to={link.url}
              title={
                link.label.charAt(0).toUpperCase() +
                link.label.slice(1).toLowerCase()
              }
            >
              {link.label}
            </S.NavLink>
          </S.NavItem>
        ))}
        <S.NavItem open={open}>
          <S.NavLinkDefault
            href="https://google.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            LISTA DE PRESENTES
          </S.NavLinkDefault>
        </S.NavItem>
      </S.Navbar>
    </S.Container>
  )
}

export default Menu
