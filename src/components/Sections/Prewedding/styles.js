import styled from "styled-components"

export const Container = styled.div`
  margin-top: 70px;
  padding-right: 75px;
  width: 100%;
  @media (max-width: 845px) {
    /* padding-right: 0px; */
    padding: 0 25px;
    width: calc(100% - 50px);
  }
`
export const Wrapper = styled.div`
  margin-top: 100px;
  @media (max-width: 845px) {
    margin-top: 0;
  }
`
