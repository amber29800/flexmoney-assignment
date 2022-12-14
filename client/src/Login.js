import React, { useState } from "react";
import styled from "styled-components";
import  Axios  from "axios";

const Login = () => {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

const register = () => {
    Axios.post("http://localhost:4000/login", {
        username: usernameLog,
        password: passwordLog
    }).then((err, res) => {
        if(err) console.log(err);
        else console.log(res)
        
    })
}

  return (
    <LoginWrapper>
      <lable>Login</lable>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsernameLog(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPasswordLog(e.target.value);
        }}
      />
      <ButtonWrapper>
        <button onClick={register}>Log In</button>
      </ButtonWrapper>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div``;
