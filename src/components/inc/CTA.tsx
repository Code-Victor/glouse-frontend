import React from "react";
import { Box, Flex, Text } from "../base";
import { GetStartedButton } from "./Navbar";

function CTA() {
  return (
    <Box container mx="auto">
      <Flex
        fd="column"
        ai="center"
        gap="7"
        py="16"
        px="5"
        my="12"
        br={{ "@initial": "none", "@lg": "6" }}
        css={{
          bg: "$secondary",
          position: "relative",
          overflow: "hidden",
          "& h1,p": {
            maxWidth: 840,
            color: "$white",
          },
          isolation: "isolate",
          "@lg": {
            boxShadow: "0px 4px 74px rgba(35, 31, 32, 0.3)",
          },
        }}
      >
        <Text
          ta="center"
          as="h1"
          fontSize={{ "@initial": "7", "@sm": "8", "@lg": "11" }}
          fontFamily="heading"
          fontWeight={{ "@initial": "7" }}
        >
          Get a fresh laundry experience and save time
        </Text>
        <Text as="p" ta="center">
          From scheduling pickups and deliveries to tracking your order in
          real-time, our service offers a level of convenience that allows you
          to focus on the things that truly matter.
        </Text>
        <GetStartedButton />
        <Box
          as="img"
          css={{
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: -1,
            w: 150,
            "@md": {
              w: "unset",
            },
          }}
          src="/images/abstract-1.png"
          alt="cta"
        />
        <Box
          as="img"
          css={{
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: -1,
            w: 100,
            "@md": {
              w: "unset",
            },
          }}
          src="/images/abstract-2.png"
          alt="cta"
        />
      </Flex>
    </Box>
  );
}

export default CTA;
