import { WaterMark } from "./WaterMark";
import React from "react";
import { Box, Grid, Stack } from "../base";
import { StaticImageData } from "next/image";
import { DisplayImage } from "@/components/inc";

interface SectionProps {
  children: React.ReactNode;
  position: "left" | "right";
  bg: "primary" | "white";
  image: StaticImageData;
  alt: string;
  shape: "round" | "square";
}
function Section({ bg, position, children, image, alt }: SectionProps) {
  const left = position === "left";
  return (
    <Box bg={bg} css={{ position: "relative" }} mt={4}>
      <WaterMark
        css={
          bg === "white"
            ? {
              opacity: 0.3,
            }
            : {}
        }
        position={position}
        bg={bg}
      />
      <Grid
        columns={{ "@initial": 1, "@lg": 4, "@xl": 5 }}
        ai="center"
        gap="2"
        mx="auto"
        px="5"
        container
        py="20"
        css={{
          "@lg": {
            "&>*:nth-child(1)": {
              gridColumn: "span 2",
              order: left ? 1 : 2,
            },
            "&>*:nth-child(2)": {
              gridColumn: "span 2",
              order: !left ? 1 : 2,
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
            "& h2, p": {
              maxW: 640,
            },
          }}
        >
          {children}
        </Stack>
        <Box
          css={{
            justifySelf: "center",
            minWidth: 300,
            "@md": { minWidth: 500 },
          }}
        >
          <DisplayImage
            color={bg == "primary" ? "white" : "primary"}
            size={"lg"}
            src={image}
            alt={alt}
          />
        </Box>
      </Grid>
    </Box>
  );
}

export default Section;
