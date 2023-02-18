import React from "react";
import { Button, Flex, Box, Text } from "../base";
import { CallIcon, GlouseLogo, Hamburger } from "../icons";
import Link from "next/link";
import { styled } from "stitches.config";
import { useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();
  const previousScrollY = React.useRef(0);
  const [scrolledUp, setScrolledUp] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) setIsTop(true);
    else setIsTop(false);
    if (latest < previousScrollY.current) {
      setScrolledUp(false);
      previousScrollY.current = latest;
    } else {
      previousScrollY.current = latest;
      setScrolledUp(true);
    }
  });
  return (
    <Flex
      ai="center"
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bg: "$white",
        zIndex: 10,
        h: "$20",
        boxShadow:
          scrolledUp || isTop ? "none" : "0px 3px 16px rgba(0, 0, 0, 0.1);",
        transition: "all 0.2s ease",
        transform: scrolledUp ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <Flex jc="between" ai="center" mx="auto" px="5" container>
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
            a: {
              color: "$dark",
            },
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
        "&:hover": {
          boxShadow: "0 0 0 1px white",
        },
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
