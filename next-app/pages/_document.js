import { extractStyles } from 'evergreen-ui'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const page = await ctx.renderPage()
      const initialProps = await Document.getInitialProps(ctx)
      const { css, hydrationScript } = extractStyles()
      return {
        ...initialProps,
        ...page,
        css,
        hydrationScript,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const { css, hydrationScript } = this.props

    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          {hydrationScript}
          <NextScript />
        </body>
      </Html>
    )
  }
}
