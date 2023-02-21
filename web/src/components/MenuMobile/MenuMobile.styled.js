import styled from "styled-components";

export const StyledMenuMobile = styled.div`
    width: auto;
    height: auto;

    .hamburger {
        position: fixed;
        top: 25px;
        left: 25px;
        width: 25px;
        height: 25px;
        z-index: 3;
    }

    .hamburger:after, .hamburger:before {
        content: '';
        display: block;
        width: 100%;
        height: 2.5px;
        margin: 5px 0;
        background-color: ${({ theme }) => theme.colors.tertiaryLightShade};
        transition: 0.4s;
    }

    .hamburger.iconClose:after {
        transform: rotate(-45deg) ;
    }

    .hamburger.iconClose:before {
        transform: rotate(45deg) translate(6px, 5px);
    }

    .menu {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-color: ${({ theme }) => theme.colors.primaryDarkShade};
        top: 0;
        left: -100vw;
        transition: 0.4s;
        z-index: 2;
    }

    .showMenu{
        left: 0;
    }

    .menu-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 20px 0 15px 0;
    }

    .logo {
        width: auto;
        height: 60px;
        margin-bottom: 30px;
    }

    nav{
        width: 100%;
        height: auto;
        margin-top: 63px;
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
        height: auto;
        list-style: none;
        padding: 15px 0 15px 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.primaryMediumShade};
    }

    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.colors.tertiaryLightShade};
        opacity: 1;
        font-weight: lighter;

        :active {
            letter-spacing: 0.3rem;
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

     //Responsive-mode for desktop devices:
     @media(min-width: 774px) {
        display: none;
    }
`