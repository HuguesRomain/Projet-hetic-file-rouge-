import React from "react";
import styled from "styled-components";
import { SignInPage } from "./organisms/signInPage";
import "./reset.css";

const AppStyled = styled.div`
  display: flex;
  height: 812px;
`;

const App = () => {
  return (
    <AppStyled>
      <SignInPage />
    </AppStyled>
  );
};

export default App;
