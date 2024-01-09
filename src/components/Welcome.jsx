import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/hi-robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
     
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 19rem;
  }
  h1{
    display: flex;
    justify-content: center;
    margin-top:2rem;
  }
 
  span {
    color: #4e0eff;
  }
`;
