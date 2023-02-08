import React from "react";
import Head from "next/head";
import {
  Navbar,
  Hero,
  Section,
  Speed,
  Footer,
  Customized,
  CTA,
} from "@/components/inc";
import { Box, Text } from "@/components/base";
import quality from "@public/images/quality.png";
import relax from "@public/images/relax.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Glouse</title>
        <meta name="description" content="The ultimate convinience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Speed />
      <Section
        shape="round"
        bg="primary"
        position="left"
        alt="quality"
        image={quality}
      >
        <Text
          as="h2"
          color="white"
          fontSize={{ "@initial": "7", "@sm": "8", "@md": "9" }}
          fontFamily="heading"
          fontWeight="7"
          ta={{ "@initial": "center", "@lg": "left" }}
        >
          <Text color="dark">Retain the quality</Text> of your favorite outfits
        </Text>
        <Text as="p" color="white" ta={{ "@initial": "center", "@lg": "left" }}>
          Quality laundry and dry cleaning, delivered with precision and care.
          Our processes are guaranteed to bring new life to your clothes.
        </Text>
      </Section>
      <Section
        shape="round"
        bg="white"
        position="right"
        alt="quality"
        image={relax}
      >
        <Text
          as="h2"
          color="primary"
          fontSize={{ "@initial": "7", "@sm": "8", "@md": "9" }}
          fontFamily="heading"
          fontWeight="7"
          ta={{ "@initial": "center", "@lg": "left" }}
        >
          <Text color="dark">Get your laundry done</Text> without leaving your
          couch
        </Text>
        <Text as="p" color="dark" ta={{ "@initial": "center", "@lg": "left" }}>
          Request pickup on your phone and we’ll be there in a jiffy! Request
          pickup on your phone and we’ll be there in a jiffy!Request pickup on
          your phone and we’ll be there in a jiffy!
        </Text>
      </Section>
      <Customized />
      <CTA />
      <Footer />
    </>
  );
}
