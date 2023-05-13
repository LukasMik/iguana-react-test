import styled from "styled-components";
import {SCREEN_SIZE_MOBILE} from "../constants";

export const PageWrapper = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`