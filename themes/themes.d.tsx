import 'styled-components';

declare module 'styled-components' {

  
  export interface DefaultTheme {
    background: string;
    bacgrkoundMain: string
    text: string;
    body: string;
    boxShadow: string
    boxShadowColor: string
    colors: {
      [el: string]: string
    }
    spacing: {
      [el: string]: string
    }
    buttonColor: {}
  }
}