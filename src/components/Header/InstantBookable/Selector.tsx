import React, {Ref, useState} from 'react';
import * as Select from '@radix-ui/react-select';
import {SelectItemProps, SelectScrollDownButton} from '@radix-ui/react-select';
import {CheckIcon, ChevronDownIcon} from '@radix-ui/react-icons';
import {darkGrey} from "../../styles/GlobalStyle";
import {
    SelectContent,
    SelectIcon,
    SelectTrigger,
    SelectViewport,
    StyledItem,
    StyledItemIndicator
} from "./InstantBookableContainer.styles";
import {useAtom} from "jotai";
import {activeInstantBookableFilterAtom} from "../../../atoms";
import {INSTANT_BOOKABLE_VALUES} from "../../../constants";
import {InstantBookableValues} from "../../../types";

export const Selector = () => {
    const [activeValue, setActiveValue] = useState<InstantBookableValues>(InstantBookableValues.FALSE)
    const [isInstantBookable, setIsInstantBookable] = useAtom<boolean>(activeInstantBookableFilterAtom)

    // TODO: fix TS error
    const handleValueChange = (value: InstantBookableValues) => {
        // @ts-ignore
        value === InstantBookableValues.TRUE && setIsInstantBookable(true)
        // @ts-ignore
        value === InstantBookableValues.FALSE && setIsInstantBookable(false)
        setActiveValue(value)
    }
    return (
        <Select.Root value={activeValue} onValueChange={handleValueChange}>
            <SelectTrigger aria-label="Food">
                <Select.Value/>
                <SelectIcon>
                    <ChevronDownIcon color={darkGrey}/>
                </SelectIcon>
            </SelectTrigger>
            <Select.Portal>
                <SelectContent>
                    <SelectViewport>
                        <SelectItem value={INSTANT_BOOKABLE_VALUES[0]}>{InstantBookableValues.TRUE}</SelectItem>
                        <SelectItem value={INSTANT_BOOKABLE_VALUES[1]}>{InstantBookableValues.FALSE}</SelectItem>
                    </SelectViewport>
                    <SelectScrollDownButton>
                        <ChevronDownIcon/>
                    </SelectScrollDownButton>
                </SelectContent>
            </Select.Portal>
        </Select.Root>
    )
};

const SelectItem = React.forwardRef(function SelectItem(
    { children, ...props }: SelectItemProps,
    forwardedRef: Ref<HTMLDivElement>
) {
    return (
        <StyledItem {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <StyledItemIndicator>
                <CheckIcon />
            </StyledItemIndicator>
        </StyledItem>
    );
});

SelectItem.displayName = 'SelectItem';