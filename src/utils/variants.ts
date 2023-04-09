import { createScaleVariant, css } from "stitches.config";

const sizeVariants = css({
  variants: {
    w: createScaleVariant("sizes", (value) => ({
      w: value,
    })),
    h: createScaleVariant("sizes", (value) => ({
      h: value,
    })),
    size: createScaleVariant("sizes", (value) => ({
      size: value,
    })),
  },
});

const paddingVariants = css({
  variants: {
    pd: createScaleVariant("space", (value) => ({
      pd: value,
    })),
    pl: createScaleVariant("space", (value) => ({
      pl: value,
    })),
    pr: createScaleVariant("space", (value) => ({
      pr: value,
    })),
    pt: createScaleVariant("space", (value) => ({
      pt: value,
    })),
    pb: createScaleVariant("space", (value) => ({
      pb: value,
    })),
    px: createScaleVariant("space", (value) => ({
      px: value,
    })),
    py: createScaleVariant("space", (value) => ({
      py: value,
    })),
  },
});
const marginVariants = css({
  variants: {
    m: createScaleVariant("space", (value) => ({
      m: value,
    })),
    ml: createScaleVariant("space", (value) => ({
      ml: value,
    })),
    mr: createScaleVariant("space", (value) => ({
      mr: value,
    })),
    mt: createScaleVariant("space", (value) => ({
      mt: value,
    })),
    mb: createScaleVariant("space", (value) => ({
      mb: value,
    })),
    mx: {
      auto: { mx: "auto" },
      ...createScaleVariant("space", (value) => ({
        mx: value,
      })),
    },
    my: createScaleVariant("space", (value) => ({
      my: value,
    })),
  },
});

const colorVariants = css({
  variants: {
    color: createScaleVariant("colors", (value) => ({
      color: value,
    })),
    bg: createScaleVariant("colors", (value) => ({
      bg: value,
    })),
  },
});

const radiiVariants = css({
  variants: {
    br: {
      none: {
        br: 0,
      },
      ...createScaleVariant("radii", (value) => ({
        br: value,
      })),
    },
  },
});

const flexGapVariants = css({
  variants: {
    gap: createScaleVariant("space", (value) => ({
      gap: value,
      "@supports not (gap: 1px)": {
        ml: `-${value}`,
        mt: `-${value}`,
        "& > * ": {
          ml: value,
          mt: value,
        },
      },
    })),
  },
});
const gridGapVariants = css({
  variants: {
    rowGap: createScaleVariant("space", (value) => ({
      rowGap: value,
      "@supports not (gap: 1px)": {
        mt: `-${value}`,
        "& > * ": {
          mt: value,
        },
      },
    })),
    columnGap: createScaleVariant("space", (value) => ({
      rowGap: value,
      "@supports not (gap: 1px)": {
        ml: `-${value}`,
        "& > * ": {
          ml: value,
        },
      },
    })),
  },
});

export {
  sizeVariants,
  paddingVariants,
  marginVariants,
  radiiVariants,
  colorVariants,
  flexGapVariants,
  gridGapVariants,
};
