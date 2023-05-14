import {CaravanItem} from "./CaravanItem/CaravanItem";
import {FlexWrap} from "./styles/FlexWrap.styles";
import {SectionContainer} from "./styles/SectionContainer.styles";

export const CaravanList = () => {
    return (
        <SectionContainer>
            <FlexWrap>
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