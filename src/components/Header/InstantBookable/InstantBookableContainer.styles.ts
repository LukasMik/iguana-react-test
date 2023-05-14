import styled from "styled-components";
import {SCREEN_SIZE_MOBILE} from "../../../constants";

export const StyledInstantBookableContainer = styled.div`
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    padding: 1.5rem 0 1rem 1rem;
  }
  padding: 0 0 1rem 0;
`