import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';

import BackButton from "../subComponents/BackButton";
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(0.2rem, 1.2vw, 1.5rem); // font-size responsive
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: clamp(0.2rem, 4vw, 1rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.1rem, 3vw, 1rem);
  }
`;

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <BackButton />
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>

                    I’m Daniela, 23 years old, from Oradea, Romania. I am a passionate developer who loves creating clean, functional, and beautiful websites with great user experience.
                    <br /> <br />


                    I hold a Bachelor’s Degree in Computer Science from the Faculty of Electrical Engineering and Information Technology,
                    where I built a solid foundation in algorithms, data structures, and software design.
                    <br /> <br />

                    Alongside my technical path, I completed the Psychopedagogical Modules Level I & II,
                    and I’m now pursuing a Master’s Degree in Management in Information Technology,
                    combining creativity, strategy, and code to craft meaningful solutions.
                    <br /> <br />

                    I enjoy exploring new technologies, building innovative projects, and continuously learning to improve my craft.
                    You can connect with me via social links or email me at daniela.hebristean22@gmail.com.
                </Main>

                <BigTitle text="ABOUT" top="8%" left="12%" />

            </Box>

        </ThemeProvider>
    )
}

export default AboutPage
