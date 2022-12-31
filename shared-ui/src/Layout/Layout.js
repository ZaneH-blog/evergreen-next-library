import { Button, minorScale } from 'evergreen-ui'
import PropTypes from 'prop-types'
import { Head } from '../Head'
import { SideNav } from '../SideNav'
import ThemeProvider from '../ThemeProvider/ThemeProvider'

export default function Layout({ title, children }) {
  return (
    <ThemeProvider>
      <Head title={`Demo | ${title}`} />
      <SideNav />
      <Button appearance='primary' marginY={minorScale(6)}>
        Primary Button in Layout.js
      </Button>
      {children}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
}
