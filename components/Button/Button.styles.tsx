import styledMap from "styled-map";
import { lighten } from "polished";
import styled from "styled-components";

const buttonColor = styledMap`
  default: ${({ theme }) => theme.colors.white};
  secondary: ${({ theme }) => theme.colors.dark};
  danger:  ${({ theme }) => theme.colors.white};
`;

const buttonBackground = styledMap`
  default: ${({ theme }) => theme.colors.purple};
  secondary: ${({ theme }) => theme.colors.lightgray};
  danger:  ${({ theme }) => theme.colors.red};
`;

const buttonHover = styledMap`
  default: ${({ theme }) => lighten(0.1, theme.colors.purple)};
  secondary: ${({ theme }) => lighten(0.1, theme.colors.lightGray)};
  danger:  ${({ theme }) => lighten(0.1, theme.colors.red)};
`;

export const ButtonWrapper = styled.button`
  cursor: pointer;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  font-size: .8rem;
  margin: ${({theme}) => theme.spacing.xs};
  border-radius: .25rem;
  padding: .47rem .75rem;
  border: 1px solid transparent;
  color: ${buttonColor};
  background: ${buttonBackground};
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background: ${buttonHover};
  }
`;