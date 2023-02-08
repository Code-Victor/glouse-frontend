import React from "react";
import { Grid, Box, Stack, Text, Flex, Button } from "@/components/base";
import { cardInfo } from "@/constants";
import { CSS } from "stitches.config";
function Customized() {
  return (
    <Box
      css={{
        bg: "#F9F9F9",
      }}
    >
      <Grid
        columns={{ "@initial": 1, "@lg": 5 }}
        gap={{ "@initial": 8, "@lg": 5 }}
        container
        px="3"
        py="8"
        mx="auto"
        css={{
          "@lg": {
            "&>*:nth-child(1)": {
              gridColumn: "span 2",
            },
            "&>*:nth-child(2)": {
              gridColumn: "span 3",
            },
          },
        }}
      >
        <Stack gap="5">
          <Text
            as="h2"
            fontSize={{ "@initial": "7", "@md": "9" }}
            fontFamily="heading"
            fontWeight={{ "@initial": "7" }}
            ta={{ "@initial": "center", "@lg": "left" }}
            color="dark"
          >
            Customizable laundry and dry cleaning options
          </Text>
          <Text
            fontSize={{ "@initial": "4" }}
            ta={{ "@initial": "center", "@lg": "left" }}
            color="dark"
            as="p"
          >
            Your clothes don’t need ironing? No worries; we wash, and fold them
            neatly.
          </Text>
          <Flex gap="2" jc={{ "@initial": "center", "@lg": "start" }}>
            <Button variant="primary" size={{ "@initial": "sm", "@lg": "md" }}>
              Request pickup
            </Button>
            <Button
              variant="primary"
              outline
              size={{ "@initial": "sm", "@lg": "md" }}
            >
              View All Prices
            </Button>
          </Flex>
        </Stack>
        <Box>
          <Flex
            gap={4}
            wrap="wrap"
            jc={{
              "@initial": "center",
              "@lg": "end",
            }}
            css={{
              "&>*:nth-child(2n)": {
                br: "0 20px 0",
              },
              "&>*:nth-child(2n+1)": {
                br: "20px 0 20px",
              },
            }}
          >
            {cardInfo.map((card) => (
              <Card {...card} key={card.title} />
            ))}
            <Box
              css={{
                display: "none",
                "@lg": {
                  visibility: "hidden",
                  display: "flex",
                  maxW: 290,
                  flex: "1 0 280px",
                },
              }}
            />
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
}

export default Customized;

function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Flex
      gap="12"
      fd="column"
      ai={{ "@initial": "center", "@lg": "start" }}
      css={{
        boxShadow: "0px 3.31406px 33.1406px rgba(0, 0, 0, 0.05)",
        px: "$6",
        py: "$8",
        maxW: 290,
        flex: "1 0 240px",
        "@md": {
          flex: "1 0 280px",
        },
      }}
    >
      <Flex
        bg="primary"
        br="5"
        ai="center"
        jc="center"
        pd="4"
        css={{ color: "white", width: "fit-content" }}
      >
        {icon}
        <Text css={{ include: "screenReaderOnly" }}>Washing Icon</Text>
      </Flex>
      <Stack gap="5">
        <Text
          as="h3"
          fontSize="6"
          fontWeight="7"
          color="dark"
          ta={{
            "@initial": "center",
            "@lg": "left",
          }}
        >
          {title}
        </Text>
        <Text
          fontSize="4"
          color="dark"
          as="p"
          ta={{
            "@initial": "center",
            "@lg": "left",
          }}
        >
          {description}
        </Text>
      </Stack>
    </Flex>
  );
}
