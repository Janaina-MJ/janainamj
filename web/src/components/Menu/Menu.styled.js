import styled from "styled-components";

export const StyledMenu = styled.div`
    display: none;

    //Responsive-mode for desktop devices:
    @media(min-width: 775px) {

        position: fixed;
        top: 0;
        left: 0;
        width: 15vw;
        height: 100%;
        border-right: 1px solid ${({ theme }) => theme.colors.primaryMediumShade};;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .logo {
            width: 100%;
            height: 300px;
            font-size: 3.5rem;
            display: flex;
            justify-content: center;
            align-items: center;

            color: ${({ theme }) => theme.colors.tertiaryLightShade};
            opacity: 0.5;
            font-weight: 700;
            transition: 1s;

            :hover {
                letter-spacing: 0.3rem;
                opacity: 1;
            }

            :hover {
                transform: rotate(-360deg);
            }
        }

        .logo img {
            width: auto;
            height: 75px;
        }

        nav {
            width: 100%;
            height: auto;
        }

        ul {
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            border-top: 1px solid ${({ theme }) => theme.colors.primaryMediumShade};
        }

        li {
            width: 100%;
            height: 57px;
            list-style: none;
            padding: 15px 0 15px 0;
            border-bottom: 1px solid ${({ theme }) => theme.colors.primaryMediumShade};
        }

        .menu-item {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            color: ${({ theme }) => theme.colors.tertiaryLightShade};
            opacity: 0.5;
            font-weight: 700;
            transition: 1s;

            :hover {
                letter-spacing: 0.3rem;
                opacity: 1;
            }
        }

        .social-media {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .social-media a {
            display: block;
            width: auto;
            padding: 0 15px;
        }
    }
`