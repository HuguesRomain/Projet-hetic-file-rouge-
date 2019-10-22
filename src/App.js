import React from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import { SignInPage } from "./organisms/signInPage";
import "./reset.css";

injectGlobal`
  body {
    @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Notable', sans-serif;
  }
`;

const AppStyled = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <AppStyled>
      <SignInPage />
    </AppStyled>
  );
};

export default App;
