import type { AppProps } from "next/app";
import { jakartaSans, satoshi } from "stitches.config";
import { Navbar, Footer } from "@/components/inc";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import CartProvider from "@/contexts/cart";
import { useRouter } from "next/router";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoader = router.pathname === "/loader";
  return (
    <CartProvider>
      <Toaster position="top-center" richColors />
      <div className={`${jakartaSans.variable} ${satoshi.variable}`}>
        <DefaultSeo
          titleTemplate="Glouse: %s"
          defaultTitle="Glouse: do laundry the stress free way"
          description="Focus on the things that truly matter while we sort out all your laundry needs in less than 24 hours."
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://useglouse.com",
            site_name: "Glouse",
            images: [
              {
                url: "https://useglouse.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Glouse banner image",
              },
            ],
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
        {!isLoader && <Navbar />}
        <Component {...pageProps} />
        {!isLoader && <Footer />}
      </div>
    </CartProvider>
  );
}
