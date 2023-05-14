import {StyledPriceSliderContainer} from "./PriceSliderContainer.styles";
import {PriceSlider} from "./PriceSlider";
import React from "react";

export const PriceSliderContainer = () => {
    return (
        <StyledPriceSliderContainer>
            <p>Cena za den</p>
            <PriceSlider/>
        </StyledPriceSliderContainer>
    )
}