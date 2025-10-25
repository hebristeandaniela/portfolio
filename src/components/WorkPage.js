import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BackButton from "../subComponents/BackButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  overflow-x: hidden;

  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

const SocialWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Main = styled.div`
  margin-top: 4rem;
    margin-left: 8rem;
  display: flex;
  flex-wrap: wrap;          
  justify-content: center;  
  gap: 2rem;
  width: 100%;
  max-width: 1200px;       
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;  
    align-items: center;
    padding: 0 1rem;
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const yinyang = React.useRef(null);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <BackButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <SocialWrapper>
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>
        </SocialWrapper>

        <BigTitlte text="WORK" top="1%" right="17%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
