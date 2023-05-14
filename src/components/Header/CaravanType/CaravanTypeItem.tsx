import {StyledCaravanTypeItem} from "./CaravanTypeContainer.styles";
import {useState} from "react";
import {ICaravanType} from "../../../types";
import {DEFAULT_TYPES_FILTER} from "../../../constants";

interface IProps {
    type: ICaravanType
    pushToActiveFilters: (type: ICaravanType) => void
    removeFromActiveFilters: (type: ICaravanType) => void
}

export const CaravanTypeItem = ({type, pushToActiveFilters, removeFromActiveFilters}: IProps) => {
    const [isActive, setIsActive] = useState<boolean>(DEFAULT_TYPES_FILTER.includes(type.translation))

    const handleClick = () => {
        setIsActive(!isActive)
        isActive ? removeFromActiveFilters(type) : pushToActiveFilters(type)
    }

    return (
        <StyledCaravanTypeItem isActive={isActive} onClick={handleClick}>
            <h3>{type.translation}</h3>
            <small>{type.description}</small>
        </StyledCaravanTypeItem>
    )
}