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
      <Hero text="Matematyka" />
      <Wrapper>
        <Item>
          <Button big onClick={() => changePage(variables.pages.start, 0)}>
            Rozpocznij {variables.emoji.brain}
          </Button>
        </Item>
        <Item>
          <Button big onClick={() => changePage(variables.pages.results, 0)}>
            Wyniki {variables.emoji.cup}
          </Button>
        </Item>
        <Item>
          <Button big onClick={() => changePage(variables.pages.settings, 0)}>
            Ustawienia {variables.emoji.settings}
          </Button>
        </Item>
      </Wrapper>
    </>
  );
}

export default MainMenu;
