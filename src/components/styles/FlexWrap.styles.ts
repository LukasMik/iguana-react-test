import styled from "styled-components";
import {FlexJustify, FlexItems, FlexWrap} from "../../types";

interface IProps {
    gap?: number
    justify?: FlexJustify
    items?: FlexItems
    wrap?: FlexWrap
}

export const Flex = styled.div`
  display: flex;
  align-items: ${({items}: IProps) => items ?? FlexItems.FLEX_START};
  justify-content: ${({justify}: IProps) => justify ?? FlexJustify.FLEX_START};
  flex-wrap: ${({wrap}: IProps) => wrap};
  gap: ${({gap}: IProps) => `${gap}rem` ?? 0};
`