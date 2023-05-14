import styled from "styled-components";
import * as Select from '@radix-ui/react-select';
import {SCREEN_SIZE_MOBILE} from "../../../constants";
import {beige, darkBlue, darkGrey, green} from "../../styles/GlobalStyle";

export const StyledInstantBookableContainer = styled.div`
  @media screen and (min-width: ${SCREEN_SIZE_MOBILE}px) {
    padding: 1.5rem 0 1rem 1rem;
  }
  padding: 0 0 1rem 0;
`
export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  width: 93%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: .2rem .5rem;
  font-size: 16px;
  line-height: 1px;
  height: 35px;
  gap: 5px;
  color: ${darkBlue};
  border: 1px solid ${beige};
  transition: all 0.3s ease-in-out;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: ${beige + '66'};
  }
`

export const SelectIcon = styled(Select.SelectIcon)`
  color: ${darkGrey},
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
  border: 1px solid ${beige};
`

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`

export const StyledItem = styled(Select.Item)`
  font-size: 16px;
  line-height: 1px;
  color: ${darkBlue};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  padding: .2rem .5rem .2rem 1.5rem;
  position: relative;
  user-select: none;

  &:hover {
    cursor: pointer;
    outline: none;
    border: 2px solid ${green}
  }
`

export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`