import {StyledInputsContainer, StyledPriceSliderContainer} from "./PriceSliderContainer.styles";
import SliderDemo from "./PriceSlider";
import React from "react";

export const PriceSliderContainer = () => {
    return (
        <StyledPriceSliderContainer>
            <p>Cena za den</p>
            <SliderDemo/>
            <StyledInputsContainer>
                <div>
                    <label>Kč</label>
                    <input type="number" value={1234}/>
                </div>
                <div>
                    <label>Kč</label>
                    <input type="number" value={1234}/>
                </div>
            </StyledInputsContainer>
        </StyledPriceSliderContainer>
    )
}