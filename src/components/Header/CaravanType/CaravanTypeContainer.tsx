import {StyledCaravanTypesContainer} from "./CaravanTypeContainer.styles";
import {CaravanTypeItem} from "./CaravanTypeItem";
import {Flex} from "../../styles/Flex.styles";
import {FlexItems, FlexJustify, FlexWrap} from "../../../types";

export const CaravanTypeContainer = () => {
    return (
        <StyledCaravanTypesContainer>
            <p>Typ karavanu</p>
            <Flex gap={1} items={FlexItems.CENTER} justify={FlexJustify.SPACE_BETWEEN} wrap={FlexWrap.FLEX_WRAP}>
                <CaravanTypeItem/>
                <CaravanTypeItem/>
                <CaravanTypeItem/>
                <CaravanTypeItem/>
            </Flex>
        </StyledCaravanTypesContainer>
    )
}