import styled from "styled-components";

export const StyledSkills = styled.div`

    width: 100%;
    height: auto;
    margin: 140px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        align-self: flex-start;
        margin-bottom: 50px;
    }

    .skills-brief {
        width: 90%;
    }

    .skills-container {
        width: 80%;
        height: auto;
        margin: 30px 0 80px;
        //background-color: ${({ theme }) => theme.colors.secondaryTransparent};
        border-radius: 15px;
        padding: 15px;
        position: relative;

    }

    .show-skills {
        animation: spinDisplay 1s ease-in-out forwards;
    }

    .hide-skills{
        animation: spinDisappear 1s ease-in-out forwards;
    }

    @keyframes spinDisplay {
        0% {
            transform: rotateY(90deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }

    @keyframes spinDisappear {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(90deg);
        }
    }



    .button-switch {
        margin: 40px auto 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
    }

    .hard-skills-button, .soft-skills-button {
        margin: 0;
        cursor: pointer;
        border-style: none;
        padding: 10px 20px;
        font-size: 0.7em;
        border: 1px solid ${({ theme }) => theme.colors.secondaryLightNeon};
    }

    .button-off {
        color: ${({ theme }) => theme.colors.tertiaryLightShade};
        background-color: ${({ theme }) => theme.colors.primaryMediumShade};
        
    }

    .button-on {
        color: ${({ theme }) => theme.colors.primaryDarkShade};
        background-color: ${({ theme }) => theme.colors.secondaryLightNeon};
        box-shadow: 0 0 25px ${({ theme }) => theme.colors.secondaryLightNeon};
    }

    .hard-skills-button{
        border-radius: 10px 0 0 10px;
    }

    .soft-skills-button {
        border-radius: 0 10px 10px 0;
    }

    .hard-sills, .soft-skills {
        width: 100%;
        height: 100%;
    }

    .displayFlex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .displayNone {
        display: none;
    }

    .skill-card {
        width: 100px;
        height: 100px;
        background-color: ${({ theme }) => theme.colors.primaryMediumShade};
        box-shadow: inset 0 0 25px ${({ theme }) => theme.colors.secondaryLightTransparent};
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 10px;
        padding-top: 15px;
        position: relative;
    }

    .skill-card:hover {
        animation: flip 1s ease-in-out;
    }

    @keyframes flip {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }

    .skill-icon {
        width: 35px;
        height: 35px;
        color: ${({ theme }) => theme.colors.secondaryLightTransparent};
    }

    .skill-card p {
        font-size: 0.6em;
        color: ${({ theme }) => theme.colors.secondaryLightShade};
        margin-top: 7px;
    }
`