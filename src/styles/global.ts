import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-weight: bold;
    background-color: ${({ theme }) => theme.COLORS.CYAN_900};
  }

  body, input, textarea, a, button {
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;