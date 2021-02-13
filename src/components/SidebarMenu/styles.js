import styled from "styled-components"

export const Container = styled.div`
  width: 70px;
  min-width: 70px;
  height: auto;
  min-height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  border-right: 1px solid var(--second-color);
  margin-right: 75px;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`
export const TitleSection = styled.h3`
  font-size: 0.875rem;
  font-family: "Josefin Sans";
  font-weight: 300;
  color: white;
`
