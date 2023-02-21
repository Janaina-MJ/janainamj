import { StyledMenu } from './Menu.styled';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import logoBw from '../../assets/logoBw.svg';

export function Menu() {
  
  return (
    <StyledMenu>

        <a href='#introduction' className='logo'><img src={logoBw} alt='J' /></a>

        <nav>
            <ul>
                <li><a href='#projects' className='menu-item'>Projects</a></li>
                <li><a href='#about' className='menu-item'>About</a></li>
                <li><a href='#skills' className='menu-item'>Skills</a></li>
                <li><a href='#contact' className='menu-item'>Contact</a></li>
                <li className='social-media'>
                <a href='https://www.linkedin.com/in/janaina-mj/' target='_blank' className='menu-item media-icon'><FaLinkedinIn /></a>
                <a href='https://github.com/Janaina-MJ' target='_blank' className='menu-item media-icon'><FaGithub /></a>
                </li>
            </ul>
        </nav>
    </StyledMenu>
  )
}