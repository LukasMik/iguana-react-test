import {CaravanItem} from "./CaravanItem/CaravanItem";
import {Flex} from "./styles/Flex.styles";
import {SectionContainer} from "./styles/SectionContainer.styles";
import {FlexItems, FlexJustify, FlexWrap, ICaravan, ICaravanType} from "../types";
import {useAtom} from "jotai";
import {activeInstantBookableFilterAtom, activePriceRangeFilterAtom, activeTypesFilterAtom} from "../atoms";
import {useGetAllCaravansAPI} from "../hooks/useGetAllCaravansAPI";
import {TextCenter} from "./styles/TextCenter.styles";
import {useEffect, useState} from "react";

export const CaravanList = () => {
    const [activeTypesFilter] = useAtom<ICaravanType[]>(activeTypesFilterAtom)
    const [activePriceFilter] = useAtom<number[]>(activePriceRangeFilterAtom)
    const [activeInstantBookableFilter] = useAtom(activeInstantBookableFilterAtom)
    const [filteredCaravans, setFilteredCaravans] = useState<ICaravan[]>()

    const {isLoading, isError, error, data: allCaravans} = useGetAllCaravansAPI()

    useEffect(() => {
        const filteredCaravans = allCaravans?.filter(car =>
            activeTypesFilter.find(type => type.name === car.vehicleType)
        )?.filter(car =>
            car.price > activePriceFilter[0] && car.price < activePriceFilter[1]
        )?.filter(car =>
            car.instantBookable === activeInstantBookableFilter
        );
        setFilteredCaravans(filteredCaravans);
    }, [activeTypesFilter, activePriceFilter, activeInstantBookableFilter, allCaravans]);

    if (isLoading) {
        return (
            <TextCenter>
                <h1>Loading...</h1>
            </TextCenter>
        )
    }

    if (isError)
        return (
            <TextCenter>
                <h1>{(error as Error).message}</h1>
            </TextCenter>
        )

    return (
        <SectionContainer>
            <Flex gap={2} justify={FlexJustify.CENTER} items={FlexItems.CENTER} wrap={FlexWrap.FLEX_WRAP}>
                {filteredCaravans && filteredCaravans.length > 0 && filteredCaravans.map(caravan => <CaravanItem
                    key={filteredCaravans.indexOf(caravan)} caravan={caravan}/>)}
                {!filteredCaravans || filteredCaravans && filteredCaravans.length === 0 &&
                    <TextCenter><h1>Nebyly nalezeny žádné karavany.</h1></TextCenter>}
            </Flex>
        </SectionContainer>
    )
}