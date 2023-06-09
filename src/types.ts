export enum FlexJustify {
    FLEX_START  = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly',
    STRETCH = 'stretch',
}

export enum FlexItems {
    FLEX_START = 'flex-start',
    FLEX_END = 'flex-end',
    CENTER = 'center',
    BASELINE = 'baseline',
    STRETCH = 'stretch',
}

export enum FlexWrap {
    FLEX_WRAP = 'wrap',
    FLEX_NOWRAP = 'nowrap'
}
export enum CaravanTypeTrans {
    Campervan = 'Campervan',
    Intergrated = 'Integrál',
    BuiltIn = 'Vestavba',
    Alcove = 'Přívěs'
}

export interface ICaravanType {
    id: number,
    name: string,
    translation: CaravanTypeTrans,
    description: string,
}

export enum InstantBookableValues {
    TRUE = 'Ano',
    FALSE = 'Ne'
}

export interface ICaravan {
    location: string,
    instantBookable: boolean,
    name: string,
    passengersCapacity: number,
    sleepCapacity: number,
    price: number,
    vehicleType: string,
    toilet: boolean,
    shower: boolean,
    pictures: string[]
}

export interface IResponse {
    count: number,
    items: ICaravan[]
}