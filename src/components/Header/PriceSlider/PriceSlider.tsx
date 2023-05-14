import {
    SliderRange,
    SliderRoot,
    SliderThumb,
    SliderTrack, StyledInputsContainer,
    StyledPriceSliderContainer
} from "./PriceSlider.styles";
import React from "react";

export const PriceSlider = () => {
    return (
        <StyledPriceSliderContainer>
            <p>Cena za den</p>
            <form>
                <SliderRoot defaultValue={[100, 6000]} max={10000} min={100} step={10} minStepsBetweenThumbs={100}>
                    <SliderTrack>
                        <SliderRange/>
                    </SliderTrack>
                    <SliderThumb/>
                    <SliderThumb/>
                </SliderRoot>
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
            </form>
        </StyledPriceSliderContainer>
    )
}