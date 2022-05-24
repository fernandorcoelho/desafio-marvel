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
    --black: #000;

    --gray-50: #f5f5f5;
    --gray-300: #b5b5b5;
    --gray-900: #202020;
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
    color: var(--gray-50);
    overflow-x: hidden;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Roboto", sans-serif;
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
`;
