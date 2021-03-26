import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #4B6A7E;
    --second-color: #4682B4;
    --third-color: #84A2B6;
    --fourth-color: #A17B62;
    --five-color: #008080;
    --six-color: #5F9EA0;
  }
  .tl-edges{
    overflow: inherit!important;
  }
  ::-moz-selection { 
    color: white; 
    background-color: var(--main-color)
  }
  ::selection { 
    color: white; 
    background-color: var(--main-color)
  }
  .SRLPlayerYouTube{
    iframe{
      max-height: 75vh;
    }
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
  font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  span.mark, mark{
    background-color: var(--main-color);
    color: white;
  }
  body {
    line-height: 1.2;
    background-color: #fff;
    font-family: 'Didact Gothic';
    font-size: 18px;
    color: #fff;
    background-color: var(--third-color);
    
    // ANIMATION LOADING
    
    &.hiddenBar{
      overflow: hidden;
    }
  }
  button {
    font-family: 'Josefin Sans';
    font-size: 16px;
    &:focus{
      outline: none;
    }
  }
  a{
    font-family: 'Josefin Sans';
    display:inline-block;
    border: none;
    outline: none;
    text-decoration: none;
    background-color: var(--green-color);
    color: #fff;
    padding: 5px;
  }
  h1{
    font-size: 2.5rem;
    margin: 10px 0px 30px 0px;
    font-family: 'Cormorant';
  }
  h2{
    font-family: 'Josefin Sans';
    margin: 10px 0px 30px 0px;
    font-size: 1.85rem;
  }
  h3{
    font-family: 'Cormorant';
    font-size: 1.55rem;
  }
  p{
    font-family: 'Didact Gothic';
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 1px;
    margin-bottom: 10px;
    a{
      font-family: 'Didact Gothic';
      font-size: 1rem;
      line-height: 1.6;
      letter-spacing: 1px;
      margin: 0;
      text-decoration-line: underline;
      text-decoration-style: wavy;
      padding: 0;
    }
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .showMenu{
    @media (max-width: 768px) {
      overflow: hidden;
    }
  }
  .hideLoading{
    display: none !important;
  }
  .splashLoading{
    display: flex;
    text-align: center;
    align-items: center;
    background-color: #F2F2F2;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    opacity: 1;
    svg{
      width: 75px;
      height: auto;
      path{
        fill: var(--main-color)
      }
    }
    @keyframes animationLoading{
      0%{
        opacity: 1;
      }
      50%{
        opacity: 1;
      }
      100%{
        opacity: 0;
      }
    }
    animation: animationLoading 2s ease;
  }
`
export default GlobalStyle
