import styled from "styled-components";
import weather from '../../assets/weather.jpeg';
import tryIt from '../../assets/tryIt.jpeg';

export const StyledProjects = styled.div`
    
    min-height: 800px;
    width: 100%;
    margin-bottom: 120px;

    .featured-project {
        min-height: 650px;
        width: 100%;
        margin-bottom: 60px;
    }

    .project-view {
        width: 100%;
        background-color: ${({ theme }) => theme.colors.secondaryTransparent};
        border-radius: 15px;
        padding: 20px 10px;
        margin-top: 20px;
    }

    .featured-project-img {
        width: 95%;
        min-height: 190px;
        margin: 20px auto;
        border-radius: 5px;
        background-image: url(${weather});
        background-size: cover;
        background-position: center;
        //animation: light-up 3s linear infinite ;
    }

    @keyframes light-up {
        0% { background-position: 0 50%; }
        100% { background-position: 100% 50%; }
    }

    .tech-stack {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    ul li {
		list-style: none;
        margin: 2.5px 5px;
        min-width: 120px;
        height: 30px;
        flex-grow: 1;
        background-color: ${({ theme }) => theme.colors.complementaryTransparent};
        transition: background-color 0.2s ease-in-out;
        border-radius: 10px;

	}

    ul li:hover {
        background-color: ${({ theme }) => theme.colors.complementary};
    }

    ul li a {
        color: ${({ theme }) => theme.colors.tertiaryLightShade};
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	}

    .mobile-container {
        display: none;
    }

    .mobile-view-holder {
        width: 320px;
        height: 568px;
        position: relative;
    }

    .mobile-picture {
        height: 568px;
        width: 320px;
        position: absolute;
        margin: 35px 0;
        top: 0;
        left: 0;
    }

    .mobile-picture::before {
        content: "";
        position: absolute;
        top: 0;
        left: 90px;
        height: 568px;
        width: 320px;
        //background-color: ${({ theme }) => theme.colors.primaryDarkShade};
        background-image: url(${tryIt});
        background-size: cover;
        border: solid ${({ theme }) => theme.colors.tertiaryMediumShade};
        border-width: 7px 7px;
        border-radius: 45px;
        box-shadow: 10px 10px 50px ${({ theme }) => theme.colors.secondaryDarkShade};
        transform: rotate(10deg);
    }

    .mobile-screen {
        position: absolute;
        height: 568px;
        width: 297px;
        top: 15px;
        border: solid ${({ theme }) => theme.colors.tertiaryMediumShade};
        border-width: 7px 7px;
        border-radius: 45px;
        box-shadow: 10px 10px 50px ${({ theme }) => theme.colors.secondaryDarkShade};
    }

    .mobile-screen::-webkit-scrollbar {
        display: none;
    }

    .projects-portfolio {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

     //Responsive-mode for medium devices:
     @media(min-width: 640px) and (max-width: 991px) {

        .featured-project {
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
        }

        .mobile-container {
            display: block;
            position: relative;
            width: 100%;
            min-width: 321px;
            height: 650px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 40px;
        }

     }

    
     //Responsive-mode for desktop devices:
     @media(min-width: 992px) {
        .featured-project {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 160px;
        }

        .project-view {
            width: 50%;
            height: 100%;
        }

        .mobile-container {
            display: block;
            position: relative;
            width: 40%;
            min-width: 321px;
            height: 568px;
        }
    }
 
`