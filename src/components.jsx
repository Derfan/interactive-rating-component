import styled, { css } from 'styled-components';

const flexCenterAll = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Layout = styled.div`
    ${flexCenterAll}
    padding: 24px;
    height: 100vh;
`;

export const Button = styled.button`
    cursor: pointer;
    width: 100%;
    height: 45px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 25px;
    border: none;
    margin: 24px 0 0;

    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeight.bold};
    letter-spacing: 2px;
    color: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transition};

    &:hover {
        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.white};
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignment};

    padding: 24px 24px 32px;
    border-radius: 15px;
    background: radial-gradient(ellipse at top, ${props => props.theme.colors.darkBlue}, transparent);
`;

export const Round = styled.div`
    ${flexCenterAll}

    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.colors.darkBlue}
`;

export const Text = styled.p`
    margin: 10px 0 0;

    text-align: ${props => props.alignment};
    font-size: 14px;
    line-height: 1.6;
`;

export const Title = styled.h1`
    margin: 20px 0 0;
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.theme.fontWeight.bold};
`;

export const RadioList = styled.div`
    width: 100%;
    margin: 27px 0 0;
    display: flex;
    justify-content: space-between;
`;

export const RadioButton = styled.div`
    display: flex;
    font-weight: ${props => props.theme.fontWeight.bold};

    & > input {
        visibility: hidden;
        width: 0;
        height: 0;
        margin: 0;

        &:checked + label {
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.primary};
        }
    }

    & > label {
        ${flexCenterAll}

        cursor: pointer;
        border-radius: 50%;
        width: 42px;
        height: 42px;
        background-color: ${props => props.theme.colors.darkBlue};
        transition: ${props => props.theme.transition};

        &:hover {
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.lightGrey};
        }
    }
`;

export const Badge = styled.div`
    color: ${props => props.theme.colors.primary};

    padding: 5px 10px;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 15px;
`;
