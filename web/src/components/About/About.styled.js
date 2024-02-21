import styled from "styled-components";

export const StyledAbout = styled.article`
    width: 100%;
    height: auto;
    margin-bottom: 115px;

    .about-me-container {
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    .profile {
        margin-top: 40px;
        border-radius: 10px;
        background: linear-gradient(to bottom, ${({ theme }) => theme.colors.secondaryTransparent}, ${({ theme }) => theme.colors.secondaryTransparent}, transparent);
        padding: 40px 20px;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 45px;
    }

    .about-me-text {
        width: 100%;
        margin: auto;
        text-align: center;
        //color: ${({ theme }) => theme.colors.primaryDarkShade};
        opacity: 0.7;
        font-style: italic;
    }

    .skills-animation {
        min-width: 265px;
        opacity: 0.7;
    }

    h2 {
        margin: 50px 0 20px 10px;
    }

    //Responsive-mode for desktop devices:
    @media(min-width: 992px) {

        .about-me-container {
            width: 100%;
            flex-direction: row;
        }

        .profile {
            background: linear-gradient(to right, ${({ theme }) => theme.colors.secondaryTransparent}, ${({ theme }) => theme.colors.secondaryTransparent}, transparent);
        }
    }
`