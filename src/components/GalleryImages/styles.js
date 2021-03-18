import Img from "gatsby-image"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 275px;
  margin: 50px 0;
  height: auto;
  iframe {
    width: 100%;
    height: auto;
  }
  --animation-speed: 0.3s;
  --animation-function: ease-out;
  --backdrop-color: rgba(0, 0, 0, 0.75);

  @keyframes modal-video {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes modal-video-inner {
    from {
      transform: translate(0, 100px);
    }

    to {
      transform: translate(0, 0);
    }
  }

  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backdrop-color);
    z-index: 1000000;
    opacity: 1;
    animation-timing-function: var(--animation-function);
    animation-duration: var(--animation-speed);
    animation-name: modal-video;
    -webkit-transition: opacity var(--animation-speed) var(--animation-function);
    -moz-transition: opacity var(--animation-speed) var(--animation-function);
    -ms-transition: opacity var(--animation-speed) var(--animation-function);
    -o-transition: opacity var(--animation-speed) var(--animation-function);
    transition: opacity var(--animation-speed) var(--animation-function);
    &:focus {
      outline: none;
    }
  }

  .modal-video-effect-exit {
    opacity: 0;

    & .modal-video-movie-wrap {
      -webkit-transform: translate(0, 100px);
      -moz-transform: translate(0, 100px);
      -ms-transform: translate(0, 100px);
      -o-transform: translate(0, 100px);
      transform: translate(0, 100px);
    }
  }

  .modal-video-body {
    max-width: 940px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: table;
  }

  .modal-video-inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .modal-video-movie-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: #333;
    animation-timing-function: var(--animation-function);
    animation-duration: var(--animation-speed);
    animation-name: modal-video-inner;
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform var(--animation-speed)
      var(--animation-function);
    -moz-transition: -moz-transform var(--animation-speed)
      var(--animation-function);
    -ms-transition: -ms-transform var(--animation-speed)
      var(--animation-function);
    -o-transition: -o-transform var(--animation-speed) var(--animation-function);
    transition: transform var(--animation-speed) var(--animation-function);

    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -45px;
    right: 0px;
    display: inline-block;
    width: auto;
    height: auto;
    overflow: hidden;
    border: none;
    background: white;
    cursor: pointer;
    color: black;
    padding: 10px;

    /* &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: #fff;
      border-radius: 5px;
      margin-top: -6px;
    } */

    @media (max-width: 1024px) {
      position: relative;
      left: 0;
      top: -50px;
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
export const ImagesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
export const ItemsImages = styled.div`
  width: 100%;
  & > div {
    width: 100%;
    height: 100%;
  }
`
export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
export const ModalVideo = styled.div`
  cursor: pointer;
`
export const VideoEmbed = styled.div`
  width: 90%;
  max-width: 1920px;
  height: 90vh;
  max-height: 1080px;
  margin: 0 auto;
  position: fixed;
  z-index: ${({ open }) => (open ? "999" : "-1")};
  left: 0;
  right: 0;
  top: 5vh;
  /* display: ${({ open }) => (open ? "flex" : "none")}; */
  display: flex;
  transition: all 1s ease;
  transform: scale(0);
  iframe {
    position: relative;
    z-index: ${({ open }) => (open ? "998" : "-1")};
  }
`
export const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  width: 15px;
  height: 15px;
  background-color: black;
  padding: 10px;
  z-index: ${({ open }) => (open ? "999" : "-1")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: white;
    font-size: 22px;
  }
`
export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: fixed;
  z-index: 997;
  left: 0;
  right: 0;
  top: 0;
`
