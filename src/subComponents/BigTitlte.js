import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:${props => `rgba(${props.theme.textRgba},0.1)`};
font-size: calc(4rem + 5vw);
z-index:0;
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 8vw, 4rem);
    top: 8%;   // ajustează poziția pe mobil
    left: 35%;
    right: auto;
  }
`


const BigTitlte = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right}>
            {props.text}
        </Text>
    )
}

export default BigTitlte
