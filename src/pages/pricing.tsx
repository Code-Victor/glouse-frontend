import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Box, Text, Flex } from "@/components/base";
import { seo } from "@/utils";

import PriceCaculator from "@/components/inc/PriceCaculator";

const Pricing = () => {
  return (
    <Box>
      <Head>
        {seo(
          "Glouse: pricing plans",
          "Get the best quality laundry done without breaking the bank.",
          "https://useglouse.com",
          "https://useglouse.com/images/seo.png"
        )}
      </Head>
      <Flex
        fd="column"
        jc="center"
        css={{
          position: "relative",
          mt: "$20",
          height: 230,
          px: "$4",
          color: "$white",
          spaceY: "$4",
          "& img": {
            objectFit: "cover",
            zIndex: -2,
            m: 0,
          },
          "@md": {
            height: 460,
          },
        }}
      >
        <Box
          css={{
            backgroundColor: "rgba(0, 148, 229, 0.7)",
            position: "absolute",
            inset: 0,
            zIndex: -1,
          }}
        />
        <Image src="/images/hanger.png" alt="dry cleaned clothes" fill />
        <Text
          as="h1"
          ta="center"
          fontSize={{ "@initial": 7, "@md": 10 }}
          fontWeight={{ "@initial": "6", "@md": "7" }}
        >
          Checkout the best price you can ever get
        </Text>
        <Text as="p" ta="center" fontSize="6">
          Take a look at our pricing options for the one that best suits your
          needs.
        </Text>
      </Flex>
      <PriceCaculator />
    </Box>
  );
};

export default Pricing;
