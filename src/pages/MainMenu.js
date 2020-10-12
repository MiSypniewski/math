import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Hero from "../components/Hero";

const Wrapper = styled.div`
  display: flex;
  margin-top: 120px;

  height: 100px;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

function MainMenu({ changePage }) {
  return (
    <>
      <Hero text="Matematyka"></Hero>
      <Wrapper>
        <Button onClick={() => changePage("start", 0)}>Rozpocznij</Button>
        <Button>Ustawienia</Button>
      </Wrapper>
    </>
  );
}

export default MainMenu;
