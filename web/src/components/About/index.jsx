import { StyledAbout } from './About.styled';
import { SkillsRoulette } from '../../components/SkillsRoulette';
import React from 'react';

export function About() {

        return(

            <StyledAbout>
                <section className='profile'>
                    <h2>About me</h2>
                    <p>I'm a junior web developer, curious and keen to learn new practices and technologies. <br/> 
                    My story with IT started early and has always been present in different stages of my life, from when I was a teenager creating blogs for school work and for personal use, to adulthood working in tech companies. But as a person with analytical and organizational profile, I ended up building a career in the administrative area and was successful in the performance of my duties.</p>
                    <p>It was in 2020 that I saw an opportunity to make a career transition. I started dedicating time to study more about what I always enjoyed doing. I became even more passionate about the ability that technology presented to communicate ideas and be harnessed for social good. Since then, I've been developing <a href='#'>personal projects</a> to put into practice everything I've learned.</p>
                    <p>Through this hands on experience I've developed knowledge about the fundamentals of the frontend and backend, understanding in the use of technologies such as React.js, Node.js, Express.js and Sass. I also developed problem-solving skills, practice in code versioning with Git and GitHub, and a mindset focused on Responsive Design and web accessibility.</p>
                </section>
                <section className='skills-animation'>
                    <SkillsRoulette />
                </section>
            </StyledAbout>
        )
    }