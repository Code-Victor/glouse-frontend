import { colorVariants } from "@/utils/variants";
import { createScaleVariant, styled } from "stitches.config";

const Text = styled("span", colorVariants, {
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
    fontSize: createScaleVariant("fontSizes", (value) => ({
      fontSize: value,
    })),
    fontWeight: createScaleVariant("fontWeights", (value) => ({
      fontWeight: value,
    })),
    fontFamily: createScaleVariant("fonts", (value) => ({
      fontFamily: value,
    })),
    lineHeight: createScaleVariant("lineHeights", (value) => ({
      lineHeight: value,
    })),
  },
});

Text.displayName = "Text";
export default Text;
