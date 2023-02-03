import { StyledSkills } from './Skills.styled'
import { TiHtml5 } from 'react-icons/ti'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiBabel } from 'react-icons/si'
import { FaReact, FaNode, FaGitAlt, FaSass, FaBookReader, FaPeopleCarry } from 'react-icons/fa'
import { GiLoveMystery } from 'react-icons/gi'
import { useRef, useState } from 'react';

export function Skills() {

    const [isHardSkills, setIsHardSkills] = useState(true);

    const toggleSkills = ()=> {

    }

    return(
        <StyledSkills>
            <h2>My skills</h2>
            <p className='skills-brief'>Through a combination of academic study and hands-on experience in personal projects, I have developed technical skills and knowledge. I am a self-motivated learner who is always eager to expand my skillset and stay up-to-date with the latest developments in the field.</p>

            <div className='button-switch' >
                <button onClick={()=>{setIsHardSkills(!isHardSkills)}} className={isHardSkills? 'hard-skills-button button-on' : 'hard-skills-button button-off'} >HARD SKILLS</button>
                <button onClick={()=>{setIsHardSkills(!isHardSkills)}} className={isHardSkills? 'soft-skills-button button-off' : 'soft-skills-button button-on'} >SOFT SKILLS</button>
            </div>
            

            <div className='skills-container'>

                <div className={isHardSkills? 'hard-skills displayFlex' : 'hard-skills displayNone'} >
                    <div className='skill-card'  >
                        <TiHtml5 className='skill-icon' />
                        <p className=''> HTML</p>
                    </div>

                    <div className='skill-card' >
                        <IoLogoCss3 className='skill-icon' />
                        <p className=''> CSS</p>
                    </div>

                    <div className='skill-card' >
                        <SiJavascript className='skill-icon' />
                        <p className=''> Javascript</p>
                    </div>

                    <div className='skill-card' >
                        <FaReact className='skill-icon' />
                        <p className=''> ReactJs</p>
                    </div>

                    <div className='skill-card' >
                        <FaNode className='skill-icon' />
                        <p className=''> NodeJs</p>
                    </div>

                    <div className='skill-card' >
                        <FaGitAlt className='skill-icon' />
                        <p className=''> Git/Github</p>
                    </div>

                    <div className='skill-card' >
                        <FaSass className='skill-icon' />
                        <p className=''> Sass</p>
                    </div>

                    <div className='skill-card' >
                        <SiBabel className='skill-icon' />
                        <p className=''> Babel</p>
                    </div>
                </div>
               
               <div className={isHardSkills? 'soft-skills displayNone' : 'soft-skills displayFlex'}>
                    <div className='skill-card' >
                        <GiLoveMystery className='skill-icon' />
                        <p className=''> Passion for coding</p>
                    </div>

                    <div className='skill-card' >
                        <FaBookReader className='skill-icon' />
                        <p className=''> Eager to learn</p>
                    </div>

                    <div className='skill-card' >
                        <FaPeopleCarry className='skill-icon' />
                        <p className=''> team player</p>
                    </div>
               </div>
                
            </div>
        </StyledSkills>
    )
}