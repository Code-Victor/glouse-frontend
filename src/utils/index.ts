import { whatsappNumber } from "@/constants";
import { NextFontWithVariable } from "@next/font";

export function getFontFamily(font: NextFontWithVariable) {
  let fontFamily = font.style.fontFamily.split(",")[0];
  while (fontFamily.indexOf("'") > -1) {
    fontFamily = fontFamily.replace("'", "");
  }
  return fontFamily;
}
export function sendMessage(message: string) {
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  );
}
