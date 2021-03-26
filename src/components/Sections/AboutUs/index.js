import * as S from "./styles"

import { ButtonSecondary } from "@/Buttons"
import ContentMain from "@/ContentMain"
import MansoryCards from "@/MansoryCards"
import React from "react"
import SidebarMenu from "@/SidebarMenu"

const AboutUs = () => {
  return (
    <ContentMain>
      <SidebarMenu id="sobre-nos" title="Sobre nós" topo />
      <S.Container>
        <h3>Cântico 132</h3>
        <h1>
          “Só de te ver, só de te olhar,
          <br />
          Sinto um amor que não vai passar.”
        </h1>
        <p>
          Quando nos conhecemos éramos muito jovens, mas nesse tempo
          desenvolvemos uma linda amizade, baseada em confiança, respeito e
          admiração um pelo outro. Depois de uma linda e romântica surpresa, nos
          tornamos namorados em abril de 2019; desde então nosso amor só
          aumentou e decidimos que tínhamos encontrado a felicidade um no outro.
        </p>
        <p>
          Nesses 2 anos que estamos juntos tem sido muito especial e a nossa
          união matrimonial só vai acrescentar ainda mais amor, cumplicidade e
          apoio em nossas vidas. Somos gratos a Jeová por nos unir e também
          gratos por nossas famílias e amigos que sempre nos apoiaram.
        </p>
        <MansoryCards />
        <S.CallActionEnsaio id="prewedding">
          <ButtonSecondary to="/ensaio" title="Ver ensaio" />
        </S.CallActionEnsaio>
      </S.Container>
    </ContentMain>
  )
}

export default AboutUs
