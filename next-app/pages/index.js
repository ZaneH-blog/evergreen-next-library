import { Layout } from '@my-org/my-custom-ui'
import { majorScale, Pane, Text, useTheme } from 'evergreen-ui'

export default function Home() {
  const { colors } = useTheme()
  return (
    <Layout title="Home Page">
      <Pane padding={majorScale(12)} background={colors.dark}>
        <Text color="white">Next.js Content</Text>
      </Pane>
    </Layout>
  )
}
