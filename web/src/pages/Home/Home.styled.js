import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    margin: auto;

    header {
        width: auto;
        height: auto;
    }

    main {
        max-width: 100%;
        height: 100vh;
        padding: 25px;

    }

    .home {
        
    }

    //Responsive-mode for desktop devices:
    @media(min-width: 775px) {

        header {
            width: 15vw;
        }

        main {
            width: 84vw;
            margin-left: 16vw;
        }
    }
`