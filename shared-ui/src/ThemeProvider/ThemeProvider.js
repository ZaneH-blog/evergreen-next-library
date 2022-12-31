import { UITheme } from '../Theme'
import {
  defaultTheme,
  mergeTheme,
  ThemeProvider as EvergreenTP,
} from 'evergreen-ui'

const myTheme = mergeTheme(defaultTheme, UITheme)

export default function ThemeProvider({ children }) {
  return <EvergreenTP value={myTheme}>{children}</EvergreenTP>
}
