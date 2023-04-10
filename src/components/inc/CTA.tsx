import React from "react";
import { Box, Flex, Text } from "../base";
import { GetStartedButton } from "./Navbar";
import { motion } from "framer-motion";

const ctaText = "Save Money, Save Time";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function CTA() {
  return (
    <Box container mx="auto">
      <Flex
        fd="column"
        ai="center"
        gap="7"
        py={{ "@initial": 9, "@lg": 16 }}
        px="5"
        my={{ "@initial": 0, "@sm": 9, "@lg": 12 }}
        br={{ "@initial": "none", "@sm": "6" }}
        css={{
          bg: "$secondary",
          position: "relative",
          overflow: "hidden",
          "& h1,p": {
            maxWidth: 780,
            color: "$white",
          },
          isolation: "isolate",
          "@sm": {
            boxShadow: "0px 4px 74px rgba(35, 31, 32, 0.3)",
          },
        }}
      >
        <Text
          ta="center"
          as={motion.h1}
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          fontSize={{ "@initial": "7", "@sm": "8", "@lg": "11" }}
          fontFamily="heading"
          fontWeight={{ "@initial": "7" }}
          viewport={{
            once: true,
          }}
        >
          {ctaText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </Text>
        <Text
          as={motion.p}
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 2,
            duration: 0.4,
            ease: "easeInOut",
          }}
          ta="center"
        >
          From scheduling pickups and deliveries to tracking your order in
          real-time, our service offers a level of convenience that allows you
          to focus on the things that truly matter.
        </Text>
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 2.5,
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <GetStartedButton />
        </motion.div>
        <Box
          as="img"
          css={{
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: -1,
            w: 150,
            "@md": {
              w: "30%",
            },
            "@lg": {
              w: "35%",
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
              w: "10%",
            },
            "@lg": {
              w: "15%",
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
