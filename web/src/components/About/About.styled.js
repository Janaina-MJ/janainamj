import styled from "styled-components";

export const StyledAbout = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    .profile {

    }

    .skills-animation {
        height: 450px;
        min-width: 310px;
    }


    h2 {
        margin: 50px 0;
    }

    //Responsive-mode for medium and desktop devices:
    @media(min-width: 640px) {

        flex-direction: row;
        
        .profile {
            padding-right: 25px;
        }
    }
`