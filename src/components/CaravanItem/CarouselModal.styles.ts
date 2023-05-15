import styled, {keyframes} from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

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
  backdrop-filter: blur(1px);
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogContent = styled(Dialog.Content)`
  background-color: #000000B3;
  backdrop-filter: blur(5px);
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none
  }
;
`

export const DialogTitle = styled(Dialog.Title)`
    margin: 0 0 3rem 0;
    font-weight: 500;
    color: white;
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
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff4d;
  }

  &:focus {
    box-shadow: 0 0 0 1px white
  }
`

export const CarouselImageWrapper = styled.div`
  position: relative;
  margin-right: 5rem;
  width: 400px;
  height: 300px;
`