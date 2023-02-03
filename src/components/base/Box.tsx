import {
  colorVariants,
  marginVariants,
  paddingVariants,
  sizeVariants,
} from "@/utils/variants";
import { styled } from "stitches.config";

const Box = styled(
  "div",
  sizeVariants,
  paddingVariants,
  marginVariants,
  colorVariants,
  {
    // default styles
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  }
);

Box.displayName = "Box";
export default Box;
