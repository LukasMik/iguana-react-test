import styled from "styled-components";
import {SectionContainer} from "../styles/SectionContainer.styles";
import {beige} from "../styles/GlobalStyle";
import {SCREEN_SIZE_MOBILE} from "../../constants";

export const StyledHeader = styled.header`
  border-top: 1px solid ${beige};
  border-bottom: 1px solid ${beige};
  margin-bottom: 2rem;
margin-top: 5rem;

`

export const HeaderContainer = styled(SectionContainer)`
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    align-items: stretch;
    flex-direction: row;
    gap: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;
`