import {CaravanItem} from "./CaravanItem/CaravanItem";
import {Flex} from "./styles/Flex.styles";
import {SectionContainer} from "./styles/SectionContainer.styles";
import {FlexItems, FlexJustify, FlexWrap, ICaravanType} from "../types";
import {useAtom} from "jotai/index";
import {activeInstantBookableFilterAtom, activePriceRangeFilterAtom, activeTypesFilterAtom} from "../atoms";
import {useGetAllCaravansAPI} from "../hooks/useGetAllCaravansAPI";
import {TextCenter} from "./styles/TextCenter.styles";

export const CaravanList = () => {
    const [activeTypesFilter] = useAtom<ICaravanType[]>(activeTypesFilterAtom)
    const [activePriceFilter] = useAtom<number[]>(activePriceRangeFilterAtom)
    const [activeInstantBookableFilter] = useAtom(activeInstantBookableFilterAtom)

    const {isLoading, isError, error, data: allCaravans} = useGetAllCaravansAPI()

    const filteredCaravans = allCaravans

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
            <Flex gap={2} justify={FlexJustify.SPACE_BETWEEN} items={FlexItems.CENTER} wrap={FlexWrap.FLEX_WRAP}>
                {filteredCaravans && filteredCaravans.map(caravan => <CaravanItem
                    key={filteredCaravans.indexOf(caravan)} caravan={caravan}/>)}
            </Flex>
        </SectionContainer>
    )
}