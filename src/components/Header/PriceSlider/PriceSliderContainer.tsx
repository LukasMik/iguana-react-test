import {StyledPriceSliderContainer} from "./PriceSliderContainer.styles";
import SliderDemo from "./PriceSlider";
import React from "react";

export const PriceSliderContainer = () => {
    return (
        <StyledPriceSliderContainer>
            <p>Cena za den</p>
            <SliderDemo/>
        </StyledPriceSliderContainer>
    )
}