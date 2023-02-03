import { styled } from "stitches.config";

const PriceCard = styled("div", {
  $$border: "$colors$primary",
  include: "box",
  boxShadow: "0 0 0 1px $$border",
  variants: {
    direction: {
      left: {
        br: "0 $2 0",
      },
      right: {
        br: "$2 0 0",
      },
    },
  },
});
export default PriceCard;
