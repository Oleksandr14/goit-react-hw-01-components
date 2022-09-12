import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  padding: ${p => p.theme.space[4]}px;
  margin: 0;
  background-color: RGBA(49,47,20,0.13);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,h2,h3,h4,h5,h6,h7,p,ul {
    margin: 0;
}

img{
  display: block;
  max-width: 100%;
  height: auto;
}
`;
