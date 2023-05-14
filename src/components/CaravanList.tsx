import {CaravanItem} from "./CaravanItem/CaravanItem";
import {FlexWrap} from "./styles/FlexWrap.styles";
import {SectionContainer} from "./styles/SectionContainer.styles";
import {FlexItems, FlexJustify} from "../types";

export const CaravanList = () => {
    return (
        <SectionContainer>
            <FlexWrap gap={2} justify={FlexJustify.SPACE_BETWEEN} items={FlexItems.CENTER}>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
                <CaravanItem/>
            </FlexWrap>
        </SectionContainer>
    )
}