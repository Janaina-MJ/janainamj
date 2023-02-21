import styled from "styled-components";

export const StyledContactMe = styled.div`

    width: 100%;
    height: auto;

    h2 {
        margin: 50px 0 50px 10px;
    }

    .contact-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .form-container {
        width: 90%;
        margin: 0 auto;
    }

    .contact-info em {
        color: ${({ theme }) => theme.colors.tertiaryMediumShade};
    }

    .contact-info {
        width: 90%;
        margin: auto;
    }

    .form {
        background-color: ${({ theme }) => theme.colors.secondaryTransparent};
        border-radius: 10px;
        padding: 25px 15px;
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
    }

    .field-set {
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }

    .message-title {
        margin: 0;
    }

    .message-text {
        height: 150px;
        max-width: 100%;
    }

    .fields {
        border-radius: 5px;
        border-style: none;
        border: 1px solid transparent;
        padding: 10px;
        background-color: ${({ theme }) => theme.colors.secondaryTransparent};
        color: ${({ theme }) => theme.colors.tertiaryLightShade};
        font-size: 0.8em;
        font-style: italic;
        margin-top: 5px;
    }

    .fields:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.secondaryLightTransparent};
    }

    .field-title {
        color: ${({ theme }) => theme.colors.secondaryLightTransparent};
        
    }

    .submit-form-button {
        width: 100%;
        margin: 0;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .contact-list {
        width: 90%;
        margin: 90px auto;
        display: flex;
        flex-direction: column;
    }

    .contact-option {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 15px;
        align-items: center;
        margin: 0 0 55px;
    }

    .contact-icon {
        min-width: 30px;
        min-height: 30px;
        color: ${({ theme }) => theme.colors.complementary};
    }

    .contact-description {
        margin: 0;
        color: ${({ theme }) => theme.colors.tertiaryMediumShade};
        font-weight: bold;
        font-size: 0.7em;
        transition: color 0.3s ease-in-out;
        cursor: pointer;
    }

    .contact-description:hover {
        color: ${({ theme }) => theme.colors.tertiaryLightShade};
    }

    .contact-location {
        text-align: center;
        margin: 100px 0;
    }

    .custom-alert-container {
        position: fixed;
        top: 0;
        left: -150%;
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.colors.tertiaryBlack};
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .custom-alert {
        width: 40%;
        min-width: 290px;
        height: auto;
        background-color: ${({ theme }) => theme.colors.secondaryFullColor};
        border-radius: 10px;
        color: ${({ theme }) => theme.colors.secondaryLightTransparent};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
    }

    .alert-box-line {
        border-color: ${({ theme }) => theme.colors.secondaryDarkShade};
        width: 100%;
    }

    .close-custom-alert {
        align-self: flex-end;
        width: auto;
        height: auto;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.tertiaryLightShade};
        cursor: pointer;
    }

    //Responsive-mode for medium devices:
    @media(min-width: 640px) and (max-width: 991px) {
        .contact-description {
            font-size: 1em;
        }
    }


    //Responsive-mode for desktop devices:
    @media(min-width: 992px) {
        .contact-container {
            flex-direction: row;
        }

        .form-container {
            width: 48%;
        }

        .contact-info {
            width: 48%;
        }

        .contact-description {
            font-size: 1em;
        }
    }
`