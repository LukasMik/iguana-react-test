import styled from "styled-components";
import {beige, green} from "../../styles/GlobalStyle";
import {SCREEN_SIZE_MOBILE} from "../../../constants";

export const StyledCaravanTypesContainer = styled.div`
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    width: 56%;
    border-left: 1px solid ${beige};
    border-right: 1px solid ${beige};
    border-top: none;
    border-bottom: none;
  padding: 1.5rem 1rem 1rem 1rem;
  }
  border-top: 1px solid ${beige};
  border-bottom: 1px solid ${beige};
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  & > p {
    padding-bottom: 1rem;
  }
`

export const StyledCaravanTypeItem = styled.div`
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
  width: 9.75rem;
  line-height: 12px;
  }
  width: calc(50% - 0.5rem);
  display: inline;
  padding: 1rem;
  border: 1px solid ${beige};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid ${green};
    cursor: pointer;
  }
`