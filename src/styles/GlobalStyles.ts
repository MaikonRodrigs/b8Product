import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .2s linear;
    }

    html, border-style, #root {
        max-height: 100vh;
        max-width: 100%;

        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
				Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html {
        background: var(--bg);
        color: var(--white);
        font-size: 10px;
    }

    :root {
    --primary: #000;
    --secondary: #15181C;
    --white: #ffffff;
    --gray: #7A7A7A;
    --bg: #E5E5E5;
  }
`;
