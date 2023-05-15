import {
    SliderRange,
    SliderRoot,
    SliderThumb,
    SliderTrack, StyledInputsContainer,
    StyledPriceSliderContainer
} from "./PriceSlider.styles";
import React from "react";
import {MIN_MAX_PRICE_RANGE} from "../../../constants";
import {useAtom} from "jotai/index";
import {activePriceRangeFilterAtom} from "../../../atoms";

export const PriceSlider = () => {
    const [activePriceRange, setActivePriceRange] = useAtom<number[]>(activePriceRangeFilterAtom)

    // TODO: fix TS error

    const handleSliderChange = (values: number[]) => {
        // @ts-ignore
        setActivePriceRange(values);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
        let activeValue = parseInt(e.target.value)
        !activeValue || activeValue < 0 ? activeValue = 0 : null
        activeValue > MIN_MAX_PRICE_RANGE[0] ? activeValue = MIN_MAX_PRICE_RANGE[1] : null
        if (type === 'min') {
            // @ts-ignore
            setActivePriceRange([activeValue, activePriceRange[1]])
        } else if (type === 'max') {
            // @ts-ignore
            setActivePriceRange([activePriceRange[0], activeValue])
        }
    }


    return (
        <StyledPriceSliderContainer>
            <p>Cena za den</p>
            <form>
                <SliderRoot value={activePriceRange}
                            max={MIN_MAX_PRICE_RANGE[1]}
                            min={MIN_MAX_PRICE_RANGE[0]}
                            step={10}
                            minStepsBetweenThumbs={100}
                            onValueChange={handleSliderChange}
                >
                    <SliderTrack>
                        <SliderRange/>
                    </SliderTrack>
                    <SliderThumb/>
                    <SliderThumb/>
                </SliderRoot>
                <StyledInputsContainer>
                    <div>
                        <label>Kč</label>
                        <input type="number" value={activePriceRange[0]} onChange={(e) => handleInputChange(e, 'min')}/>
                    </div>
                    <div>
                        <label>Kč</label>
                        <input type="number" value={activePriceRange[1]} onChange={(e) => handleInputChange(e, 'max')}/>
                    </div>
                </StyledInputsContainer>
            </form>
        </StyledPriceSliderContainer>
    )
}