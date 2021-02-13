import styled from "styled-components";

export const MainWrapper = styled.main`
  display: grid;
  grid-area: main;
  padding-top: 1rem;
  place-items: center;
  background:  ${({theme}) => theme.bacgrkoundMain};
`;

export const MainContainer = styled.div`
  width: 80%;
`