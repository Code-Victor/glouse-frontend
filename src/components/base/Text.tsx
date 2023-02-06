import { colorVariants, fontVariants } from "@/utils/variants";
import { styled } from "stitches.config";

const Text = styled("span", fontVariants, colorVariants, {
  // default styles
  margin: 0,
  padding: 0,
  textDecoration: "none",
  variants: {
    ta: {
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
  },
});

Text.displayName = "Text";
export default Text;
