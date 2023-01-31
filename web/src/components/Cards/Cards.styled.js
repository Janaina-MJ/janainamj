import styled from "styled-components";

export const StyledCard = styled.div`

    width: 280px;
    height: 180px;
    margin: 5px 5px;
    background-color: ${({ theme }) => theme.colors.secondaryTransparent};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;


    .project-link {
        cursor: pointer;
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondaryLightShade};
        border-radius: 10px;
    }

    .project-link:hover {
        background-image: url(${props => props.projectImgMobile});
        background-size: cover;
        background-position: center top;
        animation: scrollImg 1s ease-in-out forwards; //infinite alternate-reverse
        opacity: 0.7;
    }

    @keyframes scrollImg {

        from {
            background-position: center top;
        }
        to {
            background-position: center bottom;
        }
    }

    .project-img {
        background-image: url(${props => props.projectImgLogo});
        background-size: cover;
        background-position: center;
        width: 140px;
        height: 140px;
        border-radius: 50%;
    }

   .project-img-display {
        display: none;
   }

   .project-details {
        width: 85vw;
        //height: auto;
        background-color: ${({ theme }) => theme.colors.tertiaryBlack};
        border-radius: 10px;
        padding: 20px;
        position: relative;
        margin: 100px 0;
        box-shadow: 0 0 25px ${({ theme }) => theme.colors.secondaryLightTransparent};
        display: flex;
        flex-direction: column;
   }

   .closeButton {
        cursor: pointer;
        border-style: none;
        width: 20px;
        height: 20px;
        align-self: flex-end;
        margin-bottom: 10px;
   }

   .project-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
   }

   .project-cover {
        width: 100%;
        max-width: 350px;
        height: auto;
        border-radius: 5px;
        align-self: center;
   }

   .project-info {
        margin: 15px 0 25px;
   }

   .project-info h6 {
        margin-bottom: 15px;
   }

   .mini-tech-stack {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 0;
   }

   .mini-tech-stack li {
		list-style: none;
        margin: 2.5px 5px;
        min-width: 100px;
        height: 30px;
        flex-grow: 1;
        background-color: ${({ theme }) => theme.colors.complementaryTransparent};
        transition: background-color 0.2s ease-in-out;
        border-radius: 10px;

	}

    .mini-tech-stack li:hover {
        background-color: ${({ theme }) => theme.colors.complementary};
    }

    .mini-tech-stack li a {
        color: ${({ theme }) => theme.colors.tertiaryLightShade};
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	}

    .blur-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: auto;
        min-height: 100vh;
        background-color: ${({ theme }) => theme.colors.secondaryTransparent};
        backdrop-filter: blur(30px);
        z-index: 1;
        display: flex; //close button adiciona classe display none ao mesmo tempo que a classe diplay flex esta ativa, entao ele nao obedece
        justify-content: center;
        align-items: center;
    }


     //Responsive-mode for medium devices:
     @media(min-width: 640px) and (max-width: 991px) {
        .project-details {
            width: 50vw;
        }
     }

    //Responsive-mode for desktop devices:
    @media(min-width: 992px) {

        .project-details {
            width: 560px;
        }
        
        .project-cover {
            align-self: flex-start;
            width: 50%;
            
        }

        .project-container{
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        .project-info {
            padding-left: 10px;
            margin: 0 0 10px;
        }
    }

`