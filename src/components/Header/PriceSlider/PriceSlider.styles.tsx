import styled from "styled-components";
import {beige, darkGrey, green} from "../../styles/GlobalStyle"
import * as Slider from '@radix-ui/react-slider';
import {SCREEN_SIZE_MOBILE} from "../../../constants";

export const StyledPriceSliderContainer = styled.div`
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
  padding: 1.5rem 1rem 1rem 0;
  width: 27%;
  }
  overflow: hidden;
  padding: 1rem 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > p {
    padding-bottom: 1rem;
  }
`

export const SliderRoot = styled(Slider.Root)`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 100%;
    height: 20px;
`

export const SliderTrack = styled(Slider.Track)`
    background-color: ${beige};
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 3px;
`

export const SliderRange = styled(Slider.Range)`
    position: absolute;
    background-color: ${green};
    border-radius: 9999px;
    height: 100%;
`

export const SliderThumb = styled(Slider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${green};
  border-radius: 10px;
  outline: none;
  transition: all 0.07s ease-in-out;

   &:hover {
     cursor: pointer;
     transform: scale(1.1);
   };
`

export const StyledInputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  gap: 1rem;

  div {
    position: relative;
    width: 50%;

    input {
      width: 100%;
      height: 3rem;
      border: 1px solid ${beige};
      border-radius: 8px;
      padding: 1rem;

      &:focus-visible {
        border: 2px solid ${beige};
      }
    }

    label {
      position: absolute;
      top: .9rem;
      right: .6rem;
      color: ${darkGrey};
    }
  }
`