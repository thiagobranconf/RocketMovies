import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{

    font-size: 62.5%;

    --ff-primary: 'Roboto Slab', serif;

  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: var(--ff-primary);
    font-size: 16px;
    outline: none;
  }

  a,
  button {
    cursor: pointer;
    transition: filter 0.2;
  }

  a:hover,
  button:hover {
    filter: brightness(0.9);

  }

  a {
    text-decoration: none;
  }


`