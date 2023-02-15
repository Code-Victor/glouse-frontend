import React from "react";
import { CSS } from "stitches.config";
import { WaterMarkIcon } from "../icons";

export function WaterMark({
  bg,
  position,
  css,
}: {
  position: "left" | "right";
  bg: "primary" | "white";
  css?: CSS;
}) {
  const left = position === "left";
  const primary = bg === "primary";
  return (
    <WaterMarkIcon
      css={{
        position: "absolute",
        top: "50%",
        left: left ? 0 : "unset",
        right: left ? "unset" : 0,
        color: primary ? "white" : "primary",
        transform:
          "translateY(-50%) " + (left ? "" : "rotate3d(0, 1, 0, 180deg)"),
        ...css,
      }}
    />
  );
}
