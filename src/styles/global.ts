import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  :root {
    --white: #ffffff;
    --black: #0f0f0f;

    --gray-50: #fafafa;
    --gray-100: #f5f5f5;
    --gray-300: #b5b5b5;
    --gray-900: #202020;
    
    --orange-50: #f3ede9;
    --red-500: #E92529;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: transparent;
    color: var(--gray-900);
    overflow-x: hidden;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Marvel", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  svg {
    flex-shrink: 0;
  }

  img,
  button,
  li {
    user-select: none;
  }

  h1 {
    color: var(--white);
    font: 700 1.5rem "Permanent Marker", sans-serif;
  }
`;
