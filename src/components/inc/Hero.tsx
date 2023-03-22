import React from "react";
import { Grid, Stack, Flex, Text, Box, Button } from "../base";
import DisplayImage from "./DisplayImage";
import convenience from "@public/images/convenience.png";
import Prices from "./Prices";
import { motion } from "framer-motion";
import { variants, transitions } from "@/constants";

const Hero = () => {
  return (
    <Flex
      css={{
        minH: "85vh",
        mt: "$20",
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
        <Stack
          as={motion.div}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          initial={{
            opacity: 0,
            y: "var(---initial-y)",
            x: "var(---initial-x)",
          }}
          custom={100}
          transition={{ delay: 0.5, ...transitions.main }}
          gap="6"
          css={{
            "$$initial-y": "100px",
            "$$initial-x": "0",
            display: "block",
            "@lg": { maxW: 660, "$$initial-y": "0", "$$initial-x": "-200px" },
          }}
        >
          <Text
            ta={{ "@initial": "center", "@lg": "left" }}
            as="h1"
            fontFamily="heading"
            fontWeight="7"
            fontSize={{ "@initial": "7", "@lg": "8", "@2xl": "11" }}
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
            fontSize={3}
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
          as={motion.div}
          variants={variants}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          initial={{
            opacity: 0,
            x: "var(---initial-x)",
            y: "var(---initial-y)",
          }}
          custom={100}
          transition={{ delay: 1, ...transitions.main }}
          css={{
            justifySelf: "center",
            minWidth: 350,
            maxWidth: 500,
            "$$initial-y": "100px",
            "$$initial-x": "0",
            "@md": { minWidth: 450, maxWidth: 600 },
            "@lg": { maxW: 660, "$$initial-y": "0", "$$initial-x": "200px" },
          }}
        >
          <DisplayImage
            src={convenience}
            alt="ultimate convenience"
            priority
            quality={100}
            position={"right"}
            css={{}}
          />
        </Box>
      </Grid>
      <Prices />
    </Flex>
  );
};

export default Hero;
