import React from 'react';

import {SliderRange, SliderRoot, SliderThumb, SliderTrack, StyledInputsContainer} from "./PriceSliderContainer.styles";

export const PriceSlider = () => (
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
);