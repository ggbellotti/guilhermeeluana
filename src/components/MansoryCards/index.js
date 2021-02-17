import * as S from "./styles"

import { Image } from "@/BackgroundImage"
import React from "react"

const MansoryCards = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.Item>
            <S.ImageBg>
              <Image name="_MG_2442.jpg" alt="Guilherme e Luana" />
            </S.ImageBg>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description>
          </S.Item>
          <S.Item>
            <S.ImageBg>
              <Image name="_MG_2442.jpg" alt="Guilherme e Luana" />
            </S.ImageBg>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description>
          </S.Item>
          <S.Item>
            <S.ImageBg>
              <Image name="_MG_2442.jpg" alt="Guilherme e Luana" />
            </S.ImageBg>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description>
          </S.Item>
          <S.Item>
            <S.ImageBg>
              <Image name="_MG_2442.jpg" alt="Guilherme e Luana" />
            </S.ImageBg>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.Description>
          </S.Item>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default MansoryCards
