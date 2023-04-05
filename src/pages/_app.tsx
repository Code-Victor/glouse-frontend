import type { AppProps } from "next/app";
import { jakartaSans, satoshi } from "stitches.config";
import { Navbar, Footer } from "@/components/inc";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${jakartaSans.variable} ${satoshi.variable}`}
      style={{ overflow: "hidden" }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
