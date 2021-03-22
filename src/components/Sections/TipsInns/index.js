import "react-medium-image-zoom/dist/styles.css"

import * as S from "./styles"

import { ButtonIcon } from "@/Buttons"
import ContentMain from "@/ContentMain"
import { Image } from "@/BackgroundImage"
import React from "react"
import SidebarMenu from "@/SidebarMenu"
import Zoom from "react-medium-image-zoom"

const TipsInns = () => {
  return (
    <ContentMain>
      <SidebarMenu
        id="dicas-de-pousadas"
        title="Dicas de pousadas"
        voltar
        to="/#dicas-de-pousadas"
        noHeader
      />
      <S.Container>
        <S.Wrapper>
          <h3>Dicas de pousadas para nossos convidados</h3>
          <h1>Viagem, pousadas e hoteis</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh
            ipsum, posuere quis maximus non, interdum id lectus. Aliquam sed
            porta dolor, vel facilisis orci. Aliquam feugiat mauris non
            ullamcorper porta. Integer vitae neque arcu. Phasellus quam mi,
            accumsan a mollis eu, gravida ac odio. Phasellus efficitur ligula eu
            lorem hendrerit sollicitudin sit amet eget magna. Maecenas ultrices
            odio non magna luctus viverra. Vestibulum posuere placerat sem, a
            convallis ante porta eget. Duis ut imperdiet urna. Nulla id cursus
            sapien.
          </p>
          <h2 className="h2Margin">O Espaço Chico</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh
            ipsum, posuere quis maximus non, interdum id lectus.
          </p>
          <S.GridImages>
            <S.Item>
              <Zoom>
                <Image
                  name="espaco-chico.png"
                  alt="Vista do prédio - Espaço Chico"
                />
              </Zoom>
            </S.Item>
            <S.Item>
              <Zoom>
                <Image
                  name="espaco-chico2.png"
                  alt="Local da cerimônia - Espaço Chico"
                />
              </Zoom>
            </S.Item>
            <S.Item>
              <Zoom>
                <Image
                  name="20200705_142223_01.jpg"
                  alt="Vista da praia - Espaço Chico"
                />
              </Zoom>
            </S.Item>
          </S.GridImages>
          <h2>Hotéis e pousadas próximos ao local da cerimônia</h2>
          <p>
            Confira alguns locais que separamos e recomendamos que estão
            próximos ao Espaço Chico. Para ver mais informações, clique no local
            desejado.
          </p>
          <S.GridImages>
            <S.Item
              href="https://www.hotelarrastao.tur.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Hotel Arrastão"
            >
              <Image name="hotel-arrastao.jpg" alt="Hotel Arrastão" />
              <S.Legend>
                <span className="mark">Hotel Arrastão</span> - Há 5 minutos de
                carro do Espaço Chico. Veja{" "}
                <span className="mark">mais detalhes aqui</span>.
              </S.Legend>
            </S.Item>
            <S.Item
              href="http://www.hoteldosolexecutive.com.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Hotel Sol Executive"
            >
              <Image
                name="hotel-sol-executive.jpg"
                alt="Hotel do Sol Executive"
              />
              <S.Legend>
                <span className="mark">Hotel do Sol Executive</span> - Há 5
                minutos de carro do Espaço Chico. Veja{" "}
                <span className="mark">mais detalhes aqui</span>.
              </S.Legend>
            </S.Item>
            <S.Item
              href="https://abricobeachhotel.com.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Abricó Beach Hotel"
            >
              <Image name="hotel-abrico.jpg" alt="Abricó Beach Hotel" />
              <S.Legend>
                <span className="mark">Abricó Beach Hotel</span> - Há 6 minutos
                de carro do Espaço Chico. Mais detalhes, clique aqui.
              </S.Legend>
            </S.Item>
          </S.GridImages>
          <S.GridImages>
            <S.Item
              href="https://portograndehotel.com/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Porto Grande Hotel"
            >
              <Image name="porto-grande-hotel-.jpg" alt="Porto Grande Hotel" />
              <S.Legend>
                <span className="mark">Porto Grande Hotel</span> - Há 7 minutos
                de carro do Espaço Chico. Mais detalhes, clique aqui.
              </S.Legend>
            </S.Item>
            <S.Item
              href="https://www.hostelcentralsaosebastiao.com.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Hostel Central"
            >
              <Image name="hostel-central.jpg" alt="Hostel Central" />
              <S.Legend>
                <span className="mark">Hostel Central</span> - Há 12 minutos de
                carro do Espaço Chico. Mais detalhes, clique aqui.
              </S.Legend>
            </S.Item>
            <S.Item
              href="https://www.pousadagaroupas.com.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Hotel Pousada Garoupas"
            >
              <Image name="hotel-garoupas.jpg" alt="Hotel Pousada Garoupas" />
              <S.Legend>
                <span className="mark">Hotel Pousada Garoupas</span> - Há 12
                minutos de carro do Espaço Chico. Veja{" "}
                <span className="mark">mais detalhes aqui</span>.
              </S.Legend>
            </S.Item>
          </S.GridImages>
          <S.GridImages>
            <S.Item
              href="http://www.pousadadasesmaria.com.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Pousada da Sesmaria"
            >
              <Image name="pousada-sesmaria.jpg" alt="Pousada da Sesmaria" />
              <S.Legend>
                <span className="mark"> Pousada da Sesmaria</span> - Há 12
                minutos de carro do Espaço Chico. Veja{" "}
                <span className="mark">mais detalhes aqui</span>.
              </S.Legend>
            </S.Item>
            <S.Item
              href="https://pousadaipesaosebastiao.com.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Pousada Ipê"
            >
              <Image name="pousada-ipe.jpg" alt="Pousada Ipê" />
              <S.Legend>
                <span className="mark">Pousada Ipê</span> - Há 13 minutos de
                carro do Espaço Chico. Veja{" "}
                <span className="mark">mais detalhes aqui</span>.
              </S.Legend>
            </S.Item>
            <S.Item
              href="https://pousadavilabarequecaba.com.br/"
              rel="noreferrer noopener"
              target="_blank"
              title="Mais detalhes sobre Pousada Vila Barequeçaba"
            >
              <Image
                name="pousada-vila-barequecaba.jpg"
                alt="Pousada Vila Barequeçaba"
              />
              <S.Legend>
                <span className="mark">Pousada Vila Barequeçaba</span> - Há 22
                minutos de carro do Espaço Chico. Veja{" "}
                <span className="mark">mais detalhes aqui</span>.
              </S.Legend>
            </S.Item>
          </S.GridImages>
          <h2>Fique a vontade para pesquisar</h2>
          <p>
            Fique a vontade para pesquisar e ver o que é melhor para você e sua
            família. Sabemos que nossos dias não estão fácéis, por isso queremos
            dar o melhor conforto para vocês.
          </p>
          <ButtonIcon to="/#dicas-de-pousadas" title="Voltar">
            <svg
              style={{ transform: "rotate(0)" }}
              width="21"
              height="8"
              viewBox="0 0 21 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.646446 3.64644C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269202 4.02369 0.269202 3.82843 0.464465L0.646446 3.64644ZM21 3.5L1 3.5L1 4.5L21 4.5L21 3.5Z"
                fill="white"
              />
            </svg>
          </ButtonIcon>
        </S.Wrapper>
      </S.Container>
    </ContentMain>
  )
}

export default TipsInns
