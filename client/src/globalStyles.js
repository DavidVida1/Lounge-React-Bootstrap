import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --primary: #ea6d27;
    --primary-darken:#642a0a;
    --dark: #101a24;
    --light: #f3f4f4;
    --body-color: #5c6574;

    --sm: 576px;
    --md: 768px;
    --lg: 992px;
    --xl: 1200px;
    --xxl: 1400px;

    --font-family: "Inter", sans-serif;
    --font-family-serif:"David Libre",serif;
  }

body,html {
    overflow-x: hidden;
}

body {
    font-family: var(--font-family);
    color: var(--body-color);
}

a{
text-decoration: none;
transition:  .3s all ease;
}

  `;
