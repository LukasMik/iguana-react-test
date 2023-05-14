import React from 'react';

import {SliderRange, SliderRoot, SliderThumb, SliderTrack} from "./PriceSliderContainer.styles";

const SliderDemo = () => (
    <form>
        <SliderRoot defaultValue={[100, 6000]} max={10000} min={100} step={10} minStepsBetweenThumbs={100}>
            <SliderTrack>
                <SliderRange/>
            </SliderTrack>
            <SliderThumb/>
            <SliderThumb/>
        </SliderRoot>
    </form>
);

export default SliderDemo;