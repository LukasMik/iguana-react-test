import {CaravanItem} from "./CaravanItem/CaravanItem";
import {Flex} from "./styles/FlexWrap.styles";
import {SectionContainer} from "./styles/SectionContainer.styles";
import {FlexItems, FlexJustify, FlexWrap} from "../types";

export const CaravanList = () => {
    return (
        <SectionContainer>
            <Flex gap={2} justify={FlexJustify.SPACE_BETWEEN} items={FlexItems.CENTER} wrap={FlexWrap.FLEX_WRAP}>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
            </Flex>
        </SectionContainer>
    )
}