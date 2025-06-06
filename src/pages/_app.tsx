import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import { GoogleTagManager } from "@next/third-parties/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
      <Cursor />
      <LoadingScreen />
      <main className={`${inter.variable} ${poppins.variable} ${inter.className}`}>
        <Component {...pageProps} />
      </main>
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}
