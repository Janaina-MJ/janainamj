import { StyledMenuMobile } from './MenuMobile.styled';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import logoBw from '../../assets/logoBw.svg'
import { useState } from 'react';

export function MenuMobile() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <StyledMenuMobile>
      
      <div className={isMenuVisible ? 'hamburger iconClose' : 'hamburger'} onClick={() => setIsMenuVisible(!isMenuVisible)}></div>

      <div className={isMenuVisible ? 'menu showMenu' : 'menu'}>

        <nav>
          <ul>
            <li onClick={()=> {setIsMenuVisible(false)}}><a href='#introduction'><img className='logo' src={logoBw} alt='' /></a></li>
            <li onClick={()=> {setIsMenuVisible(false)}}><a href='#projects'>Projects</a></li>
            <li onClick={()=> {setIsMenuVisible(false)}}><a href='#about'>About</a></li>
            <li onClick={()=> {setIsMenuVisible(false)}}><a href='#skills'>Skills</a></li>
            <li onClick={()=> {setIsMenuVisible(false)}}><a href='#contact'>Contact</a></li>
            <li onClick={()=> {setIsMenuVisible(false)}} className='social-media'>
              <a href="https://www.linkedin.com/in/janaina-mj/" target="_blank"><FaLinkedinIn /></a>
              <a href="https://github.com/Janaina-MJ" target="_blank"><FaGithub /></a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledMenuMobile>
  )
}