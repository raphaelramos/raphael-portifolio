import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="Raphael Ramos" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link rel="manifest" href="/manifest.webmanifest"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
          <Script
            strategy="beforeInteractive"
            id="splitting"
            src="/js/splitting.min.js"
          ></Script>
          <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
          <Script
            id="isotope"
            strategy="beforeInteractive"
            src="/js/isotope.pkgd.min.js"
          ></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
