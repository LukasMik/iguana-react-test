import styled from "styled-components";
import {SCREEN_SIZE_MOBILE} from "../../constants";

export const StyledCaravanItem = styled.div`
  width: 100%;
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    width: 24.5rem;
  }
  background: #FFFFFF;
  border: 1px solid #EDEAE3;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 11.8rem;
    object-fit: cover;
  }
  
  &>div {
    padding: 1rem;
  }
`