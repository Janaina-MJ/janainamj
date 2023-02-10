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
            <section className='main-sections introduction-section'>
              <Introduction />
            </section>

            <section className='main-sections'>
              <Projects />
            </section>

            <section className='main-sections'>
              <About />
            </section>

            <section className='main-sections'>
              <Skills />
            </section>

            <section className='main-sections'>
              <ContactMe />
            </section>
          </main>
          
        </StyledContainer>
      </>
    </ThemeProvider>
  )
}
