import { colorVariants, fontVariants } from "@/utils/variants";
import { styled } from "stitches.config";

const Text = styled("p", fontVariants, colorVariants, {
  // default styles
  margin: 0,
  padding: 0,
});

Text.displayName = "Text";
export default Text;
