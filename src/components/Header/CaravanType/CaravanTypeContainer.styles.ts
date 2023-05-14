import styled from "styled-components";
import {beige} from "../../styles/GlobalStyle";

export const StyledCaravanTypesContainer = styled.div`
  padding: 1rem;
  width: 50%;
  border-left: 1px solid ${beige};
  border-right: 1px solid ${beige};

  & > p {
    padding-bottom: 0.75rem;
  }
`