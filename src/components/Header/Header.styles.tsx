import styled from "styled-components";
import {SectionContainer} from "../styles/SectionContainer.styles";
import {beige} from "../styles/GlobalStyle";

export const StyledHeader = styled.header`
  border-top: 1px solid ${beige};
  border-bottom: 1px solid ${beige};
  margin-bottom: 2rem;
margin-top: 5rem;

`

export const HeaderContainer = styled(SectionContainer)`
  display: flex;
  align-items: stretch;
`