import React from "react";
import { Box, Grid, Stack, Text, Flex } from "../base";
import { GlouseLogo } from "../icons";
import { socials, footerLinks } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <Grid
      gap="3"
      columns={{ "@initial": 1, "@md": 6 }}
      py="16"
      container
      mx="auto"
      px="5"
    >
      <Box
        css={{
          gridColumn: "1/-1",
          "@md": {
            gridColumn: "1/3",
          },
        }}
      >
        <Stack gap="4">
          <GlouseLogo />
          <Text
            as="p"
            css={{
              maxW: 290,
            }}
          >
            The ultimate convenience; Spend zero time on laundry, more on life!
          </Text>
          <Flex gap="5" ai="center">
            {socials.map((social, index) => {
              return (
                <Box as="a" href={social.link} target="_blank" key={index}>
                  {social.icon}
                  <Text css={{ include: "screenReaderOnly" }}>
                    follow for more info on {social.name}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Stack>
      </Box>
      <Flex
        wrap="wrap"
        jc="between"
        gap="5"
        css={{
          gridColumn: "1/-1",
          "@md": {
            gridColumn: "3/-1",
          },
        }}
      >
        {footerLinks.map((footerlink, index) => {
          return (
            <Flex fd="column" gap="3" css={{ minW: 150 }} key={index}>
              <Text as="h3" fontSize="5" fontWeight="7" color="primary">
                {footerlink.title}
              </Text>
              {footerlink.links.map((link, index) => {
                return (
                  <Text
                    as={Link}
                    href={link.link}
                    key={index}
                    fontSize="4"
                    color="dark"
                  >
                    {link.title}
                  </Text>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
      <Box
        css={{
          gridColumn: "1/-1",
          mt: "$12",
        }}
      >
        {/* copy right */}
        <Text fontFamily="heading">©️ 2023 Glouse. All rights reserved </Text>
      </Box>
    </Grid>
  );
}

export default Footer;
