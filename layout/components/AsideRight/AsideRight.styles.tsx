import styled from "styled-components";

type DataProps = {
  isFixed?: boolean
}

export const AsideWrapper = styled.aside<DataProps>`
  right: 0;
  grid-area: asideRight;
  position: ${({isFixed}) => isFixed && 'fixed'};
  &::after {
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    z-index: -1;
    opacity: 0.7;
    height: 100vh;
    position: fixed;
    background: ${({theme}) => theme.colors.purple};
  }
`;

export const AsideExit = styled.div<DataProps>`
  cursor: pointer;
`;

export const AsideContent = styled.div<DataProps>`
  width: 20rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  grid-area: asideRight;
  background: ${({theme}) => theme.colors.white};
`;

export const AsideItems = styled.div<DataProps>`
  flex-grow: 1;
`;

export const AsideItem = styled.div<DataProps>`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme}) => theme.colors.lightGray};
`;
