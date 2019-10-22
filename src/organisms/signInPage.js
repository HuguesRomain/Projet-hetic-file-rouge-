import React from "react";
import styled from "styled-components";

const SignInPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  min-width: 100%;
  background-color: #222222;
  font-family: "Circular Std";
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  color: white;
`;

const FormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  width: 197px;
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 8px;
  margin-top: 8px;
`;

const Input = styled.input`
  height: 30px;
  border-radius: 4px;
  border: 0px;
`;

export const SignInPage = () => {
  return (
    <SignInPageStyled>
      <Logo src="" alt="" />
      <FormSignIn>
        <InputContent>
          <Label htmlFor="firstName">First name</Label>
          <Input htmlFor="firstName" />
        </InputContent>
        <InputContent>
          <Label htmlFor="lastName">Last name</Label>
          <Input htmlFor="lastName" />
        </InputContent>
      </FormSignIn>
    </SignInPageStyled>
  );
};
