import { styled } from "stitches.config";

const Button = styled("button", {
  // default styles
  margin: 0,
  padding: 0,
  all: "unset",
  outlineColor: "transparent",
  transition: "all 0.2s ease-in-out",
  fontFamily: "$body",
  cursor: "pointer",
  "&:active": {
    transform: "scale(0.95)",
    transformOrigin: "center center",
  },
  "&:focus": {
    outline: "1px solid black",
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    "&:active": {
      transform: "none",
    },
  },
  variants: {
    radius: {
      none: {
        borderRadius: 0,
      },
      square: {
        br: "$2",
      },
      pill: {
        br: "$pill",
      },
    },
    variant: {
      primary: {
        bg: "$primary",
        color: "$white",
        "&:hover": {
          bg: "$primaryHover",
        },
      },
      white: {
        bg: "$white",
        color: "$dark",
        "&:hover": {
          bg: "gainsboro",
        },
      },
    },
    size: {
      xs: {
        fontSize: "$2",
        px: "$4",
        py: "$2",
        fontWeight: "$5",
      },
      sm: {
        fontSize: "$2",
        px: "$5",
        py: "$3",
        fontWeight: "$5",
      },
      md: {
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
    fullWidth: {
      true: {
        // display: "block",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "center",
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
    radius: "pill",
  },
});
Button.displayName = "Button";
export default Button;
