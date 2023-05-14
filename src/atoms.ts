import {atom} from "jotai";
import {
    CARAVAN_TYPES,
    DEFAULT_TYPES_FILTER,
    DEFAULT_PRICE_RANGE,
    INSTANT_BOOKABLE_VALUES
} from "./constants";
import {ICaravanType} from "./types";

export const activeTypesFilterAtom = atom<ICaravanType[]>(CARAVAN_TYPES.filter(type => DEFAULT_TYPES_FILTER.includes(type.translation)));
export const activePriceRangeFilterAtom = atom<number[]>(DEFAULT_PRICE_RANGE)
export const activeInstantBookableFilterAtom = atom<boolean>(true)