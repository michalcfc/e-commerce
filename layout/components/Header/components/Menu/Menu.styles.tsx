import styled, { StyledComponent } from "styled-components";

type DataProps = {
}


export const MenuWrapper = styled.div<DataProps>`
  display: flex;
  align-items: center;
`;

export const MenuItem: any = styled.div`
  cursor: pointer;
  margin-right: 2.4rem;
`;

export const Icon = styled(MenuItem)`
  position: relative;
  &:before {
    content: "1";
    color: #fff;
    top: -4px;
    left: -6px;
    line-height: 16px;
    width: 16px;
    height: 16px;
    font-size: 10px;
    font-weight: bold;
    background: #ff324d;;
    position: absolute;
    border-radius: 50%;
    text-align: center;
  }`


MenuItem.Icon = Icon