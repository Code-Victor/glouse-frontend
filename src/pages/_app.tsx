import type { AppProps } from "next/app";
import { jakartaSans, satoshi } from "stitches.config";
import { Navbar, Footer } from "@/components/inc";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${jakartaSans.variable} ${satoshi.variable}`}
      style={{ overflow: "hidden" }}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
