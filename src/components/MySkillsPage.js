import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';

import BackButton from "../subComponents/BackButton";

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
  flex-wrap: wrap; // permite ca cardurile să treacă pe rândul următor pe mobil
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;

`

const Main = styled.div`
 margin-top: 4rem;
 border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};

  padding: 2rem;
  width: 30%;
  min-width: 280px; // pentru ecrane mici
  max-width: 400px;
  height: auto;

z-index:3;
line-height: 1.5;
cursor: pointer;

margin-left: 3rem;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
  justify-content: flex-start;
  transition: all 0.3s ease;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
  @media (max-width: 768px) {
    width: 80%; // ocupă mai mult pe mobil
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%; // aproape full width pe mobil foarte mic
    padding: 1rem;
  }
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;

}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>
                <BackButton />
<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Designer
</Title>
<Description>
I love to create design which speaks, Keep it clean, minimal and simple.
</Description>
<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Web Design
    </li>
    <li>
        Mobile Apps
    </li>
                            <li>User Interfaces (UI)</li>
                            <li>User Experience (UX)</li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma
    </li>
                            <li>Adobe Photoshop</li>
                            <li>Canva</li>
</ul>
</Description>

            </Main>
            <Main>
<Title>
                        <Develope width={40} height={40} /> Fullstack Developer
</Title>
                    <Description>Building clean and efficient fullstack web solutions.</Description>
<Description>
<strong>Skills</strong>
<p>
JavaScript, TypeScript, Java, C#, Kotlin, Python, PHP, SQL, HTML & CSS, etc.
</p>
</Description>
<Description>
                        <strong>Frameworks & Tools</strong>
                        <p>React.js, Vue.js, Next.js, Tailwind CSS, Laravel, Bootstrap, Git, Firebase, Stripe, Postman, Power BI, VScode, Github etc.
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
