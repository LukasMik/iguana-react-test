import {Descriptor, FeaturesSection, PriceSection, StyledCaravanItem} from "./CaravanItem.styles";
import seats from "../../assets/icons/seats.svg"
import beds from "../../assets/icons/beds.svg"
import toilette from "../../assets/icons/toilette.svg"
import shower from "../../assets/icons/shower.svg"
import instantBookableIcon from "../../assets/icons/instantBookable.svg"
import StaticImage from "next/image";
import {ICaravan} from "../../types";
import {CARAVAN_TYPES} from "../../constants";
import {CarouselModal} from "./CarouselModal";

interface IProps {
    caravan: ICaravan
}

export const CaravanItem = ({caravan}: IProps) => {

    const vehicleType = () => (
        CARAVAN_TYPES.find(type => type.name === caravan.vehicleType)?.translation || caravan.vehicleType
    )

    return (
        <StyledCaravanItem>
            <CarouselModal pictures={caravan.pictures}/>
            <div>
                <Descriptor>{vehicleType()}</Descriptor>
                <h2>{caravan.name}</h2>
                <FeaturesSection>
                    <p>{caravan.location}</p>
                    <div>
                        {caravan.passengersCapacity &&
                            <>
                                <StaticImage src={seats} width={20} height={20} alt="seats"/>
                                <p>{caravan.passengersCapacity}</p>
                            </>}
                        {caravan.sleepCapacity &&
                            <>
                                <StaticImage src={beds} width={20} height={20} alt="beds"/>
                                <p>{caravan.sleepCapacity}</p>
                            </>}
                        {caravan.toilet && <StaticImage src={toilette} width={20} height={20} alt="toilette"/>}
                        {caravan.shower && <StaticImage src={shower} width={20} height={20} alt=""/>}
                    </div>
                </FeaturesSection>
                <PriceSection>
                    <p>Cena od</p>
                    <div>
                        <p><span>{caravan.price}</span>Kč/den</p>
                        {caravan.instantBookable && <StaticImage src={instantBookableIcon} width={16} height={16}/>}
                    </div>
                </PriceSection>
            </div>
        </StyledCaravanItem>
    )
}