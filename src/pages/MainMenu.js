import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Hero from "../components/Hero";
import { variables } from "../variables/variables";

const Wrapper = styled.div`
  display: flex;
  margin-top: 120px;

  height: 100px;
  width: 100%;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.div`
  margin: 16px auto 0;
`;

function MainMenu({ changePage }) {
  return (
    <>
      <Hero text="Matematyka"></Hero>
      <Wrapper>
        <Item>
          <Button onClick={() => changePage(variables.pages.start, 0)}>Rozpocznij</Button>
        </Item>
        <Item>
          <Button onClick={() => changePage(variables.pages.results, 0)}>Wyniki</Button>
        </Item>
        <Item>
          <Button>Ustawienia</Button>
        </Item>
      </Wrapper>
    </>
  );
}

export default MainMenu;
