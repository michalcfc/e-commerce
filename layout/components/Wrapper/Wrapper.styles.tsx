import styled, { css} from "styled-components";
import styledMap from 'styled-map';

const switchTheme = ({view}) => {
  switch (view) {
    case "fullWidth":
      return css`
      grid-template-areas:
      "header header header" 
      "main main main" 
      "footer footer footer";
    `;
    case "withAsides":
      return css`
      grid-template-areas:
      "asideLeft header header" 
      "asideLeft main asideRight" 
      "asideLeft footer asideRight";
    `;
    default:
      return css`
      grid-template-areas:
      "header header header" 
      "main main main" 
      "footer footer footer";
    `;
  }
}

export const WrapperStyles = styled.div`
  display: grid;
  height: 100vh;
  // overflow: hidden; 
  grid-template-rows: 60px 1fr 50px;
  grid-template-columns: 80px 1fr 50px;
  ${switchTheme};
`;