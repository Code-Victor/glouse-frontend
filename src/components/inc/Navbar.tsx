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
  const [isOpen, setIsOpen] = React.useState(false);

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
      as="nav"
      ai="center"
      fd="column"
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bg: "$white",
        zIndex: 10,
        boxShadow:
          scrolledUp || isTop ? "none" : "0px 3px 16px rgba(0, 0, 0, 0.1);",
        transition: "all 0.2s ease",
        transform: scrolledUp ? "translateY(-100%)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      <Flex
        jc="between"
        ai="center"
        mx="auto"
        px="5"
        container
        css={{
          height: "$20",
        }}
      >
        <GlouseLogo
          css={{
            width: 80,
            transition: "all 0.6s ease-in-out",
            "& path": {
              fill: isOpen ? "$white" : "$primary",
            },
            "@md": {
              width: 140,
            },
          }}
        />
        <NavButton
          css={{
            position: "relative",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Box
            css={{
              position: "absolute",
              inset: 0,
              bg: "$primary",
              br: "$round",
              zIndex: -1,
              "@supports (scale: 50)": {
                scale: isOpen ? 50 : 1,
              },
              "@supports not (scale: 50)": {
                size: isOpen ? "100vw" : "0",
              },
              opacity: isOpen ? 1 : 0,
              transition: "all 0.5s ease-in-out , opacity 0.6s ease-in-out",
            }}
          ></Box>
          <Hamburger />
          <Text css={{ include: "screenReaderOnly" }}>Open menu</Text>
        </NavButton>
        {/* Destop Nav */}
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
          <Text as={Link} href="/pricing">
            Pricing
          </Text>
          <Text as={Link} href="#">
            Contact Us
          </Text>
          <GetStartedButton />
        </Flex>
      </Flex>
      <Flex
        gap="4"
        fd="column"
        css={{
          display: "flex",
          px: "$4",
          py: isOpen ? "$2" : 0,
          width: "100%",
          color: "$white",
          height: isOpen ? "auto" : 0,
          transition: "all 0.5s ease-in-out",
          "& a": {
            color: "$white",
          },
          "@md": {
            display: "none",
          },
        }}
        px="5"
        container
        mx="auto"
      >
        <Text as={Link} href="/">
          Home
        </Text>
        <Text as={Link} href="/pricing">
          Pricing
        </Text>
        <Text as={Link} href="#">
          Contact Us
        </Text>
      </Flex>
    </Flex>
  );
}

const NavButton = styled("button", {
  all: "unset",
  display: "grid",
  placeItems: "center",
  size: "$10",
  br: "$round",
  bg: "$white",
  cursor: "pointer",

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
