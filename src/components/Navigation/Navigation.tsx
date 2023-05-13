import {NavContainer, StyledNavigation} from "./Navigation.styles";
import StaticImage from "next/image";
import logo from "../../assets/images/logo.png";

export const Navigation = () => {
    return (
        <StyledNavigation>
            <NavContainer>
                <a href="#">
                    <StaticImage src={logo} height={35} width={200} alt="logo"/>
                </a>
            </NavContainer>
        </StyledNavigation>
    )
}