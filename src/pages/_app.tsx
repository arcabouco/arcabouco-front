import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { theme } from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../Context/Auth'
import { ScreenProvider } from '../Context/Scheen'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />

          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
        <ToastContainer />
      </AuthProvider>
    </ScreenProvider>
  )
}

export default MyApp
