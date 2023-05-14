import {StyledInstantBookableContainer} from "./InstantBookableContainer.styles";
import {Selector} from "./Selector";
import {Flex} from "../../styles/Flex.styles";
import {FlexItems} from "../../../types";
import StaticImage from "next/image";
import instantBookableIcon from "../../../assets/icons/instantBookable.svg";

export const InstantBookableContainer = () => {
    return (
        <StyledInstantBookableContainer>
            <Flex items={FlexItems.CENTER} gap={1}>
                <p>Okamžitá rezervace</p>
                <StaticImage src={instantBookableIcon} width={16} height={16}/>
            </Flex>
            <Selector/>
        </StyledInstantBookableContainer>
    )
}