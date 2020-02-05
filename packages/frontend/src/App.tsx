import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import MainView from "./layouts/MainView";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('"https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"');

  body{
    font-family: 'Bebas Neue', cursive; 
  }
`;

const StyledApp = styled.div`
  height: 100vw;
  display: flex;
  flex-direction: column;
`;

const StyledNav = styled.nav`
  height: 300px;
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.nav`
  flex-grow: 1;
  text-align: center;
`

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledApp className="app">
        <StyledNav>
          {<Navigation />}
        </StyledNav>
        <StyledMain>
          {<MainView />}
        </StyledMain>

      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
