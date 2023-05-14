import {Descriptor, FeaturesSection, PriceSection, StyledCaravanItem} from "./CaravanItem.styles";
import seats from "../../assets/icons/seats.svg"
import beds from "../../assets/icons/beds.svg"
import toilette from "../../assets/icons/toilette.svg"
import shower from "../../assets/icons/shower.svg"
import instantBookableIcon from "../../assets/icons/instantBookable.svg"
import StaticImage from "next/image";

export const CaravanItem = () => {
    return (
        <StyledCaravanItem>
            <img src="https://source.unsplash.com/400x400?fox" alt="caravan img"/>
            <div>
                <Descriptor>Caravan Type</Descriptor>
                <h2>Caravan Name</h2>
                <FeaturesSection>
                    <p>Place of Caravan</p>
                    <div>
                        <StaticImage src={seats} width={20} height={20} alt="seats"/><p>6</p>
                        <StaticImage src={beds} width={20} height={20} alt="beds"/><p>4</p>
                        <StaticImage src={toilette} width={20} height={20} alt="toilette"/>
                        <StaticImage src={shower} width={20} height={20} alt=""/>
                    </div>
                </FeaturesSection>
                <PriceSection>
                    <p>Cena od</p>
                    <div>
                        <p><span>Cena</span>Kč/den</p>
                        <StaticImage src={instantBookableIcon} width={16} height={16}/>
                    </div>
                </PriceSection>
            </div>
        </StyledCaravanItem>
    )
}