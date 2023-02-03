import { styled } from "stitches.config";

const Button = styled("button", {
  // default styles
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  all: "unset",
  outlineColor: "transparent",
  transition: "all 0.2s ease-in-out",
  fontFamily: "$body",
  variants: {
    variant: {
      primary: {
        bg: "$primary",
        color: "$white",
        "&:hover": {
          bg: "$primaryHover",
        },
        br: "$pill",
      },
    },
    size: {
      sm: {
        fontSize: "$2",
        px: "$1",
        py: "$2",
        fontWeight: "$5",
      },
      md: {
        fontSize: "$3",
        py: "$2",
        px: "$3",
        fontWeight: "$7",
      },
      lg: {
        fontSize: "$3",
        py: "$4",
        px: "$6",
        fontWeight: "$7",
      },
    },
    outline: {
      true: {
        boxShadow: "inset 0 0 0 1px $colors$primary",
      },
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      outline: true,
      css: {
        color: "$primary",
        bg: "transparent",
        "&:hover": {
          backgroundColor: "$primary",
          color: "$white",
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
export default Button;
