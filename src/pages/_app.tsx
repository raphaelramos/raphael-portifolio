import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor />
      <LoadingScreen />
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}
