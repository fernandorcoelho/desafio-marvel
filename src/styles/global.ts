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
    --gray-900: #202020;
    
    --red-500: #E92529;
    --yellow-500: #f9b916;
    --orange-500: #D54900;
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

  ::selection {
    color: var(--orange-500);
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--gray-900);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: var(--gray-50);
  }
`;
