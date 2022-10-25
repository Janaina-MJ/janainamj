import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: scroll;
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

    .main-sections {
        margin-bottom: 150px;
    }

    // RESPONSIVE MODE FOR DESKTOP DEVICES:
    @media(min-width: 775px) {

        header {
            width: 12vw;
        }

        main {
            width: 84vw;
            margin-left: 13vw;
        }
    }
`