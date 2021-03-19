import * as S from "./styles"

import { Image } from "@/BackgroundImage"
import React from "react"

const Header = ({ title, subtitle }) => {
  return (
    <S.Container id="topo">
      <S.BackgroundImage>
        <Image
          name="_MG_4113-Editar.jpg"
          alt="Guilherme e Luana no Morro da Capuava"
        />
      </S.BackgroundImage>

      <S.TextInfos>
        <S.Title>
          {title ? (
            title
          ) : (
            <>
              Guilherme <br />& Luana
            </>
          )}
        </S.Title>
        <S.SubTitle>
          {subtitle ? (
            subtitle
          ) : (
            <>
              Casamento <span>-</span>
              <br /> São Sebastião <span>-</span>
              <br /> 12/09/21
            </>
          )}
        </S.SubTitle>
        {title && subtitle ? (
          <S.ScrollDown to="/#topo" title="Página inicial">
            <span>Página inicial</span>
          </S.ScrollDown>
        ) : (
          <S.ScrollDown to="/#informacoes-e-dicas" title="Descer a página">
            {/* <span>Descer</span> */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M19.8728 8.82358C19.7033 8.65401 19.4276 8.65401 19.258 8.82358L10.0004 18.0811L0.741986 8.82358C0.572417 8.65401 0.296746 8.65401 0.127177 8.82358C-0.0423922 8.99315 -0.0423922 9.26882 0.127177 9.43839L9.69262 19.0038C9.77785 19.0882 9.88913 19.1308 10.0004 19.1308C10.1118 19.1308 10.223 19.0882 10.3074 19.0038L19.8729 9.43839C20.0424 9.26878 20.0424 8.99315 19.8728 8.82358Z"
                  fill="white"
                />
                <path
                  d="M19.8728 0.996419C19.7033 0.82685 19.4276 0.82685 19.258 0.996419L10.0004 10.2549L0.741986 0.997316C0.572417 0.827747 0.296746 0.827747 0.127177 0.997316C-0.0423922 1.16689 -0.0423922 1.44256 0.127177 1.61213L9.69262 11.1776C9.77785 11.2619 9.88913 11.3045 10.0004 11.3045C10.1118 11.3045 10.223 11.2619 10.3074 11.1767L19.8728 1.61123C20.0424 1.44166 20.0424 1.16599 19.8728 0.996419Z"
                  fill="white"
                />
              </g>
            </svg>
          </S.ScrollDown>
        )}
      </S.TextInfos>
    </S.Container>
  )
}

export default Header
