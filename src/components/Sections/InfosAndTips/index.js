import * as S from "./styles"

import ContentMain from "@/ContentMain"
import Highlight from "@/Highlight"
import React from "react"
import SidebarMenu from "@/SidebarMenu"

const InfosAndTips = () => {
  return (
    <ContentMain>
      <SidebarMenu title="Informações e dicas" />
      <S.Container>
        <h3>O dia mais importante!</h3>
        <h1>Lembre-se com carinho dessa data inesquecível</h1>
        <p>
          Escolhemos um lugar incrível para o nosso dia especial. Vamos casar a
          beira mar em São Sebastião e esperamos que esse lindo cenário
          complemente a nossa união com chave de ouro.
        </p>
        <Highlight title="Quando e onde">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          placeat est minus fuga pariatur ab eius, cumque maxime fugit
          voluptatem enim tenetur ipsum repellendus ad a in nostrum commodi
          quam! Reprehenderit quas qui, quos obcaecati nulla, sunt officiis
          numquam et nostrum dicta, eaque veniam neque laboriosam esse eius
          expedita! Nesciunt, sint! Dolorum natus ullam delectus reprehenderit
          atque enim eum laboriosam. Suscipit exercitationem, qui quo unde,
          earum maxime accusamu
        </Highlight>
      </S.Container>
    </ContentMain>
  )
}

export default InfosAndTips
