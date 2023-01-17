import styled from "styled-components";

export const StyledSkillsRoulette = styled.div`
    position: relative;
    max-width: 310px;
    height: 450px;
    transform-style: preserve-3d;
    


    .roulette-one {
        transform: rotate(-20deg);
        position: absolute;
        top: 108px;
        left: 53px;
    }

    .roulette-two {
        transform: rotate(20deg);
        position: absolute;
        top: 242px;
        left: 106px;
    }

    .roulette-three {
        position: absolute;
        top: 380px;
        left: 8px;
    }

    .roulette {
        width: 150px;
        height: 100%;
        transform-style: preserve-3d;
        animation: animation1 24s linear infinite;
    }

   
    

    @keyframes animation1 {
        0%{
            transform: perspective(1000px) rotateX(0deg);
        }
        100%{
            transform: perspective(1000px) rotateX(360deg);
        }
    }

   
    
`

export const StyledSkill = styled.span`
    position: absolute;
    inset: 0;
    transform: rotateX(calc(${(props)=> props.rotation} *15deg));

    ::before {
        content: '${(props)=> props.skill}';
        position: absolute;
        width: 100%;
        height: 100px;
        text-align: center;
        color: ${({ theme }) => theme.colors.primaryLightShade};
        font-size: 3.2em;
        text-transform: uppercase;
        font-weight: bold;
        -webkit-text-stroke: 2px ${({ theme }) => theme.colors.secondaryLightNeon};
    }

`

