import styled from "styled-components";
import logoBg from '../../assets/logoBg.jpeg';

export const StyledIntroduction = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title-container {
        line-height: 8rem;
        margin-top: 120px;
        text-align: center;
    }

    .got-a-plan {
        border-radius: 20px;
        border: 3px solid #d9d9ff;
    }

    h1 img {
        width: auto;
        height: 9rem;
    }
`