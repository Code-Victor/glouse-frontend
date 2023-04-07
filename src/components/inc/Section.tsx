import { WaterMark } from "./WaterMark";
import React from "react";
import { Box, Grid, Stack } from "../base";
import { StaticImageData } from "next/image";
import { DisplayImage } from "@/components/inc";
import { motion, useInView } from "framer-motion";
import { transitions } from "@/constants";

interface SectionProps {
  children: React.ReactNode;
  position: "reverse" | "normal"; //reverse is the text is before the image.
  bg: "primary" | "white";
  image: StaticImageData;
  alt: string;
  shape: "round" | "square";
}
function Section({ bg, position, children, image, alt }: SectionProps) {
  const reverse = position === "reverse";
  const boxRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(boxRef, { amount: 0.5 });
  return (
    <Box bg={bg} css={{ position: "relative", overflow: "hidden" }} mt={4}>
      <WaterMark
        css={
          bg === "white"
            ? {
              opacity: 0.3,
            }
            : {}
        }
        position={reverse ? "left" : "right"}
        bg={bg}
      />
      <Grid
        ref={boxRef}
        columns={{ "@initial": 1, "@lg": 4, "@xl": 5 }}
        ai="center"
        gap={{ "@initial": 6, "@md": 4 }}
        mx="auto"
        px="5"
        container
        py={{ "@initial": 12, "@lg": 20 }}
        css={{
          "@lg": {
            "&>*:nth-child(1)": {
              gridColumn: "span 2",
              order: reverse ? 1 : 2,
            },
            "&>*:nth-child(2)": {
              gridColumn: "span 2",
              order: !reverse ? 1 : 2,
            },
          },
          "@xl": {
            "&>div:nth-child(1)": {
              gridColumn: "span 3",
              // gridRow: "1",
            },
          },
        }}
      >
        <Stack
          gap="3"
          css={{
            "$$initial-y": "100px",
            "$$initial-x": "0",
            "& h2, p": {
              maxW: 640,
            },
            "@lg": {
              "$$initial-y": "0",
              "$$initial-x": reverse ? "-200px" : "200px",
            },
          }}
          transition={transitions.main}
          as={motion.div}
          animate={
            inView
              ? {
                opacity: 1,
                y: 0,
                x: 0,
              }
              : {}
          }
          initial={{
            opacity: 0,
            y: "var(---initial-y)",
            x: "var(---initial-x)",
          }}
          custom={100}
        >
          {children}
        </Stack>
        <Box
          as={motion.div}
          animate={
            inView
              ? {
                opacity: 1,
                x: 0,
                y: 0,
              }
              : {}
          }
          initial={{
            opacity: 0,
            x: "var(---initial-x)",
            y: "var(---initial-y)",
          }}
          transition={{ delay: 1, ...transitions.main }}
          css={{
            "$$initial-y": "100px",
            "$$initial-x": "0",
            "@lg": {
              "$$initial-y": "0",
              "$$initial-x": reverse ? "200px" : "-200px",
            },
            // minWidth: 300,
            justifySelf: "center",
            "@xs": { minWidth: 320 },
            "@md": { minWidth: 500 },
          }}
        >
          <DisplayImage
            color={bg == "primary" ? "white" : "primary"}
            size={"lg"}
            src={image}
            alt={alt}
            position={reverse ? "right" : "left"}
          />
        </Box>
      </Grid>
    </Box>
  );
}

export default Section;
