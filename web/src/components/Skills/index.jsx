import { StyledSkills, StyledSkillCard } from './Skills.styled'
import { TiHtml5 } from 'react-icons/ti'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiBabel, SiStyledcomponents } from 'react-icons/si'
import { FaReact, FaNode, FaGitAlt, FaSass, FaBookReader, FaPeopleCarry } from 'react-icons/fa'
import { GiLoveMystery } from 'react-icons/gi'
import { useState } from 'react';

export function Skills() {

    const [isHardSkills, setIsHardSkills] = useState(true);

    const toggleSkills = ()=> {
        setIsHardSkills(!isHardSkills);
    }

    return(
        <StyledSkills>
            <h2>My skills</h2>
            <p className='skills-brief'>Through a combination of academic study and hands-on experience in personal projects, I have developed technical skills and knowledge. I am a self-motivated learner who is always eager to expand my skillset and stay up-to-date with the latest developments in the field.</p>

            <div className='button-switch' >
                <button onClick={toggleSkills} className={isHardSkills? 'hard-skills-button button-on' : 'hard-skills-button button-off'} >HARD SKILLS</button>
                <button onClick={toggleSkills} className={isHardSkills? 'soft-skills-button button-off' : 'soft-skills-button button-on'} >SOFT SKILLS</button>
            </div>
            

            <div className='skills-container'>

                <div className={isHardSkills? 'hard-skills displayFlex' : 'hard-skills displayNone'} >
                    <StyledSkillCard speed={11} >
                        <TiHtml5 className='skill-icon' />
                        <p> HTML</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={6} >
                        <IoLogoCss3 className='skill-icon' />
                        <p> CSS</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={9} >
                        <SiJavascript className='skill-icon' />
                        <p> Javascript</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={25} >
                        <FaReact className='skill-icon' />
                        <p> ReactJs</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={14} >
                        <FaNode className='skill-icon' />
                        <p> NodeJs</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={21} >
                        <FaGitAlt className='skill-icon' />
                        <p> Git/Github</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={11} >
                        <FaSass className='skill-icon' />
                        <p> Sass</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={6} >
                        <SiStyledcomponents className='skill-icon' />
                        <p> Styled Component</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={9} >
                        <SiBabel className='skill-icon' />
                        <p> Babel</p>
                    </StyledSkillCard>
                </div>
               
               <div className={isHardSkills? 'soft-skills displayNone' : 'soft-skills displayFlex'}>
                    <StyledSkillCard speed={11} >
                        <GiLoveMystery className='skill-icon' />
                        <p> Passion for coding</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={6} >
                        <FaBookReader className='skill-icon' />
                        <p> Eager to learn</p>
                    </StyledSkillCard>

                    <StyledSkillCard speed={9} >
                        <FaPeopleCarry className='skill-icon' />
                        <p> team player</p>
                    </StyledSkillCard>
               </div>
                
            </div>
        </StyledSkills>
    )
}