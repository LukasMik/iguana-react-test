import {CaravanTypeTrans, ICaravanType} from "./types";

export const SCREEN_SIZE_MOBILE: number = 400

export const MAX_VIEWPORT_SIZE: number = 1400

export const CARAVAN_TYPES: ICaravanType[] = [
    {
        id: 1,
        name: 'Campervan',
        translation: CaravanTypeTrans.Campervan,
        description: 'Obytka s rozměry osobáku, se kterou dojedete všude.'
    },
    {
        id: 2,
        name: 'Intergrated',
        translation: CaravanTypeTrans.Intergrated,
        description: 'Král mezi karavany. Luxus na kolech.'
    },
    {
        id: 3,
        name: 'BuiltIn',
        translation: CaravanTypeTrans.BuiltIn,
        description: 'Celý byt geniálně poskládaný do dodávky.'
    },
    {
        id: 4,
        name: 'Alcove',
        translation: CaravanTypeTrans.Alcove,
        description: 'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.',
    },
]

export const MIN_MAX_PRICE_RANGE: number[] = [100, 10000]
export const DEFAULT_PRICE_RANGE: number[] = [1000, 6000]

export const DEFAULT_TYPES_FILTER: CaravanTypeTrans[] = [CaravanTypeTrans.BuiltIn, CaravanTypeTrans.Campervan]