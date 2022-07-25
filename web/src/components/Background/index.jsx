import { StyledBackground, StyledPixel } from "./Background.styled";

export function Background() {

    return (
        <StyledBackground>
            <div className="bg-transparency"></div>
            <div className="bg-pixels">
                <StyledPixel speed={11}></StyledPixel>
                <StyledPixel speed={6}></StyledPixel>
                <StyledPixel speed={9}></StyledPixel>
                <StyledPixel speed={25}></StyledPixel>
                <StyledPixel speed={14}></StyledPixel>
                <StyledPixel speed={21}></StyledPixel>
            </div>
        </StyledBackground>
    )
}