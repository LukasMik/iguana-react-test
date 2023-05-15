import styled from "styled-components";

export const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* for Safari */
  z-index: 80;

  section {
    height: 5rem;
    display: flex;
    align-items: center;
  }
`