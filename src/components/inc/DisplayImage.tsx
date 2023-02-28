import Image, { ImageProps } from "next/image";
import React from "react";
import { styled } from "stitches.config";
import { Box } from "../base";
import { motion } from "framer-motion";

function BareDisplayImage({
  className,
  ...props
}: ImageProps & { className?: string }) {
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
          left: "var(---offset)",
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
          width: "$$size",
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
    width: "$$size",
    height: "unset",
    aspectRatio: "1/1",
    objectFit: "cover",
  },
  variants: {
    size: {
      md: {
        $$size: "min(450px,80%)",
      },
      lg: {
        $$size: "min(100%,500px)",
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
