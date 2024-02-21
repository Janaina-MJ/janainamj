import { StyledAbout } from './About.styled';
import { SkillsRoulette } from '../../components/SkillsRoulette';
import { React } from 'react';
import { BrushedLetters } from '../BrushedLetters';

export function About() {

    return(

        <StyledAbout>
            <h2>About me</h2>
            <div className='about-me-container'>
                <section className='profile'>
                    <p className='about-me-text'>
                        <BrushedLetters text={`I am a Web Developer with experience creating impactful and user-friendly web applications, utilizing modern tools and technologies such as React, Next, Typescript and TailwindCSS.`}></BrushedLetters>
                    </p>
                    <p className='about-me-text'>
                        <BrushedLetters text={`I have contributed to projects within the financial market and data-driven football analysis, demonstrating skills in data fetching, manipulation of large datasets and experience with responsive design, code version control, software Architecture principles and performance optimization. I am always looking for new challenges and believe in the power of continuous learning.`}></BrushedLetters>
                    </p>
                    
                </section>
                <section className='skills-animation'>
                    <SkillsRoulette />
                </section>
                
            </div>
            
            
        </StyledAbout>
    )
}