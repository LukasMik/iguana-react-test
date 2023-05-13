import {StyledCaravanItem} from "./CaravanItem.styles";

export const CaravanItem = () => {
    return (
        <StyledCaravanItem>
            <img src="https://source.unsplash.com/400x400?fox" alt="caravan img"/>
            <div>
                <h1>Caravan Name</h1>
                <p>price: <span>$999</span></p>
            </div>
        </StyledCaravanItem>
    )
}