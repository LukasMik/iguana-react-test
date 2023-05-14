import {StyledPriceSliderContainer} from "./PriceSliderContainer.styles";
import SliderDemo from "./PriceSlider";

export const PriceSliderContainer = () => {
    return (
        <StyledPriceSliderContainer>
            <p>Cena za den</p>
            <SliderDemo/>
        </StyledPriceSliderContainer>
    )
}