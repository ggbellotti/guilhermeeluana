import * as S from "./styles"

import { ButtonSecondary } from "@/Buttons"
import ContentMain from "@/ContentMain"
import Highlight from "@/Highlight"
import HighlightSmall from "@/HighlightSmall"
import { Image } from "@/BackgroundImage"
import React from "react"
import SidebarMenu from "@/SidebarMenu"

const InfosAndTips = () => {
  // const event = {
  //   description:
  //     "Casamento de Guilherme e Luana a beira mar em São Sebastião. Esse lindo cenário irá complementar a nossa união com chave de ouro. Mais detalhes em nosso site: https://www.guilhermeeluana.com.br",
  //   duration,
  //   endDatetime: endDatetime.format("20210912T150000Z"),
  //   location: "-23.7609761,-45.4091356,21z",
  //   startDatetime: startDatetime.format("20210912T150000Z"),
  //   title: "Casamento - Guilherme e Luana",
  // }

  return (
    <ContentMain>
      <SidebarMenu id="informacoes-e-dicas" title="Informações e dicas" topo />
      <S.Container>
        <h3>O dia mais importante!</h3>
        <h1>Lembre-se com carinho dessa data inesquecível</h1>
        <p>
          Escolhemos um lugar incrível para o nosso dia especial. Vamos casar a
          beira mar em São Sebastião e esperamos que esse lindo cenário
          complemente a nossa união com chave de ouro.
        </p>
        <Highlight
          title="Quando e onde"
          bgColor="var(--main-color)"
          name="20200705_132637.jpg"
          alt="Vista do Espaço Chico"
        >
          <S.ContainerHL>
            <S.WrapperHL>
              <S.Details>Data</S.Details>
              <S.Description>Domingo • 12 de setembro de 2021</S.Description>
            </S.WrapperHL>
            <S.WrapperHL>
              <S.Details>Hora</S.Details>
              <S.Description>Às 15:00</S.Description>
            </S.WrapperHL>
            <S.WrapperHL>
              <S.Details>Local</S.Details>
              <S.Description>
                <a
                  href="https://www.google.com/maps/dir//''/@-23.7609761,-45.4091356,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x0:0x6641b0cc35248992!2m2!1d-45.4087036!2d-23.7611042!3e0"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Veja a rota"
                >
                  Espaço Chico • Av. Nossa Senhora do Amparo, SN • São Sebastião
                  • São Paulo
                </a>
              </S.Description>
            </S.WrapperHL>
            <S.Description>
              Caso queira conhecer um pouco sobre o nosso local, separamos
              algumas fotos e informações. Contamos com sua pontualidade.
            </S.Description>
          </S.ContainerHL>
          <S.ButtonLink>
            <ButtonSecondary title="Mais informações" to="/dicas-pousadas/" />
          </S.ButtonLink>
        </Highlight>
        <h3>Dicas e informações importantes</h3>
        <h1>Casar na praia é uma experiência diferente...</h1>
        <p>
          A praia é um ambiente por si só mais descontraído e leve, porém o
          casamento não deixa de ser uma ocasião formal. Por isso, para lhe
          ajudar, listamos algumas dicas e opções de vestimenta que se adequem
          ao evento. Também sabemos que para estarem presentes nesse dia
          especial serão necessários alguns planejamentos, visto que se trata de
          uma viagem mais longa. Pensando no bem estar dos nossos convidados,
          também fizemos uma lista com referências de pousadas e hotéis na
          região.
        </p>
        <S.SectionTips id="dicas-de-roupas">
          <S.WrapperTips>
            <S.ContainerTips bgColor="var(--five-color)">
              <S.ItemTips title="Ver dicas de roupas" cover to="/dicas-roupas/">
                <S.TitleTips>
                  Dicas de
                  <br />
                  Roupas
                </S.TitleTips>
                <S.LinkOff>Ver Dicas</S.LinkOff>
              </S.ItemTips>
            </S.ContainerTips>
            <S.ContainerTips>
              <S.ItemTips title="Ver dicas de roupas" cover to="/dicas-roupas/">
                <S.BackgroundTips>
                  <Image
                    name="f128g1yd12.png"
                    alt="Dicas de roupas para casamento de Guilherme e Luana"
                  />
                </S.BackgroundTips>
              </S.ItemTips>
            </S.ContainerTips>
            <S.ContainerTips>
              <S.ItemTips title="Ver dicas de roupas" cover to="/dicas-roupas/">
                <S.BackgroundTips>
                  <Image
                    name="132dgs76371.png"
                    alt="Dicas de roupas para casamento de Guilherme e Luana"
                  />
                </S.BackgroundTips>
              </S.ItemTips>
            </S.ContainerTips>
          </S.WrapperTips>
          <S.WrapperTips id="dicas-de-pousadas">
            <S.ContainerTips>
              <S.ItemTips
                title="Ver dicas de pousadas"
                cover
                to="/dicas-pousadas/"
              >
                <S.BackgroundTips>
                  <Image
                    name="pousada-vila-barequecaba.jpg"
                    alt="Dicas de pousadas para casamento de Guilherme e Luana"
                  />
                </S.BackgroundTips>
              </S.ItemTips>
            </S.ContainerTips>
            <S.ContainerTips>
              <S.ItemTips
                title="Ver dicas de pousadas"
                cover
                to="/dicas-pousadas/"
              >
                <S.BackgroundTips>
                  <Image
                    name="pousada-ipe.jpg"
                    alt="Dicas de roupas para casamento de Guilherme e Luana"
                  />
                </S.BackgroundTips>
              </S.ItemTips>
            </S.ContainerTips>
            <S.ContainerTips bgColor="var(--main-color)">
              <S.ItemTips
                title="Ver dicas de pousadas"
                cover
                to="/dicas-pousadas/"
              >
                <S.TitleTips>
                  DICAS DE
                  <br />
                  POUSADAS
                </S.TitleTips>
                <S.LinkOff>Ver Dicas</S.LinkOff>
              </S.ItemTips>
            </S.ContainerTips>
          </S.WrapperTips>
        </S.SectionTips>

        <HighlightSmall
          title="Felizes por estarmos juntos"
          bgColor="var(--six-color)"
          name="_MG_4619.jpg"
          alt="Foto de Guilherme e Luana"
        >
          <p>
            Queremos que saibam que seu carinho e apoio, nos fez ter certeza de
            quão especial é a presença de vocês nesse dia único para nós.
            Sabemos que o momento em que vivemos é incerto, mas de qualquer
            forma (presencial ou online) queremos que estejam juntos conosco
            nesta jornada.
          </p>
          <p>
            Caso queira contribuir com a nossa nova fase como casados, seguem
            algumas dicas de utensílios que já nos ajudariam muito.
          </p>
          <p style={{ marginBottom: "30px" }}>
            Desde já, o nosso eterno agradecimento!
          </p>
          <S.ButtonLink>
            <a
              className="buttonPrimary"
              title="Ver lista de presentes"
              href="https://google.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver lista de presentes
            </a>
          </S.ButtonLink>
        </HighlightSmall>
      </S.Container>
    </ContentMain>
  )
}

export default InfosAndTips
