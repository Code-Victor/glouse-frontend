import { NextFontWithVariable } from "@next/font";

export function getFontFamily(font: NextFontWithVariable) {
  let fontFamily = font.style.fontFamily.split(",")[0];
  while (fontFamily.indexOf("'") > -1) {
    fontFamily = fontFamily.replace("'", "");
  }
  return fontFamily;
}
