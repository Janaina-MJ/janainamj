import styled from "styled-components";

export const StyledBrushedLetters = styled.span`
    cursor: default;
    animation: growLetter 1s forwards alternate;
    display: inline-block;
 
    @keyframes growLetter {
        0% {transform: scale(0);}
        100%{transform: scale(1);}
    }

    :hover {
        animation: rotateLetter 1s ease-in-out;
    }

    @keyframes rotateLetter {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(1deg);
        }

        100% {
            transform: rotate(0deg);
        }
    }
`