import { StyledIntroduction, StyledLetter } from './Introduction.styled';
import { StyledKeyButton } from '../../styles/Buttons';

export function Introduction() {
     
    return(

        <StyledIntroduction >
            <h1 className='title-container' label="HI! I'm Jana, web developer"> 
                <StyledLetter speed={22}>H</StyledLetter>
                <StyledLetter speed={6}>i</StyledLetter>
                <StyledLetter speed={11} letterSpace={true}>! </StyledLetter>  
                <StyledLetter speed={4}>I</StyledLetter>
                <StyledLetter speed={9}>'</StyledLetter>
                <StyledLetter speed={14} letterSpace={true}>m </StyledLetter>
                <StyledLetter speed={21}>J</StyledLetter>
                <StyledLetter speed={5}>a</StyledLetter>
                <StyledLetter speed={17}>n</StyledLetter>
                <StyledLetter speed={6}>a</StyledLetter>
                <StyledLetter speed={15}>,</StyledLetter> 
                <br/>
                <StyledLetter speed={9}>w</StyledLetter>
                <StyledLetter speed={6}>e</StyledLetter>
                <StyledLetter speed={11} letterSpace={true}>b </StyledLetter>
                <StyledLetter speed={26}>d</StyledLetter>
                <StyledLetter speed={9}>e</StyledLetter>
                <StyledLetter speed={14}>v</StyledLetter>
                <StyledLetter speed={5}>e</StyledLetter>
                <StyledLetter speed={10}>l</StyledLetter>
                <StyledLetter speed={7}>o</StyledLetter>
                <StyledLetter speed={17}>p</StyledLetter>
                <StyledLetter speed={5}>e</StyledLetter>
                <StyledLetter speed={9}>r</StyledLetter>
                <StyledLetter speed={14}>.</StyledLetter>
            </h1>
            <p className='introduction-phrase'>I create impactful and user-friendly web applications.</p>
            <StyledKeyButton className='linkedin-button'><a href="https://www.linkedin.com/in/janaina-mj/" target='_blank'>LinkedIn</a></StyledKeyButton>
        </StyledIntroduction>
    )
}