import {HeaderContainer, StyledHeader} from "./Header.styles";
import {PriceSliderContainer} from "./PriceSlider/PriceSliderContainer";
import {CaravanTypeContainer} from "./CaravanType/CaravanTypeContainer";
import {InstantBookableContainer} from "./InstantBookable/InstantBookableContainer";

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <PriceSliderContainer/>
                <CaravanTypeContainer/>
                <InstantBookableContainer/>
            </HeaderContainer>
        </StyledHeader>
    )
}