import React, {Ref} from 'react';
import * as Select from '@radix-ui/react-select';
import {CheckIcon, ChevronDownIcon} from '@radix-ui/react-icons';
import {darkGrey} from "../../styles/GlobalStyle";
import {SelectItemProps, SelectScrollDownButton} from "@radix-ui/react-select";
import {
    SelectContent,
    SelectIcon,
    SelectTrigger,
    SelectViewport,
    StyledItem,
    StyledItemIndicator
} from "./InstantBookableContainer.styles";


const values = ['ANO', 'NE']
const defaultValue = values[0];
export const Selector = () => {
    return (<Select.Root defaultValue={defaultValue} value={defaultValue}>
            <SelectTrigger aria-label="Food">
                <Select.Value/>
                <SelectIcon>
                    <ChevronDownIcon color={darkGrey}/>
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
};

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