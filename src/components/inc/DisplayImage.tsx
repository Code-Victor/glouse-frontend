import Image, { ImageProps } from "next/image";
import React from "react";
import { styled } from "stitches.config";
import { Box } from "../base";
import { motion } from "framer-motion";

function BareDisplayImage({
  className,
  position,
  ...props
}: ImageProps & { className?: string; position: "left" | "right" }) {
  const right = position === "right";
  return (
    <Box className={className}>
      <Box
        as={motion.div}
        initial={{
          top: 0,
          left: 0,
        }}
        whileInView={{
          top: "var(---offset)",
          left: right ? "var(---offset)" : "calc(-1 * var(---offset))",
          transition: {
            delay: 2,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        css={{
          $$offset: "7px",
          content: "''",
          position: "absolute",
          width: "$$width",
          maxWidth: "$$maxWidth",
          aspectRatio: "1/1",
          bg: "$$color",
          zIndex: -1,
          "@md": {
            $$offset: "14px",
          },
        }}
      />
      <Image {...props} />
    </Box>
  );
}
const DisplayImage = styled(BareDisplayImage, {
  //   aspectRatio: "1/1",
  position: "relative",
  isolation: "isolate",
  "& > img": {
    width: "$$width",
    maxWidth: "$$maxWidth",
    height: "unset",
    aspectRatio: "1/1",
    objectFit: "cover",
  },
  variants: {
    size: {
      md: {
        $$width: "80%",
        $$maxWidth: "450px",
        //give a shorthand for minWidth and width
      },
      lg: {
        $$width: "100%",
        $$maxWidth: "600px",
      },
    },
    color: {
      primary: {
        $$color: "$colors$primary",
      },
      white: {
        $$color: "$colors$white",
      },
    },
  },
  defaultVariants: {
    size: "lg",
    color: "primary",
  },
});

export default DisplayImage;
