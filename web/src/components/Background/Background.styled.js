import styled from "styled-components";

export const StyledBackground = styled.div`
    min-height: 100vh;
    background: linear-gradient(${({ theme }) => theme.colors.primaryDarkShade}, ${({ theme }) => theme.colors.primaryLightShade});
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    .bg-transparency{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(${({ theme }) => theme.colors.primaryDarkShade}, ${({ theme }) => theme.colors.primaryDarkShade}, transparent);
        z-index: -1;
    }

    .bg-pixels {
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
`

export const StyledPixel = styled.span`
    position: relative;
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.secondaryLightShade};
    opacity: 0.3;
    box-shadow: 0 0 19px 7px ${({ theme }) => theme.colors.secondaryMediumShade};
    animation: up 15s linear infinite;
    animation-duration: calc(150s / ${({ speed }) => speed });
    z-index: -100;

    @keyframes up {
        0% {
            transform: translateY(100vh) scale(0);
        }

        10% {
            transform: translateY(100vh) scale(2);
        }

        100% {
            transform: translateY(-10vh) scale(3);   
        }
    }
`