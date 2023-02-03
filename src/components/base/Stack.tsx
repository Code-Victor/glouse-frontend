import { createScaleVariant, styled } from "stitches.config";

const Stack = styled("div", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  variants: {
    direction: {
      row: {
        spaceX: "$$space",
      },
      column: {
        spaceY: "$$space",
      },
    },
    gap: createScaleVariant("space", (value) => ({
      $$space: value,
    })),
    negative: {
      true: {},
    },
  },
  compoundVariants: [
    {
      direction: "row",
      negative: true,
      css: {
        spaceX: "-$$space",
      },
    },
    {
      direction: "column",
      negative: true,
      css: {
        spaceY: "-$$space",
      },
    },
  ],
  defaultVariants: {
    direction: "column",
  },
});

Stack.displayName = "Stack";
export default Stack;
