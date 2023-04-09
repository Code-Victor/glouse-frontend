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

export const sendPickupMessage = sendMessage.bind(
  this,
  "Hello, I’ll like to request a laundry pickup."
);
/**
 * returns a number with commas(pretty print)
 * @param  {number}  number to be pretty printed
 * @return {string}    string with commas
 */
export function pp(no: number): string {
  return no.toLocaleString();
}
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function seo(
  title: string,
  description: string,
  domain: string,
  image: string
) {
  return (
    <>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={domain} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content={domain.replace("https://", "")}
      />
      <meta property="twitter:url" content={domain} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
