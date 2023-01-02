import styled from "styled-components";

export const StyledAbout = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .profile {
        width: 55%;
        min-height: 550px;
    }

    .skills-animation {
        width: 43%;
        min-width: 412px;
        min-height: 550px;
    }

    h2 {
        margin: 50px 0;
    }
`