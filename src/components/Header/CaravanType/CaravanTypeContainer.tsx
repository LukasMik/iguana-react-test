import {StyledCaravanTypesContainer} from "./CaravanTypeContainer.styles";
import {CaravanTypeItem} from "./CaravanTypeItem";
import {FlexWrap} from "../../styles/FlexWrap.styles";
import {FlexItems} from "../../../types";

export const CaravanTypeContainer = () => {
    return (
        <StyledCaravanTypesContainer>
            <p>Typ karavanu</p>
            <FlexWrap gap={1} items={FlexItems.CENTER}>
                <CaravanTypeItem/>
                <CaravanTypeItem/>
                <CaravanTypeItem/>
                <CaravanTypeItem/>
            </FlexWrap>
        </StyledCaravanTypesContainer>
    )
}