import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  border: 1px solid #ddd;
  &:hover {
    border: 1px solid #845ef7;
  }
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
  margin: 0.5rem;
  padding: 0.5rem;
`;