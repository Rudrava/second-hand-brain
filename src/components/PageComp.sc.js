import styled from "styled-components";

export const PageGrid = styled.div`
    width: 100%;
    min-height: 85vh;
    display: grid;
    ${({ center }) => center === "true" && `place-items:center;`};
`;

export const Form = styled.div`
    width: 40%;
    min-height: 80vh;
    height: fit-content;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    padding: 1.5rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    h1 {
        font-family: Pacifico;
        font-size: 2.5rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    form {
        width: 100%;

        display: flex;
        flex-direction: column;
    }
    .disclaimer {
        margin-top: 10px;
        a {
            text-decoration: none;
        }
    }
`;

export const Divider = styled.h3`
    font-family: Pacifico;
    margin: 0.5rem 0;
`;

export const PageFlex = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 85vh;
`;
