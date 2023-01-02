import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme.styled';
import { GlobalStyles } from '../../styles/Global.styled';
import { Background } from '../../components/Background';
import { StyledContainer } from './Home.styled';
import { Menu } from '../../components/Menu';
import { MenuMobile } from '../../components/MenuMobile';
import { Introduction } from '../../components/Introduction';
import { About } from '../../components/About';

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
            <section className='main-sections'>
              <Introduction />
            </section>

            <section className='main-sections'>
              <About />
            </section>

            <section className='main-sections'>

            </section>

            <section className='main-sections'>

            </section>

            <section className='main-sections'>
            </section>
          </main>
          
        </StyledContainer>
      </>
    </ThemeProvider>
  )
}
