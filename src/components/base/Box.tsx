import {
  colorVariants,
  marginVariants,
  radiiVariants,
  paddingVariants,
  sizeVariants,
} from "@/utils/variants";
import { styled } from "stitches.config";

const Box = styled(
  "div",
  sizeVariants,
  paddingVariants,
  marginVariants,
  radiiVariants,
  colorVariants,
  {
    // default styles
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    variants: {
      container: {
        true: {
          width: "100%",
          "@sm": {
            maxWidth: 640,
          },
          "@md": {
            maxWidth: 768,
          },
          "@lg": {
            maxWidth: 1024,
          },
          "@xl": {
            maxWidth: 1280,
          },
          "@2xl": {
            maxWidth: 1460,
          },
        },
      },
    },
  }
);

Box.displayName = "Box";
export default Box;
