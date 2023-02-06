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
      $$space: "$space" + value,
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
    gap: "3",
  },
});

Stack.displayName = "Stack";
export default Stack;
