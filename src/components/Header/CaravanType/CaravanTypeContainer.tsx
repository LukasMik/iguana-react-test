import {StyledCaravanTypesContainer} from "./CaravanTypeContainer.styles";
import {CaravanTypeItem} from "./CaravanTypeItem";
import {Flex} from "../../styles/Flex.styles";
import {FlexItems, FlexJustify, FlexWrap, ICaravanType} from "../../../types";
import {CARAVAN_TYPES} from "../../../constants";
import {useAtom} from "jotai";
import {activeTypesFilterAtom} from "../../../atoms";


export const CaravanTypeContainer = () => {
    const [activeTypesFilter, setActiveTypesFilter] = useAtom<ICaravanType[]>(activeTypesFilterAtom)

    // TODO: fix TS error :(
    const handlePush = (type: ICaravanType) => {
        // @ts-ignore
        !activeTypesFilter.includes(type) && setActiveTypesFilter([...activeTypesFilter, type])
    }
    const handleRemove = (typeToRemove: ICaravanType) => {
        // @ts-ignore
        activeTypesFilter.includes(typeToRemove) && setActiveTypesFilter(activeTypesFilter.filter(type => type !== typeToRemove))
    }

    return (
        <StyledCaravanTypesContainer>
            <p>Typ karavanu</p>
            <Flex gap={1} items={FlexItems.CENTER} justify={FlexJustify.SPACE_BETWEEN} wrap={FlexWrap.FLEX_WRAP}>
                {CARAVAN_TYPES.map(type => (
                    <CaravanTypeItem key={type.id}
                                     type={type}
                                     pushToActiveFilters={handlePush}
                                     removeFromActiveFilters={handleRemove}
                    />)
                )}
            </Flex>
        </StyledCaravanTypesContainer>
    )
}