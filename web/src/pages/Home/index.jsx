import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme.styled';
import { GlobalStyles } from '../../styles/Global.styled';
import { Background } from '../../components/Background';
import { StyledContainer } from './Home.styled';
import { Menu } from '../../components/Menu';
import { MenuMobile } from '../../components/MenuMobile';
import { Introduction } from '../../components/Introduction';
import { About } from '../../components/About';
import { Projects } from '../../components/Portfolio';
import { Skills } from '../../components/Skills';
import { ContactMe } from '../../components/ContactMe';
import { Footer } from '../../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export function Home() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  }, []);

  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <Background />

        <StyledContainer>

          <header>
            <Menu />
            <MenuMobile />
          </header>

          <main>
            <section id='introduction' className='main-sections introduction-section' data-aos='fade-up'>
              <Introduction />
            </section>

            <section id='projects' className='main-sections'>
              <Projects />
            </section>

            <section id='about' className='main-sections'>
              <About />
            </section>

            <section id='skills' className='main-sections'>
              <Skills />
            </section>

            <section id='contact' className='main-sections'>
              <ContactMe />
            </section>
          </main>

          <footer>
            <Footer />
          </footer>
          
          
        </StyledContainer>
      </>
    </ThemeProvider>
  )
}
