import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;

    header {
        width: auto;
        height: auto;
    }

    main {
        width: 100%;
        height: 100vh;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }

    .main-sections {
        height: auto;
    }

    .introduction-section {
        height: 90vh;
    }

    // RESPONSIVE MODE FOR DESKTOP DEVICES:
    @media(min-width: 775px) {

        header {
            width: 12vw;
        }

        main {
            width: 84vw;
            margin-left: 13vw;
            padding: 25px;
        }
    }
`