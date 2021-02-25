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

export const Notification = styled.div`
  max-width: 100%;
  margin-bottom: .75rem;
  border-radius: .375rem;
  padding: .75rem 1.25rem;
  border: 1px solid transparent;
  background:  ${({theme}) => theme.colors.green};
`