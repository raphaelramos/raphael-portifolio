import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/script";

const GOOGLE_TAG_MANAGER_ID = process.env.DEVTO_APIKEY;

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
        <Head />
        <title>Raphael Ramos</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Portifólio do Desenvolvedor Raphael Ramos. Node, Angular, React e mais"
        />
        <meta name="author" content="Raphael Ramos" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest"></link>

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
          {GOOGLE_TAG_MANAGER_ID && (
            <Script id="google-tag-manager" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
              `}
            </Script>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
