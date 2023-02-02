import type { AppProps } from "next/app";
import { jakartaSans, satoshi } from "stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jakartaSans.variable} ${satoshi.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
