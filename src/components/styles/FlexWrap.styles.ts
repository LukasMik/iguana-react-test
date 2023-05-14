import styled from "styled-components";
import {FlexJustify, FlexItems} from "../../types";

interface IProps {
    gap?: number
    justify?: FlexJustify
    items?: FlexItems
}

export const FlexWrap = styled.div`
  display: flex;
  align-items: ${({items}: IProps) => items ?? FlexItems.FLEX_START};
  justify-content: ${({justify}: IProps) => justify ?? FlexJustify.FLEX_START};
  flex-wrap: wrap;
  gap: ${({gap}: IProps) => `${gap}rem` ?? 0};
`