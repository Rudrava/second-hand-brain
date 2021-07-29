import { memo } from "react";
import styled from "styled-components";

export const createName = (name) =>
    `${name}-${Math.round(Math.random() * 999999999)}`;

export const Email = memo(
    ({ label, name, handleChange, handleBlur, value }) => (
        <Field>
            <label htmlFor={name}>{label}</label>
            <input
                type="email"
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            />
        </Field>
    )
);
export const Passwd = memo(
    ({ label, name, handleChange, handleBlur, value }) => (
        <Field>
            <label htmlFor={name}>{label}</label>
            <input
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
                name={name}
            />
        </Field>
    )
);
export const Text = memo(({ label, name, handleChange, handleBlur, value }) => (
    <Field>
        <label htmlFor={name}>{label}</label>
        <input
            type="text"
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
        />
    </Field>
));

const Field = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    label {
        font-family: "Nunito";
        font-size: 1.5rem;
    }
    input {
        padding: 0.7rem;
        font-size: 2rem;
        font-family: "Nunito";
        border: 3px solid black;
        border-radius: 15px;
        margin: 0.5rem 0;
        outline: none;
    }
`;
