import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

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
 min-height: 100vh;
  width: 100%;
  height: 400vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
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

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const WorkPage = () => {
  const [index, setIndex] = React.useState(0);
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Work.length);
    }, 3000); // schimba cardul la fiecare 3 secunde

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const width = element.children[0].offsetWidth + 20; // 20 = margin/padding intre carduri
      element.style.transform = `translateX(${-index * width}px)`;
    }

    if (yinyang.current) {
      yinyang.current.style.transform = `rotate(${-index * 30}deg)`; // animatie simpla
    }
  }, [index]);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <BackButton />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} style={{ transition: "transform 0.8s ease-in-out" }}>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};


export default WorkPage;
