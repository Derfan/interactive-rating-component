import styled, { css } from 'styled-components';

const sizes = {
    md: '768px',
};

const devices = {
    tablet: `(min-width: ${sizes.md})`,
};

const flexCenterAll = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Layout = styled.div`
    position: relative;
    margin: 154px 24px 24px;

    @media ${devices.tablet} {
        margin-top: 195px;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    width: 100%;
    height: 45px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 25px;
    border: none;
    margin: 23px 0 0;

    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeight.bold};
    letter-spacing: 2px;
    color: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transition};

    &:hover {
        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.white};
    }

    @media ${devices.tablet} {
        margin: 33px 0 0;
    }
`;

export const FlipCard = styled.div`
    position: absolute;
    top: 0;
    width: 100%;

    transform-style: preserve-3d;
    transform: ${props => props.showBack ? 'rotateY(180deg)' : ''};
    transition: transform 1s;

    @media ${devices.tablet} {
        max-width: 410px;
        left: 50%;
        transform: translateX(-50%) ${props => props.showBack ? 'rotateY(180deg)' : ''};
    }
`;

export const Card = styled.div`
    position: absolute;
    top: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignment};

    padding: 24px 24px 32px;
    border-radius: 15px;
    background: radial-gradient(ellipse at top, ${props => props.theme.colors.darkBlue}, transparent);

    backface-visibility: hidden;
    transform: rotateY(${props => props.location === 'back' ? '180deg' : 0});

    @media ${devices.tablet} {
        border-radius: 28px;
        padding: 32px 30px;
    }
`;

export const Round = styled.div`
    ${flexCenterAll}

    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.colors.darkBlue};

    @media ${devices.tablet} {
        width: 48px;
        height: 48px;
    }
`;

export const Title = styled.h1`
    margin: 20px 0 0;
    font-size: 24px;
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.theme.fontWeight.bold};

    @media ${devices.tablet} {
        margin: 32px 0 0;
        font-size: 28px;
    }
`;

export const Text = styled.p`
    margin: 10px 0 0;

    text-align: ${props => props.alignment};
    font-size: 14px;
    line-height: 1.6;

    @media ${devices.tablet} {
        font-size: 16px;
        line-height: 1.5;
    }
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

        @media ${devices.tablet} {
            width: 50px;
            height: 50px;
        }
    }
`;

export const Badge = styled.div`
    font-size: 14px;
    color: ${props => props.theme.colors.primary};

    margin: 18px 0 7px;
    padding: 7px 12px;
    background-color: ${props => props.theme.colors.darkBlue};
    border-radius: 15px;

    @media ${devices.tablet} {
        font-size: 15px;

        margin: 27px 0 4px;
        padding: 7px 18px;
    }
`;

export const ImageWrapper = styled.div`
    margin-top: 10px;
    max-width: 145px;

    @media ${devices.tablet} {
        max-width: 165px;
    }
`;
