import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css?family=Roboto');
body{
    font-family: "Roboto", Arial, sans-serif;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    margin: 0;
}
#root {
    height: inherit;
    width: inherit;
}
`;
