import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: var(--third-color);
  position: relative;
  z-index: 2;
  max-width: 2048px;
  margin: 0 auto;
  @media (max-width: 845px) {
    flex-direction: column;
    /* padding: 0 25px;
    width: calc(100% - 50px); */
  }
`
// export const Wrapper = styled.div`
//   max-width: 1440px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: row;
// `
