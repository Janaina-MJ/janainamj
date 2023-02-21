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

export function Home() {
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
            <section id='introduction' className='main-sections introduction-section'>
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
