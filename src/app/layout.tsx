import "@/styles/main.scss";
import "@/styles/fonts.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-poppins',
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

const GOOGLE_TAG_MANAGER_ID = "GTM-5MLS8J3";

export const metadata: Metadata = {
  metadataBase: new URL('https://raphaelramos.dev'),
  title: {
    default: 'Raphael Ramos | Arquiteto de Soluções e Desenvolvedor Full Stack',
    template: '%s | Raphael Ramos'
  },
  description: 'Portfolio de Raphael Ramos, especialista em desenvolvimento web, mobile e cloud.',
  authors: [{ name: 'Raphael Ramos' }],
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/img/favicon.ico',
    shortcut: '/img/favicon.ico',
    apple: '/img/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://raphaelramos.dev',
    siteName: 'Raphael Ramos',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${inter.className}`}>
        <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
        <Cursor />
        <LoadingScreen />
        <main>
          {children}
        </main>
        <ScrollToTop />
        
        {/* Scripts */}
        <Script
          strategy="beforeInteractive"
          id="splitting"
          src="/js/splitting.min.js"
        />
        <Script id="simpleParallax" src="/js/simpleParallax.min.js" />
        <Script
          id="isotope"
          strategy="beforeInteractive"
          src="/js/isotope.pkgd.min.js"
        />
        <Script id="wow" src="/js/wow.min.js" />
        <Script id="wowInit" strategy="lazyOnload">
          {`new WOW().init();`}
        </Script>
      </body>
    </html>
  );
}
