import styled, {keyframes} from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import {darkBlue} from "../styles/GlobalStyle";

export const overlayShow = keyframes`
    0% { 
      opacity: 0 
    }
    100% { 
      opacity: 1 
    }
`

export const contentShow = keyframes`
    0% { 
      opacity: 0;
      transform: translate(-50%, -48%) scale(.96) 
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1)
    }
`

export const DialogOverlay = styled(Dialog.Overlay)`
    background-color: #000000B3;
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogContent = styled(Dialog.Content)`
    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-height: 85vh;
    padding: 25px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    &:focus { outline: none };
`

export const DialogTitle = styled(Dialog.Title)`
    margin: 0;
    font-weight: 500;
    color: ${darkBlue};
    font-size: 17px;
`

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${darkBlue};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${darkBlue + 40}
  }

,
&: focus {
  box-shadow: 0 0 0 1px ${darkBlue}
},
`