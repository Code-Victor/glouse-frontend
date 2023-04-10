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
    <Box css={{ overflow: "hidden" }}>
      <Hero />
      <Speed />
      <Section
        shape="round"
        bg="primary"
        position="reverse"
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
        position="normal"
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
          <Text color="dark">Your entire laundry cycle</Text> completed in 24
          hours!
        </Text>
        <Text as="p" color="dark" ta={{ "@initial": "center", "@lg": "left" }}>
          From pickups to drop-offs, we sort out all your laundry needs in just
          24 hours
        </Text>
      </Section>
      <Customized />
      <CTA />
    </Box>
  );
}
