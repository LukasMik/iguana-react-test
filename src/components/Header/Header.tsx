import {HeaderContainer, StyledHeader} from "./Header.styles";
import {PriceSlider} from "./PriceSlider/PriceSlider";
import {CaravanTypeContainer} from "./CaravanType/CaravanTypeContainer";
import {InstantBookableContainer} from "./InstantBookable/InstantBookableContainer";

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <PriceSlider/>
                <CaravanTypeContainer/>
                {/*<InstantBookableContainer/>*/}
            </HeaderContainer>
        </StyledHeader>
    )
}