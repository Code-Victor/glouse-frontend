import Image from "next/image";
import React from "react";
import { Box, Button, Grid, Stack, Text, Flex } from "../base";
import { WaterMark } from "./WaterMark";
import clothes from "@public/images/clothes.png";
import { styled, css } from "stitches.config";
import { steps } from "@/constants";
import { motion, useInView } from "framer-motion";

function Speed() {
  return (
    <Box
      css={{
        position: "relative",
      }}
      mt="7"
      id="how-it-works"
    >
      <Grid
        columns={{ "@initial": 1, "@lg": 4, "@xl": 5 }}
        gap={{ "@initial": 8, "@lg": 4 }}
        py={{ "@initial": 8, "@md": 12 }}
        container
        px="5"
        mx="auto"
        ai="center"
        className={speedGrid()}
      >
        <div>
          <motion.div
            initial={{
              clipPath: "polygon(0px 0px, 0% 0px, 0% 100%, 0px 100%)",
              opacity: 0,
            }}
            whileInView={{
              clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)",
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            style={{
              justifySelf: "center",
              maxWidth: "100%",
            }}
          >
            <Image
              src={clothes}
              alt="speed"
              style={{
                width: "100%",
              }}
            />
          </motion.div>
        </div>
        <Stack css={{ maxW: 740 }} gap="8">
          <Text
            // as="h2"
            as={motion.h2}
            initial={{
              opacity: 0,
              y: "var(---initial-y)",
              x: "var(---initial-x)",
            }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1 }}
            css={{
              "$$initial-y": "100px",
              "$$initial-x": "0",
              "@lg": {
                "$$initial-y": "0",
                "$$initial-x": "300px",
              },
              overflow: "hidden",
            }}
            fontSize={{ "@initial": "7", "@md": "8", "@lg": "9" }}
            fontFamily="heading"
            fontWeight={{ "@initial": "7" }}
            color="primary"
            ta={{ "@initial": "center", "@lg": "left" }}
          >
            How it works
          </Text>
          <Box>
            {steps.map((step, index) => {
              const props = {
                ...step,
                index,
                last: index == steps.length - 1,
              };
              return <Step {...props} key={step.title} />;
            })}
          </Box>
        </Stack>
        <Flex ai="center" jc="center" py="4" css={{ width: "100%" }}>
          <Button size={{ "@initial": "sm", "@lg": "md" }}>
            Request Pickup
          </Button>
        </Flex>
      </Grid>
      <WaterMark css={{ opacity: 0.3 }} position="right" bg="white" />
    </Box>
  );
}

export default Speed;

const speedGrid = css({
  "&>img": {
    width: "80%",
    height: "auto",
  },
  "&>*:nth-child(1)": {
    order: 2,
  },
  "&>*:nth-child(2)": {
    order: 1,
  },
  "&>*:nth-child(3)": {
    order: 3,
  },
  "@lg": {
    "&>*:nth-child(1)": {
      gridColumn: "span 2",
      order: 1,
    },
    "&>*:nth-child(2)": {
      gridColumn: "span 2",
      order: 2,
    },
    "&>*:nth-child(3)": {
      gridColumn: "span 4",
    },
  },
  "@xl": {
    "&>*:nth-child(2)": {
      gridColumn: "span 3",
    },
    "&>*:nth-child(3)": {
      gridColumn: "span 5",
    },
  },
});

const Line = styled("div", {
  width: 0,
  borderLeft: "2px solid $colors$primary",
  transform: "translateX(50%)",
});

function Step({
  title,
  paragraph,
  last,
  index,
}: {
  title: string;
  index: number;
  paragraph: string;
  last: boolean;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(scrollRef, { amount: 0.8 });
  return (
    <Grid
      ref={scrollRef}
      css={{
        gridTemplateColumns: "60px 1fr",
        fontFamily: "$body",
      }}
    >
      <Flex fd="column" ai="center" gap="1">
        <Text
          fontSize="6"
          fontWeight="9"
          as={motion.span}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView && { scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          0{index + 1}
        </Text>
        {!last && (
          <Line
            as={motion.div}
            initial={{ flex: 0 }}
            animate={inView && { flex: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        )}
      </Flex>
      <Stack gap="2">
        <Text
          fontWeight="7"
          fontSize="5"
          color="dark"
          as={motion.h3}
          initial={{ x: "50%", opacity: 0 }}
          animate={inView && { x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {title}
        </Text>
        <Text
          as={motion.p}
          initial={{ opacity: 0, x: "30%" }}
          animate={inView && { opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          css={{ mb: last ? 0 : "$14" }}
        >
          {paragraph}
        </Text>
      </Stack>
    </Grid>
  );
}
