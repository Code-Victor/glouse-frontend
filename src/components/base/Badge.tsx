import * as React from "react";
import { styled, keyframes } from "stitches.config";

const ping = keyframes({
  "0%": {
    transform: "scale(1)",
    opacity: 1,
  },
  "75%": {
    transform: "scale(2)",
    opacity: 0,
  },
  "100%": {
    transform: "scale(2.5)",
    opacity: 0,
  },
});

const Badge = styled("div", {
  // Reset
  //   boxSizing: "content-box",

  color: "$$text",
  bg: "$$bg",
  position: "relative",
  br: "$pill",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    animation: "$$animation",
    zIndex: -1,
    bg: "$$bg",
    br: "$pill",
  },
  variants: {
    size: {
      sm: {
        size: "$5",
        fontSize: "$2",
      },
      md: {
        size: "$6",
        fontSize: "$3",
      },
      lg: {
        size: "$7",
        fontSize: "$4",
      },
    },
    color: {
      primary: {
        $$text: "$colors$white",
        $$bg: "$colors$primary",
      },
      white: {
        $$bg: "$colors$white",
        $$text: "$colors$primary",
      },
    },
    ping: {
      true: { $$animation: `${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite` },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});

export default Badge;
