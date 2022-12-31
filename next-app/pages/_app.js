import '../styles/globals.css'
import { UITheme } from '@my-org/my-custom-ui'
import { defaultTheme, ThemeProvider, mergeTheme } from 'evergreen-ui'

// Merge our shared theme with the default theme
const myTheme = mergeTheme(defaultTheme, UITheme)

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider value={myTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
