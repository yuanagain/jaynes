import Document, { Html, Head, Main, NextScript } from 'next/document';

const globalStyles = `
`;

class Doc extends Document {
  // @ts-ignore
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico"></link>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
            integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
            crossOrigin="anonymous"
          />

          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="src/icons/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="src/icons/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="src/icons/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="src/icons/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="src/icons/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta property="og:title" content="Jaynes for days" />
          <meta
            property="og:description"
            content="Probability without infinity"
          />
          <meta
            property="og:image"
            content="src/icons/favicon/favicon-32x32.png"
          />
          <meta property="og:url" content="https://yuanagain.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Jaynes for days" />
          <meta name="twitter:image:alt" content="Alt text for image" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <style type="text/css">{globalStyles}</style>
        </Head>
        <body>
          <div id="modal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
