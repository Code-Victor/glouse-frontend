import {
  createStitches,
  PropertyValue,
  ScaleValue,
  CSS as StitchesCSS,
} from "@stitches/react";
import { Prefixed } from "@stitches/react/types/util";
import localFont from "@next/font/local";
import { getFontFamily } from "@/utils";
import { mixins } from "stitches-mixins";

export const jakartaSans = localFont({
  variable: "--JakartaSans",
  src: [
    {
      path: "src/fonts/jakarta-sans/PlusJakartaDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "src/fonts/jakarta-sans/PlusJakartaDisplay-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});
export const satoshi = localFont({
  variable: "--Satoshi",
  src: [
    {
      path: "src/fonts/satoshi/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "src/fonts/satoshi/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
});

export const {
  styled,
  css,
  config,
  theme,
  createTheme,
  reset,
  getCssText,
  globalCss,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      primary: "#0094E5",
      secondary: "#0072B0",
      offWhite: "#A8E0FF",
      lightGrey: "#E9E9E9",
      white: "#FFFFFF",
      dark: "#1E1E1E",
      darkGrey: "#1A202C",
      primaryHover: "$secondary",
    },
    fonts: {
      body: "$Satoshi, ui-sans-serif,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      heading:
        "$JakartaSans, ui-sans-serif,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    },
    fontSizes: {
      1: ".75rem",
      2: ".875rem",
      3: "1rem",
      4: "1.125rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.875rem",
      8: "2.25rem",
      9: "3rem",
      10: "3.75rem",
      11: "52px",
      12: "6rem",
    },
    fontWeights: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600,
      7: 700,
      8: 800,
      9: 900,
    },
    lineHeights: {
      1: "1rem",
      2: "1.25rem",
      3: "1.5rem",
      4: "1.75rem",
      5: "1.75rem",
      6: "2rem",
      7: "2.25rem",
      8: "2.5rem",
      9: "3rem",
      10: "3.75rem",
      11: "4.5rem",
      12: "6rem",
    },
    radii: {
      1: "4px",
      2: "6px",
      3: "8px",
      4: "12px",
      5: "20px",
      round: "50%",
      pill: "9999px",
    },
    zIndices: {
      hide: -1,
      auto: "auto",
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    space: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      14: "56px",
      16: "64px",
      20: "80px",
      30: "120px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      16: "64px",
      20: "80px",
      30: "120px",
      40: "160px",
      50: "200px",
      60: "240px",
      80: "320px",
      100: "400px",
      120: "480px",
    },
    shadows: {},
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
    reducedMotion: "(prefers-reduced-motion)",
    hover: "(any-hover: hover)",
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  },
  utils: {
    include: mixins(),
    p: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pd: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      "supports( padding-block-start: var(--space-1) )": {
        paddingTop: "unset",
        paddingBlockStart: value,
      },
    }),
    pr: (value: PropertyValue<"paddingRight">) => ({
      paddingRight: value,
      "supports( padding-inline-end: var(--space-1) )": {
        paddingRight: "unset",
        paddingInlineEnd: value,
      },
    }),
    pb: (value: PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
      "supports( padding-block-end: var(--space-1) )": {
        paddingBottom: "unset",
        paddingBlockEnd: value,
      },
    }),
    pl: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      "@supports( padding-inline-start: var(--space-1) )": {
        paddingLeft: "unset",
        paddingInlineStart: value,
      },
    }),
    px: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
      paddingRight: value,
      "supports( padding-inline-start: var(--space-1) )": {
        paddingLeft: "unset",
        paddingRight: "unset",
        paddingInlineStart: value,
        paddingInlineEnd: value,
      },
    }),
    py: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
      paddingBottom: value,
      "supports( padding-block-start: var(--space-1) )": {
        paddingTop: "unset",
        paddingBottom: "unset",
        paddingBlockStart: value,
        paddingBlockEnd: value,
      },
    }),

    m: (value: PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
      "supports( margin-block-start: var(--space-1) )": {
        marginTop: "unset",
        marginBlockStart: value,
      },
    }),
    mr: (value: PropertyValue<"marginRight">) => ({
      marginRight: value,
      "supports( margin-inline-end: var(--space-1) )": {
        marginRight: "unset",
        marginInlineEnd: value,
      },
    }),
    mb: (value: PropertyValue<"marginBottom">) => ({
      marginBottom: value,
      "supports( margin-block-end: var(--space-1) )": {
        marginBottom: "unset",
        marginBlockEnd: value,
      },
    }),
    ml: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      "supports( margin-inline-start: var(--space-1) )": {
        marginLeft: "unset",
        marginInlineStart: value,
      },
    }),
    mx: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
      marginRight: value,
      "supports( margin-inline-start: var(--space-1) )": {
        marginLeft: "unset",
        marginRight: "unset",
        marginInlineStart: value,
        marginInlineEnd: value,
      },
    }),
    my: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
      marginBottom: value,
      "supports( margin-block-start: var(--space-1) )": {
        marginTop: "unset",
        marginBottom: "unset",
        marginBlockStart: value,
        marginBlockEnd: value,
      },
    }),
    spaceY: (value: PropertyValue<"marginTop">) => ({
      "& >*+*": {
        marginTop: value,
      },
    }),
    spaceX: (value: PropertyValue<"marginRight">) => ({
      "& >*+*": {
        marginRight: value,
      },
    }),
    bg: (value: PropertyValue<"background">) => ({
      background: value,
    }),
    br: (value: PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: ScaleValue<"radii">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: ScaleValue<"radii">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: ScaleValue<"radii">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: ScaleValue<"radii">) => ({
      borderTopLeftRadius: value,
    }),
    ox: (value: PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: PropertyValue<"overflowY">) => ({ overflowY: value }),

    w: (value: PropertyValue<"width">) => ({ width: value }),
    h: (value: PropertyValue<"height">) => ({ height: value }),
    maxW: (value: PropertyValue<"maxWidth">) => ({ maxWidth: value }),
    maxH: (value: PropertyValue<"maxHeight">) => ({ maxHeight: value }),

    size: (value: PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    userSelect: (value: PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    appearance: (value: PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "inherit",
  },
  ":root": {
    "--fonts-Satoshi": getFontFamily(satoshi),
    "--fonts-JakartaSans": getFontFamily(jakartaSans),
  },
  "html, body": {
    padding: 0,
    margin: 0,
    fontFamily: "$body",
  },
});

globalStyles();

export type CSS = StitchesCSS<typeof config>;
export type {
  ComponentProps,
  VariantProps,
  PropertyValue,
  ScaleValue,
} from "@stitches/react";

type Theme = typeof config.theme;

type TokenByScaleName<ScaleName extends keyof Theme> = Prefixed<
  "$",
  keyof Theme[ScaleName]
>;

export type ScaleVariant<ScaleName extends keyof Theme> = Record<
  keyof Theme[ScaleName],
  CSS
>;

type GetCss<ScaleName extends keyof Theme> = (
  token: TokenByScaleName<ScaleName>
) => CSS;
export function createScaleVariant<ScaleName extends keyof Theme>(
  scaleName: ScaleName,
  getCss: GetCss<ScaleName>
): ScaleVariant<ScaleName> {
  return Object.keys(theme[scaleName]).reduce(
    (acc, key) => ({
      ...acc,
      [key]: getCss(`$${key}` as TokenByScaleName<ScaleName>),
    }),
    {} as any
  );
}
