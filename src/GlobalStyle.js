import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: 100%;
    overflow-x: hidden;
    --blue_dark: #038FCD;
    --blue_light: #08A9F0;
    --red: #1A7A25;
    --green: #81BF1C;
    --white: #ffffff;
    --gray: #FFF4FF;
    --font_super_small: 1rem;
    --font_small: 1.5rem;
    --font_medium: 2rem;
    --font_big: 7rem;
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
