import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavButtons = ({
    type = "button",
    label,
    onClick,
    primary = true,
    path,
}) => {
    return type === "link" ? (
        <StyledLinkButton
            to={path}
            activeStyle={{
                backgroundColor: "black",
                color: "white",
                boxShadow: `0 8px 30px rgba(237, 0, 0, 0.12)`,
                transform: `translateY(0)`,
            }}
        >
            {label}
        </StyledLinkButton>
    ) : (
        <StyledButton
            onClick={onClick}
            type={type}
            primary={primary.toString()}
        >
            {label}
        </StyledButton>
    );
};
export const Button = ({
    type = "button",
    label,
    onClick,
    primary = true,
    icon,
    ...rest
}) => {
    return (
        <StyledButton
            onClick={onClick}
            type={type}
            primary={primary.toString()}
            {...rest}
        >
            {icon && <img src={icon} alt={`${label} icon`} />}
            <span>{label}</span>
        </StyledButton>
    );
};

const StyledLinkButton = styled(NavLink)`
    padding: 0.2rem 0.5rem;
    display: block;
    text-decoration: none;
    color: inherit;
    outline: none;
    border: none;
    text-align: center;
    border: 3px solid #1d1d1d;
    background-color: white;
    border-radius: 15px;
    font-weight: lighter;
    font-family: Pacifico;
    font-size: 1.5rem;
    min-width: 10rem;
    max-width: fit-content;
    height: fit-content;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover,
    &:focus {
        background-color: black;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(237, 0, 0, 0.12);
    }
`;

const StyledButton = styled.button`
    padding: 0.2rem 0.5rem;
    display: block;
    outline: none;
    border: none;
    border: 3px solid #1d1d1d;
    background-color: white;
    border-radius: 15px;
    font-weight: lighter;
    font-family: Nunito;
    font-size: 2rem;
    min-width: 10rem;
    height: fit-content;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    margin-top: 0.5rem;

    img {
        position: absolute;
        left: 10%;
        top: 25%;
        transition: all 0.3s ease-in-out;
    }

    &:hover,
    &:focus {
        background-color: black;
        color: white;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.33);
        img {
            filter: invert(100%);
        }
    }
`;

export default NavButtons;
