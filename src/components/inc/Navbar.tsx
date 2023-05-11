import React from "react";
import { Button, Flex, Box, Text, Badge, Grid } from "../base";
import { CallIcon, GlouseLogo, Hamburger } from "../icons";
import Link from "next/link";
import { styled } from "stitches.config";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useCart } from "@/contexts/cart";

const navLinks = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};
const navlink = {
  hidden: {
    opacity: 0,
    y: -40,
    transition: {
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

function Navbar() {
  const { scrollY } = useScroll();
  const previousScrollY = React.useRef(0);
  const [scrolledUp, setScrolledUp] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const { clothes } = useCart();

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
          "@supports not (scale: 50)": {
            bg: isOpen ? "$primary" : "white",
          },
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Link href="/">
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
          <Text
            css={{
              include: "screenReaderOnly",
            }}
          >
            {" "}
            Glouse Logo
          </Text>
        </Link>
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
              opacity: isOpen ? 1 : 0,
              transition: "all 0.5s ease-in-out , opacity 0.6s ease-in-out",
            }}
          ></Box>
          <Hamburger />
          {!(clothes.length === 0 || isOpen) && (
            <Badge
              ping
              css={{
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(50%, -50%)",
              }}
            >
              {clothes.length}
            </Badge>
          )}
          <Text css={{ include: "screenReaderOnly" }}>
            {isOpen ? "Close Menu" : "Open menu"}
          </Text>
        </NavButton>
        {/* Destop Nav */}
        <Flex
          ai="center"
          gap="5"
          css={{
            display: "none",
            a: {
              color: "$dark",
              cursor: "pointer",
            },
            "@md": {
              display: "flex",
            },
          }}
          as={motion.div}
          variants={navLinks}
          initial="hidden"
          animate="visible"
        >
          <Text as={Link} href="/" css={{ display: "inline-block" }}>
            <motion.span style={{ display: "inline-block" }} variants={navlink}>
              Home
            </motion.span>
          </Text>
          <Text as={Link} href="/pricing" css={{ display: "inline-block" }}>
            <motion.span
              variants={navlink}
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              {!(clothes.length === 0) && (
                <Badge
                  ping
                  css={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    transform: "translate(50%, -50%)",
                  }}
                >
                  {clothes.length}
                </Badge>
              )}
              Pricing
            </motion.span>
          </Text>
          <Text as={Link} href="#contact-us" css={{ display: "inline-block" }}>
            <motion.span style={{ display: "inline-block" }} variants={navlink}>
              Contact Us
            </motion.span>
          </Text>
          <motion.div variants={navlink}>
            <GetStartedButton />
          </motion.div>
        </Flex>
      </Flex>
      <Grid
        css={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.6s ease-in-out",
          width: "100%",
        }}
      >
        <Flex
          gap="4"
          fd="column"
          css={{
            display: "flex",
            overflow: "hidden",
            "@supports not (scale: 50)": {
              bg: isOpen ? "$primary" : "white",
            },
            px: "$4",
            pb: isOpen ? "$4" : 0,
            width: "100%",
            color: "$white",
            transition: "all 0.5s ease-in-out",
            "& a": {
              color: "$white",
              cursor: "pointer",
            },
            "@md": {
              display: "none",
            },
          }}
          px="5"
          container
          mx="auto"
        >
          <Text as={Link} href="/" onClick={() => setIsOpen(false)}>
            Home
          </Text>
          <Text
            as={Link}
            css={{ position: "relative" }}
            href="/pricing"
            onClick={() => setIsOpen(false)}
          >
            {!(clothes.length === 0) && (
              <Badge
                color="white"
                ping
                css={{
                  position: "absolute",
                  top: 0,
                  left: 30,
                  transform: "translate(50%, -50%)",
                }}
              >
                {clothes.length}
              </Badge>
            )}
            Pricing
          </Text>
          <Text as={Link} href="#contact-us" onClick={() => setIsOpen(false)}>
            Contact Us
          </Text>
        </Flex>
      </Grid>
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
        display: "flex",
        "&:hover": {
          boxShadow: "0 0 0 1px white",
        },
      }}
      as={Link}
      href="/pricing"
    >
      <Flex
        ai="center"
        gap="1"
        css={{
          color: "$white",
        }}
      >
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
