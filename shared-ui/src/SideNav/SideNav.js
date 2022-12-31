import { Text, useTheme } from 'evergreen-ui'
import { useRouter } from 'next/router'
import ThemeProvider from '../ThemeProvider/ThemeProvider'

export default function SideNav() {
  const { pathname } = useRouter()
  const { colors } = useTheme()

  return (
    <ThemeProvider>
      <Text color={colors.red100}>SideNav. Current path: {pathname}</Text>
    </ThemeProvider>
  )
}
