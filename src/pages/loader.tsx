import React from "react";
import { css, keyframes } from "stitches.config";
import { Flex } from "@/components/base";
import Image from "next/image";

const spin = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
});
export default function Loader() {
  return (
    <Flex
      ai="center"
      jc="center"
      css={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
      }}
    >
      <Image
        src="/new-logo.png"
        width={4437}
        height={4437}
        className={css({
          w: "$30",
          h: "$30",
          animation: `${spin} 1s linear infinite`,
        })()}
        alt="Logo loader"
      />
    </Flex>
  );
}
