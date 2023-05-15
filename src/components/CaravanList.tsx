import {CaravanItem} from "./CaravanItem/CaravanItem";
import {Flex} from "./styles/Flex.styles";
import {SectionContainer} from "./styles/SectionContainer.styles";
import {FlexItems, FlexJustify, FlexWrap, ICaravan, ICaravanType} from "../types";
import {useAtom} from "jotai";
import {activeInstantBookableFilterAtom, activePriceRangeFilterAtom, activeTypesFilterAtom} from "../atoms";
import {useGetAllCaravansAPI} from "../hooks/useGetAllCaravansAPI";
import {TextCenter} from "./styles/TextCenter.styles";
import {useEffect, useState} from "react";
import {StyledButton} from "./styles/Button.styles";

export const CaravanList = () => {
    const [activeTypesFilter] = useAtom<ICaravanType[]>(activeTypesFilterAtom)
    const [activePriceFilter] = useAtom<number[]>(activePriceRangeFilterAtom)
    const [activeInstantBookableFilter] = useAtom(activeInstantBookableFilterAtom)
    const [filteredCaravans, setFilteredCaravans] = useState<ICaravan[] | undefined>(undefined)
    const [groupLength, setGroupLength] = useState(6)

    const {isLoading, isError, error, data: allCaravans} = useGetAllCaravansAPI()

    useEffect(() => {
        const filteredCaravans = allCaravans?.filter(car =>
            activeTypesFilter.find(type => type.name === car.vehicleType)
        )?.filter(car =>
            car.price > activePriceFilter[0] && car.price < activePriceFilter[1]
        )?.filter(car =>
            car.instantBookable === activeInstantBookableFilter
        )
        setGroupLength(6)
        setFilteredCaravans(filteredCaravans);
    }, [activeTypesFilter, activePriceFilter, activeInstantBookableFilter, allCaravans]);

    if (isLoading) {
        return (
            <TextCenter>
                <h1>Loading...</h1>
            </TextCenter>
        )
    }

    if (isError) {
        return (
            <TextCenter>
                <h1>{(error as Error).message}</h1>
            </TextCenter>
        )
    }
    const groupItems = filteredCaravans ? filteredCaravans.slice(0, groupLength) : []

    const handleNext = () => {
        setGroupLength(groupLength + groupLength);
    }

    const renderFilteredCaravans = () => {
        if (filteredCaravans && filteredCaravans.length > 0) {
            return (
                <>
                    <Flex gap={2} justify={FlexJustify.CENTER} items={FlexItems.CENTER} wrap={FlexWrap.FLEX_WRAP}>
                        {groupItems.map((caravan, index) => {
                            return <CaravanItem key={index} caravan={caravan}/>
                        })}
                    </Flex>
                    <StyledButton onClick={handleNext} disabled={groupLength >= filteredCaravans.length}>
                        Načíst další
                    </StyledButton>
                </>
            )
        }
    }

    return (
        <SectionContainer>
            {renderFilteredCaravans()}
            {!filteredCaravans || filteredCaravans && filteredCaravans.length === 0 &&
                <TextCenter><h1>Nebyly nalezeny žádné karavany.</h1></TextCenter>}
        </SectionContainer>
    )
}