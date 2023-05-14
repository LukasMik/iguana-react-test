import styled from "styled-components";
import {MAX_VIEWPORT_SIZE, SCREEN_SIZE_MOBILE} from "../../constants";

export const SectionContainer = styled.section`
  max-width: ${MAX_VIEWPORT_SIZE}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`