import {StyledInstantBookableContainer} from "./InstantBookableContainer.styles";
import {Selector} from "./Selector";

export const InstantBookableContainer = () => {
    return (
        <StyledInstantBookableContainer>
            <p>Okamžitá rezervace</p>
            <Selector />
        </StyledInstantBookableContainer>
    )
}