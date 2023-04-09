import * as React from "react";
import { Grid, Box, Stack, Text, Flex, Button } from "@/components/base";
import { cardInfo } from "@/constants";
import { motion, useInView } from "framer-motion";
import { sendPickupMessage } from "@/utils";

function Customized() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

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
        px="5"
        py="12"
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
        <Stack ref={ref} gap={{ "@initial": 5, "@lg": 8 }}>
          <Text
            as="h2"
            fontSize={{ "@initial": "7", "@md": "8", "@lg": "9" }}
            fontFamily="heading"
            fontWeight={{ "@initial": "7" }}
            ta={{ "@initial": "center", "@lg": "left" }}
            color="dark"
            css={{
              overflow: "hidden",
              "&>span": {
                display: "block",
                willChange: "transform",
              },
            }}
          >
            <motion.span
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{
                root: ref,
                amount: 0.1,
              }}
              animate={
                inView
                  ? {
                    opacity: 1,
                    y: 0,
                  }
                  : {}
              }
              initial={{
                opacity: 0,
                y: 100,
              }}
            >
              Customize Your Laundry experience Options
            </motion.span>
          </Text>
          <Flex gap="2" jc={{ "@initial": "center", "@lg": "start" }}>
            <Button
              as={motion.button}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ ease: "easeInOut" }}
              onClick={() => sendPickupMessage()}
              variant="primary"
              size={{ "@initial": "sm", "@lg": "md" }}
            >
              Request pickup
            </Button>
            <Button
              variant="primary"
              href="/pricing"
              outline
              size={{ "@initial": "sm", "@lg": "md" }}
              as={motion.a}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.2, ease: "easeInOut" }}
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
            {cardInfo.map((card, i) => (
              <Card {...card} no={i} key={card.title} />
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
  no,
  title,
  description,
  icon,
}: {
  no: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Flex
      as={motion.div}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 40,
      }}
      transition={{ delay: no * 0.4, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0.5, once: true }}
      gap={{ "@initial": 4, "@lg": 12 }}
      fd="column"
      ai={{ "@initial": "center", "@lg": "start" }}
      css={{
        boxShadow: "0px 3.31406px 33.1406px rgba(0, 0, 0, 0.05)",
        px: "$6",
        py: "$8",
        maxW: 290,
        flex: "1 0 240px",
        "@md": {
          flex: "1 0 260px",
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
        <Text css={{ include: "screenReaderOnly" }}>{title}</Text>
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
          fontSize={{ "@initial": 3, "@md": 4 }}
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
