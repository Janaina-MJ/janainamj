import { StyledIntroduction } from './Introduction.styled';
import logoBw from '../../assets/logoBw.svg';
import logoColorful from '../../assets/logoColorful.svg';
import { StyledFlashingUnderscore } from '../FlashingUnderscore/FlashingUnderscore.styled';
import { StyledKeyButton } from '../../styles/Buttons';
import { useState, useRef } from 'react';

export function Introduction() {
     
    return(

        <StyledIntroduction >
            <h1 className='title-container' label="HI! I'm Jana, web developer"> 
                <span>Hi! I'm </span><img src={logoBw} alt='J' /><span>ana,</span> 
                <br/>
                <span>web developer.</span>
            </h1>
            <p>Exploring the world of tech one byte at a time.</p>
            <StyledKeyButton>LinkedIn</StyledKeyButton>
        </StyledIntroduction>
    )
}