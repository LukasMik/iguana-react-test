import styled from "styled-components";
import {darkBlue, darkGrey, green} from "./GlobalStyle";

export const StyledButton = styled.button`
  border-radius: 8px;
  width: 9.7rem;
  height: 3rem;
  background-color: ${green};
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 0;
  border: none;
  margin: 2rem auto 0 auto;
  display: block;
  
  &:hover{
    transform: scale(1.02);
  }
  
  &:disabled {
    pointer-events: none;
    background-color: ${darkGrey};
    opacity: .7;
  }
`