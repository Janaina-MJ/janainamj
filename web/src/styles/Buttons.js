import styled from "styled-components";

export const StyledKeyButton = styled.button`
    position: relative;
    height: 37px;
    width: 130px;
    border-style: none;
    border-radius: 20px;
    margin: 30px;
    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.secondaryLightNeon};
    color: ${({ theme }) => theme.colors.primaryLightShade};
    font-size: 16px;

    :hover{
        box-shadow: 0 0 25px ${({ theme }) => theme.colors.secondaryLightNeon};
    }
    
    @keyframes animateGradient {
        0% {
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`


export const StyledSecondButton = styled.button`
    position: relative;
    height: 37px;
    width: 130px;
    border-style: none;
    border-radius: 20px;
    margin: 30px;
    cursor: pointer;

    background-color: ${({ theme }) => theme.colors.complementaryTransparent};
    transition: background-color 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.primaryLightShade};
    font-size: 16px;

    :hover{
        background-color: ${({ theme }) => theme.colors.complementary};
    }
    
    @keyframes animateGradient {
        0% {
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`