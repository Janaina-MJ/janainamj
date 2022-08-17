import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme.styled';
import { GlobalStyles } from '../../styles/Global.styled';
import { Background } from '../../components/Background';
import { StyledContainer } from './Home.styled';
import { Menu } from '../../components/Menu';
import { MenuMobile } from '../../components/MenuMobile';
import { Introduction } from '../../components/Introduction';

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
            <section className='home'>
              <Introduction />
            </section>

            <section className='about'>

            </section>

            <section className='projects'>

            </section>

            <section className='skills'>

            </section>

            <section className='contact'>
            </section>
          </main>
          
        </StyledContainer>
      </>
    </ThemeProvider>
  )
}
