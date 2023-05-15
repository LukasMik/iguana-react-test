import styled from "styled-components";
import {SCREEN_SIZE_MOBILE} from "../../constants";
import {beige, darkBlue, orange} from "../styles/GlobalStyle";

export const StyledCaravanItem = styled.div`
  width: 100%;
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    width: calc(33.3333% - 1.3333rem);
  }
  background: #FFFFFF;
  border: 1px solid #EDEAE3;
  border-radius: 8px;
  overflow: hidden;

  & > div {
    padding: 1rem;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 11.8rem;
  position: relative;
`

export const Descriptor = styled.small`
  color: ${orange};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`

export const FeaturesSection = styled.div`
  border-top: 1px solid ${beige};
  border-bottom: 1px solid ${beige};
  margin: 8px 0 12px 0;
  padding: 8px 0 12px 0;

  & > p {
    font-size: 14px;
    color: ${darkBlue};
    padding-bottom: 8px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: .75rem;

    p {
      margin-left: -.3rem;
      font-size: 14px;
      color: ${darkBlue};
    }
  }
`

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: .5rem;
    p {
      color: ${darkBlue};
      font-weight: bold;

      span {
        padding-right: .4rem;
      }
    }
  }
`