import { styled } from "stitches.config";

export const H1 = styled("h1", {
  fontSize: 30,
  fontWeight: 700,
  lineHeight: "130%",
  "@md": {
    fontSize: 40,
  },
});

export const H2 = styled("h2", {
  fontSize: 24,
  lineHeight: "$6",
  fontFamily: "$inter",
  color: "$dark",
  "@md": {
    fontSize: 32,
  },
});

export const H3 = styled("h3", {
  fontSize: 18,
  lineHeight: "$6",
  fontFamily: "$inter",
  color: "$dark",
  "@md": {
    fontSize: 24,
  },
});

export const P = styled("p", {
  fontSize: 16,
  lineHeight: "$6",
  fontFamily: "$inter",
  color: "$dark",
});

export const Section = styled("section", {
  pt: 24,
});

export const Ul = styled("ul", {
  pl: 24,
  li: {
    mb: 4,
  },
});
