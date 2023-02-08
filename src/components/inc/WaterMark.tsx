import React from "react";
import { WaterMarkIcon } from "../icons";

export function WaterMark({
  bg,
  position,
}: {
  position: "left" | "right";
  bg: "primary" | "white";
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
      }}
    />
  );
}
