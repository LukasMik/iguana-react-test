import React, {Ref} from 'react';
import * as Select from '@radix-ui/react-select';
import styled from "styled-components";
import {CheckIcon, ChevronDownIcon} from '@radix-ui/react-icons';
import {beige, darkBlue, darkGrey} from "../../styles/GlobalStyle";
import {SelectItemProps, SelectScrollDownButton} from "@radix-ui/react-select";


const values = ['ANO', 'NE']
export const Selector = () => {
        return (<Select.Root>
                <SelectTrigger aria-label="Food">
                    <Select.Value defaultValue={values[0]}/>
                    <SelectIcon>
                        <ChevronDownIcon/>
                    </SelectIcon>
                </SelectTrigger>
                <Select.Portal>
                    <SelectContent>
                        <SelectViewport>
                            <SelectItem value={values[0]}>Ano</SelectItem>
                            <SelectItem value={values[1]}>Ne</SelectItem>
                        </SelectViewport>
                        <SelectScrollDownButton>
                            <ChevronDownIcon/>
                        </SelectScrollDownButton>
                    </SelectContent>
                </Select.Portal>
            </Select.Root>
        )
    }
;

const SelectTrigger = styled(Select.SelectTrigger)`
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

const SelectIcon = styled(Select.SelectIcon)`
  color: ${darkGrey},
`

const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
  border: 1px solid ${beige};
`

const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`

// eslint-disable-next-line react/display-name
const SelectItem = React.forwardRef((
    {children, ...props}: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement>
) => {
    return (
        <StyledItem {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <StyledItemIndicator>
                <CheckIcon/>
            </StyledItemIndicator>
        </StyledItem>
    );
});

const StyledItem = styled(Select.Item)`
  font-size: 16px;
  line-height: 1px;
  color: ${darkBlue};
  border-radius: 8px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`