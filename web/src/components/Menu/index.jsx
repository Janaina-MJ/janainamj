import { StyledMenu } from './Menu.styled';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import logo from '../../assets/logo.svg'

export function Menu() {

  return (
    <StyledMenu>

        <a href='#' className='logo'><img src={logo} alt='' />ana</a>

        <nav>
            <ul>
                <li><a href='#' className='menu-item'>About</a></li>
                <li><a href='#' className='menu-item'>Projects</a></li>
                <li><a href='#' className='menu-item'>Skills</a></li>
                <li><a href='#' className='menu-item'>Contact</a></li>
                <li className='social-media'>
                <a href='https://www.linkedin.com/in/janaina-mj/' target='_blank' className='menu-item'><FaLinkedinIn /></a>
                <a href='https://github.com/Janaina-MJ' target='_blank' className='menu-item'><FaGithub /></a>
                </li>
            </ul>
        </nav>
    </StyledMenu>
  )
}