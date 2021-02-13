import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 0.4rem;
  flex-direction: column;
  border: 1px solid transparent;
  background: ${({theme}) => theme.background};
  box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
  &:hover {
    border: 1px solid #845ef7;
    box-shadow: 4px 4px 20px 0 rgba(103, 58, 183, 0.43);
  };
`;

export const CardFigure = styled.figure`
  margin: 0;
  padding: 0;
`

export const CardImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const CardBody = styled.div`
  flex: 1 0 0;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const CardFooter = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
`;