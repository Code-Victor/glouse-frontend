import type { AppProps } from "next/app";
import { jakartaSans, satoshi } from "stitches.config";
import { Navbar, Footer } from "@/components/inc";
import Head from "next/head";
import { DefaultSeo, NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${jakartaSans.variable} ${satoshi.variable}`}
      style={{ overflow: "hidden" }}
    >
      <DefaultSeo
        titleTemplate="Glouse: %s"
        defaultTitle="Glouse: do laundry the stress free way"
        description="Focus on the things that truly matter while we sort out all your laundry needs in less than 24 hours."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://useglouse.com",
          site_name: "Glouse",
        }}
        twitter={{
          handle: "@useglouse",
          site: "@useglouse",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
