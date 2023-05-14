import {StyledNavigation} from "./Navigation.styles";
import StaticImage from "next/image";
import logo from "../../assets/images/logo.png";
import {SectionContainer} from "../styles/SectionContainer.styles";

export const Navigation = () => {
    return (
        <StyledNavigation>
            <SectionContainer>
                <a href="#">
                    <StaticImage src={logo} height={35} width={200} alt="logo"/>
                </a>
            </SectionContainer>
        </StyledNavigation>
    )
}