import styled from "styled-components";

export const StyledIntroduction = styled.div`
    position: relative;
    width: 90%;
    margin: auto;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title-container {
        line-height: 4rem;
        text-align: center;
        min-width: 320px;
    }

    .introduction-phrase {
        font-weight: bold;
        text-align: center;
        background: linear-gradient(-45deg, ${({ theme }) => theme.colors.tertiaryLightShade}, ${({ theme }) => theme.colors.secondaryLightNeon}, ${({ theme }) => theme.colors.tertiaryLightShade}, ${({ theme }) => theme.colors.secondaryLightNeon});
        background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: light-up 3s ease-in-out infinite;
    }

    @keyframes light-up {
        0% { background-position: 0 50%; }
        50% { background-position: 50% 50%; }
        100% { background-position: 0 50%; }
    }

    //Responsive-mode for medium devices:
    @media(min-width: 640px) and (max-width: 991px) {
        .title-container {
            line-height: 6rem;
            min-width: 466px;
        }
    }


    //Responsive-mode for desktop devices:
    @media(min-width: 992px) {
        .title-container {
            line-height: 8rem;
        }
    }
`

export const StyledLetter = styled.div`

    display: inline-block;
    cursor: default;
    animation: grow 1s forwards alternate;
    animation-duration: calc(10s / ${({ speed }) => speed });
    margin-right: ${props => props.letterSpace ? '0.3em' : '0'};
 
    @keyframes grow {
        0% {transform: scale(0);}
        100%{transform: scale(1);}
    }

    :hover {
        animation: rotating 1s ease-in-out;
    }

    @keyframes rotating {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(1deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }

`