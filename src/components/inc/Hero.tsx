import React from "react";
import { Grid, Stack, Flex, Text, Box, Button } from "../base";
import DisplayImage from "./DisplayImage";
import convenience from "@public/images/convenience.png";
import Prices from "./Prices";

const Hero = () => {
  return (
    <Flex
      css={{
        minH: "85vh",
      }}
      fd="column"
      jc="between"
      gap="10"
    >
      <Grid
        columns={{ "@initial": 1, "@lg": 4, "@xl": 5 }}
        gap={{ "@initial": 5, lg: 2 }}
        pt={8}
        container
        px="5"
        mx="auto"
        ai="center"
        css={{
          "@lg": {
            "&>*:nth-child(1)": {
              gridColumn: "span 2",
            },
            "&>*:nth-child(2)": {
              gridColumn: "span 2",
            },
          },
          "@xl": {
            "&>*:nth-child(1)": {
              gridColumn: "span 3",
            },
          },
        }}
      >
        <Stack gap="6" css={{ "@lg": { maxW: 660 } }}>
          <Text
            ta={{ "@initial": "center", "@lg": "left" }}
            as="h1"
            fontSize={{ "@initial": "7", "@sm": "8", "@lg": "11" }}
            fontFamily="heading"
            fontWeight="7"
          >
            The <Text color="primary">ultimate convenience;</Text> Spend{" "}
            <Text color="primary" css={{ fontStyle: "italic" }}>
              zero
            </Text>{" "}
            time on laundry,
            <Text color="primary"> more on life!</Text>
          </Text>
          <Text
            as="p"
            ta={{ "@initial": "center", "@lg": "left" }}
            fontSize={{ "@initial": "4", "@lg": "5" }}
          >
            Your weekends should be for you, and your family, not for dirty
            clothes. Rest, have fun, we will clean your dirty laundry.
          </Text>
          <Flex gap="2" jc={{ "@initial": "center", "@lg": "start" }}>
            <Button variant="primary" size={{ "@initial": "sm", "@lg": "md" }}>
              Request pickup
            </Button>
            <Button
              variant="primary"
              outline
              size={{ "@initial": "sm", "@lg": "md" }}
            >
              View All Prices
            </Button>
          </Flex>
        </Stack>
        <Box
          css={{
            justifySelf: "center",
            minWidth: 300,
            "@md": { minWidth: 500 },
          }}
        >
          <DisplayImage
            src={convenience}
            alt="ultimate convenience"
            priority
            quality={100}
            css={{}}
          />
        </Box>
      </Grid>
      <Prices />
    </Flex>
  );
};

export default Hero;
