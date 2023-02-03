import React from "react";
import Head from "next/head";
import { Box, Text } from "@/components/base";
import Button from "@/components/base/Button";
import { styled } from "@stitches/react";
import PriceCard from "@/components/inc/PriceCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Glouse</title>
        <meta name="description" content="The ultimate convinience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box pd="4">
        <h1 style={{ fontFamily: "var(--fonts-heading)" }}>Hello world</h1>
      </Box>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veniam.
      </Text>
      <Button size="lg">Request pickup</Button>
      <Button outline>Hello</Button>
      <PriceCard>jey</PriceCard>
    </>
  );
}
