import { StyledMenuMobile } from './MenuMobile.styled';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import { useState } from 'react';

export function MenuMobile() {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <StyledMenuMobile>

      <div className={isMenuVisible ? 'hamburger iconClose' : 'hamburger'} onClick={() => setIsMenuVisible(!isMenuVisible)}></div>

      <div className={isMenuVisible ? 'menu showMenu' : 'menu'}>

        <nav>
          <ul>
            <li><a href='#' className='logo'><img src={logo} alt='' />ana</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Skills</a></li>
            <li><a href='#'>Contact</a></li>
            <li className='social-media'>
              <a href="https://www.linkedin.com/in/janaina-mj/" target="_blank"><FaLinkedinIn /></a>
              <a href="https://github.com/Janaina-MJ" target="_blank"><FaGithub /></a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledMenuMobile>
  )
}