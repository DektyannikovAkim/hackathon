import styled, { createGlobalStyle } from "styled-components";

export const AppContent = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 80%;

  display: flex;
  flex: 1 0 auto;
  text-align: center;

  padding: 15px 0;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    /* Custom scrollbar for Firefox */
    scrollbar-color: rgba(180, 180, 180, 0.5) transparent;
    scrollbar-width: thin;

    box-sizing: border-box;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  html, body {
    background-color: #fbfbfb;

    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow-y: scroll;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }

  /* Custom scrollbar for Chrome/Edge/Safari */
  :not(textarea)::-webkit-scrollbar {
    width: .5em;
    height: .5em;
  }
   
  :not(textarea)::-webkit-scrollbar-track {
    background-color: transparent;
  }
   
  :not(textarea)::-webkit-scrollbar-thumb {
    background-color: rgba(180, 180, 180, 0.5);
    border-radius: 0.2em;
  }

  :not(textarea)::-webkit-scrollbar-thumb:hover {
    background-color: rgba(180, 180, 180, 1);
  }
`;
