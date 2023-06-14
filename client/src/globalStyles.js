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
    --body-bgcolor: rgba(16, 26, 36, 0.05);

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
    background: var(--body-bgcolor);
}
body:before{
  content:"";
  position: fixed;
  opacity: 0;
  visibility: hidden;
  z-index: 2;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.2) ;
  transition: 3s all ease;
}

body .offcanvas-menu :before{
  opacity: 1;
  visibility: visible;

}
a{
text-decoration: none;
transition:  .3s all ease;
}

h1, h2,h3,h4,h5 {
  font-family: var(--font-family-serif);
  color: var(--dark);
}
`;
