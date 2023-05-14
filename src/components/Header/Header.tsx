import {HeaderContainer, StyledHeader} from "./Header.styles";
import {PriceSlider} from "./PriceSlider/PriceSlider";
import {CaravanType} from "./CaravanType/CaravanType";
import {InstantBookable} from "./InstantBookable/InstantBookable";

export const Header = () => {
    return (
        <StyledHeader>
            <HeaderContainer>
                <PriceSlider/>
                <CaravanType/>
                <InstantBookable/>
            </HeaderContainer>
        </StyledHeader>
    )
}