import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import FacebookLogin from "react-facebook-login";

const SignInPageStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  min-width: 100%;
  background-color: #222222;
  font-family: "Source Sans Pro";
`;

const TopPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 370px;
`;

const BottomPart = styled.div`
  display: flex;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  color: white;
`;

const FormSignIn = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 200px;
`;

const InputContent = styled.div`
  display: flex;
  justify-content: space-between;
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
      <TopPart>
        <Logo src={logo} alt="" />
        <FormSignIn>
          <InputContent>
            <Label htmlFor="firstName">First name</Label>
            <Input placeholder="Jim" htmlFor="firstName" />
          </InputContent>
          <InputContent>
            <Label htmlFor="lastName">Last name</Label>
            <Input placeholder="Hawkins" htmlFor="lastName" />
          </InputContent>
        </FormSignIn>
      </TopPart>
      <BottomPart>
        <FacebookLogin />
      </BottomPart>
    </SignInPageStyled>
  );
};
