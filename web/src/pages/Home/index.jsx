import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/Theme.styled';
import { GlobalStyles } from '../../styles/Global.styled';

export function Home() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />

        <div className='container'>
          
        </div>
      </>
    </ThemeProvider>
  )
}
