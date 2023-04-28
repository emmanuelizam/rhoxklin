import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --blueDark: #038FCD;
    --blue_light: #08A9F0;
    --red: #1A7A25;
    --green: #81BF1C;
    --white: #ffffff;
    --font_super_small: 1rem;
    --font_small: 1.5rem;
    --font_medium: 2rem;
    --font_big: 2.8rem;
    --max-width: 1280px;

}

* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    margin: 0;
    padding: 0;
}
`;
