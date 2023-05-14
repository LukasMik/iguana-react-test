import styled from "styled-components";
import {MAX_VIEWPORT_SIZE} from "../../constants";

export const StyledNavigation = styled.nav`
  position: fixed;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* for Safari */
  z-index: 1000;

  & > div {
    height: 5rem;
    max-width: ${MAX_VIEWPORT_SIZE}px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
  }
`