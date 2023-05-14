import styled from "styled-components";
import {beige, green} from "../../styles/GlobalStyle";

export const StyledCaravanTypesContainer = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
  width: 56%;
  border-left: 1px solid ${beige};
  border-right: 1px solid ${beige};
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  & > p {
    padding-bottom: 1rem;
  }
`

export const StyledCaravanTypeItem = styled.div`
  width: 9.75rem;
  padding: 1rem;
  border: 1px solid ${beige};
  border-radius: 8px;
  line-height: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid ${green};
    cursor: pointer;
  }
`