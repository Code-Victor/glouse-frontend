import React from "react";
import { Button, Flex, Text } from "../base";
import { CallIcon, GlouseLogo, Hamburger } from "../icons";
import Link from "next/link";
import { styled } from "stitches.config";
function Navbar() {
  return (
    <Flex jc="between" mx="auto" py="4" px="3" container>
      <GlouseLogo
        css={{
          width: 80,
          "@md": {
            width: 140,
          },
        }}
      />
      <NavButton>
        <Hamburger />
        <Text css={{ include: "screenReaderOnly" }}>Open menu</Text>
      </NavButton>

      <Flex
        ai="center"
        gap="5"
        css={{
          display: "none",
          "@md": {
            display: "flex",
          },
        }}
      >
        <Text as={Link} href="/">
          Home
        </Text>
        <Text as={Link} href="#">
          Pricing
        </Text>
        <Text as={Link} href="#">
          Contact Us
        </Text>
        <GetStartedButton />
      </Flex>
    </Flex>
  );
}

const NavButton = styled("button", {
  all: "unset",
  display: "flex",
  ai: "center",
  "@md": {
    display: "none",
  },
});
export default Navbar;

export function GetStartedButton() {
  return (
    <Button
      css={{
        pl: 6,
        py: "$2",
      }}
    >
      <Flex ai="center" gap="1">
        <Flex
          ai="center"
          jc="center"
          bg="white"
          br="round"
          css={{
            $$size: "30px",
            size: "$$size",
            "& svg": {
              size: "calc($$size * 0.8) !important",
            },
            "@md": {
              $$size: "40px",
            },
          }}
        >
          <CallIcon />
        </Flex>
        Get Started
      </Flex>
    </Button>
  );
}
