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
        href="#menu"
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
          <S.NavItem open={open} key={i} onClick={() => setOpen(!open)}>
            {links.length - 1 === i ? (
              <S.NavLinkDefault
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={
                  link.label.charAt(0).toUpperCase() +
                  link.label.slice(1).toLowerCase()
                }
              >
                {link.label}
              </S.NavLinkDefault>
            ) : (
              <S.NavLink
                to={link.url}
                title={
                  link.label.charAt(0).toUpperCase() +
                  link.label.slice(1).toLowerCase()
                }
              >
                {link.label}
              </S.NavLink>
            )}
          </S.NavItem>
        ))}
        {/* <S.NavItem open={open}>
          <S.NavLinkDefault
            href="https://google.com.br"
            target="_blank"
            rel="noopener noreferrer"
            title="Lista de presentes"
          >
            LISTA DE PRESENTES
          </S.NavLinkDefault>
        </S.NavItem> */}
      </S.Navbar>
      <S.Overlay open={open} />
    </S.Container>
  )
}

export default Menu
