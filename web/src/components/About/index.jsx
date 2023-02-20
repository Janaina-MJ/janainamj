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
                        <BrushedLetters text={`I am a dedicated technology enthusiast. Although I had my first taste of programming in high school and found it captivating, it was in 2021 that I decided to make a career transition and focus on studying web development. Since then, I have been actively working on personal projects to practice what I've learned.`}></BrushedLetters>
                    </p>
                    <p className='about-me-text'>
                        <BrushedLetters text={`Through this process, I've gained a better understanding of the fundamentals of frontend and backend development, and learned about the use of modern technologies. I've also developed problem-solving skills, practiced versioning with Git and GitHub, and focused on responsive design and web accessibility.`}></BrushedLetters>
                    </p>
                    
                </section>
                <section className='skills-animation'>
                    <SkillsRoulette />
                </section>
                
            </div>
            
            
        </StyledAbout>
    )
}