import "react-medium-image-zoom/dist/styles.css"

import * as S from "./styles"

import { Image } from "@/BackgroundImage"
import React from "react"
import Zoom from "react-medium-image-zoom"

const MansoryCards = () => {
  return (
    <S.Container className="mansoryCard">
      <S.Wrapper>
        <S.Content>
          <S.Item>
            <S.ImageBg>
              <Zoom>
                <Image
                  name="_MG_3743-Editar"
                  alt="Guilherme e Luana no Morro da Capuava"
                />
              </Zoom>
            </S.ImageBg>
            {/* <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description> */}
          </S.Item>
          <S.Item>
            <S.ImageBg>
              <Zoom>
                <Image
                  name="_MG_4433.jpg"
                  alt="Guilherme e Luana no Morro da Capuava"
                />
              </Zoom>
            </S.ImageBg>
            {/* <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description> */}
          </S.Item>
          <S.Item>
            <S.ImageBg>
              <Zoom>
                <Image
                  name="_MG_4701.jpg"
                  alt="Guilherme e Luana no Morro da Capuava"
                />
              </Zoom>
            </S.ImageBg>
            {/* <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description> */}
          </S.Item>
          <S.Item>
            <S.ImageBg>
              <Zoom>
                <Image
                  name="_MG_4297.jpg"
                  alt="Guilherme e Luana no Morro da Capuava"
                />
              </Zoom>
            </S.ImageBg>
            {/* <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description> */}
          </S.Item>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default MansoryCards
