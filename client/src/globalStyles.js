import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --primary: #ea6d27
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
  /*html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }*/

  `;
