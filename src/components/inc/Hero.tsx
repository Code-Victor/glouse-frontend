import React from "react";
import { Grid, Stack, Flex, Text, Box, Button } from "../base";
import DisplayImage from "./DisplayImage";
import convenience from "@public/images/convenience.png";
import PricesSlide from "./PricesSlide";
import { motion } from "framer-motion";
import { variants, transitions, deliveryTime } from "@/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Flex
        css={{
          mt: "$20",
          mb: "$10",
          "@md": {
            height: "80vh",
            maxH: 1280,
            overflow: "hidden",
          },
        }}
        fd="column"
        jc="between"
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
            height: "100%",
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
            viewport={{
              once: true,
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
              "@lg": { maxW: 650, "$$initial-y": "0", "$$initial-x": "-200px" },
            }}
          >
            <Text
              ta={{ "@initial": "center", "@lg": "left" }}
              as="h1"
              fontFamily="heading"
              fontWeight="7"
              fontSize={{ "@initial": "7", "@md": "8", "@lg": "9", "@xl": 12 }}
            >
              <Text color="primary">Do laundry</Text> the stress free way
            </Text>
            <Text
              as="p"
              ta={{ "@initial": "center", "@lg": "left" }}
              fontSize={3}
            >
              {`Focus on the things that truly matter while we sort out all your
              laundry needs in less than ${deliveryTime} hours.`}
            </Text>
            <Flex gap="2" jc={{ "@initial": "center", "@lg": "start" }}>
              <Button
                variant="primary"
                size={{ "@initial": "sm", "@lg": "md" }}
                href="/pricing"
                as={Link}
              >
                Request pickup
              </Button>
              <Button
                variant="primary"
                outline
                size={{ "@initial": "sm", "@lg": "md" }}
                as="a"
                href="#how-it-works"
              >
                How it works
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
            viewport={{
              once: true,
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
              "$$initial-y": "100px",
              "$$initial-x": "0",
              "@xs": { minWidth: 320, maxWidth: 500 },
              "@md": { minWidth: 450, maxWidth: 600 },
              "@lg": { maxW: 660, "$$initial-y": "0", "$$initial-x": "200px" },
              position: "relative",
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
      </Flex>
      <PricesSlide />
    </>
  );
};

export default Hero;
