import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  position: relative;
  background: #fff;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  box-shadow: 4px 4px 20px 0 rgba(0,0,0,.1);
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
  margin: 0.5rem;
  padding: 0.5rem;
`;