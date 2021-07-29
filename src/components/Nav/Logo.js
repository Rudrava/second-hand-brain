import Brain from "images/brain.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Logo() {
    return (
        <StyledLogo to="/">
            <img src={Brain} alt="brain" width="100" />
            <h1>Second Hand Brain</h1>
        </StyledLogo>
    );
}

const StyledLogo = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-family: Pacifico;
    font-weight: lighter;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    width: 30%;
    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    @media (max-width: 1000px) {
        font-size: 0.8rem;
    }
    @media (max-width: 900px) {
        font-size: 0.6rem;
    }
    @media (max-width: 786px) {
        h1 {
            display: none;
        }
    }
`;

export default Logo;
