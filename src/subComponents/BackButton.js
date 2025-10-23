import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  top: 6rem;
  left: 2rem;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  z-index: 10;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        if (window.history.state && window.history.state.idx > 0) {
            // există istoric → mergi înapoi
            navigate(-1);
        } else {
            // nu există istoric → mergi la Main
            navigate("/", { replace: true });
        }
    };

    return <Button onClick={goBack}>Back</Button>;
};

export default BackButton;
