import Image, { ImageProps } from "next/image";
import React from "react";
import { styled } from "stitches.config";
import { Box } from "../base";

function BareDisplayImage({
  className,
  ...props
}: ImageProps & { className?: string }) {
  return (
    <Box className={className}>
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
  "&::after": {
    $$offset: "14px",
    content: "''",
    position: "absolute",
    bottom: "-$$offset",
    left: "$$offset",
    width: "$$size",
    aspectRatio: "1/1",
    bg: "$$color",
    zIndex: -1,
  },
  variants: {
    size: {
      md: {
        $$size: "min(450px,80%)",
      },
      lg: {
        $$size: "min(90%,500px)",
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
