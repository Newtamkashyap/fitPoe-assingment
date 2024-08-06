import styled from 'styled-components';
import createGlobalStyle from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  font-size: calc(10px + 2vmin);
  color: black;
`;

export const FooterWrapper = styled.footer`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;
