import Image from "next/image";
import React from "react";
import { Box, Button, Grid, Stack, Text, Flex } from "../base";
import { WaterMark } from "./WaterMark";
import clothes from "@public/images/clothes.png";
import { styled, css } from "stitches.config";

const steps = [
  {
    title: "Schedule a pick-up time",
    paragraph:
      "You don't have to rush down to drop your clothes, let us pick it up! Choose any of the available pick-up times once you make a pickup request on WhatsApp,  and your dirty clothes will hit the road for a good wash in no time.",
  },
  {
    title: "Wash and Iron",
    paragraph:
      "Your dirty clothes will get washed delicately and ironed neatly based on your preferences with our available laundry options such as: wash and iron, wash only, iron only etc. Make your order based on your needs for all kinds of laundry at a budget friendly rate.",
  },
  {
    title: "Delivery as fast as light",
    paragraph:
      "Choose a suitable location for delivery and let us do the laundry magic of delivering your clean clothes within 24 hours!",
  },
];

function Speed() {
  return (
    <Box
      css={{
        position: "relative",
      }}
      mt="7"
    >
      <Grid
        columns={{ "@initial": 1, "@lg": 4, "@xl": 5 }}
        gap={{ "@initial": 8, "@lg": 4 }}
        pt={8}
        container
        px="3"
        mx="auto"
        ai="center"
        className={speedGrid()}
      >
        <Image src={clothes} alt="speed" />
        <Stack css={{ maxW: 740 }} gap="5">
          <Text
            as="h2"
            fontSize={{ "@initial": "7", "@md": "9" }}
            fontFamily="heading"
            fontWeight={{ "@initial": "7" }}
            color="dark"
          >
            Your entire laundry cycle{" "}
            <Text color="primary">completed in 24 hours!</Text>
          </Text>
          <Text fontSize={{ "@initial": "4" }} color="dark" as="p">
            We know you’re busy, so we’ve made it easy for you to get your
            laundry done in a jiffy. We offer same-day pickup and delivery, so
            you can spend more time on the things that matter.
          </Text>
          <Box>
            {steps.map((step, index) => {
              const props = {
                ...step,
                index,
                last: index == steps.length - 1,
              };
              return <Step {...props} key={step.title} />;
            })}
          </Box>
        </Stack>
        <Flex ai="center" jc="center" py="4" css={{ width: "100%" }}>
          <Button size={{ "@initial": "sm", "@lg": "md" }}>
            Request Pickup
          </Button>
        </Flex>
      </Grid>
      <WaterMark position="right" bg="white" />
    </Box>
  );
}

export default Speed;

const speedGrid = css({
  "&>img": {
    width: "80%",
    height: "auto",
  },
  "&>*:nth-child(1)": {
    order: 2,
  },
  "&>*:nth-child(2)": {
    order: 1,
  },
  "&>*:nth-child(3)": {
    order: 3,
  },
  "@lg": {
    "&>*:nth-child(1)": {
      gridColumn: "span 2",
      order: 1,
    },
    "&>*:nth-child(2)": {
      gridColumn: "span 2",
      order: 2,
    },
    "&>*:nth-child(3)": {
      gridColumn: "span 2",
    },
  },
  "@xl": {
    "&>*:nth-child(2)": {
      gridColumn: "span 3",
    },
    "&>*:nth-child(3)": {
      gridColumn: "span 5",
    },
  },
});

const Line = styled("div", {
  flex: 1,
  width: 0,
  borderLeft: "2px solid $colors$primary",
  transform: "translateX(50%)",
});

function Step({
  title,
  paragraph,
  last,
  index,
}: {
  title: string;
  index: number;
  paragraph: string;
  last: boolean;
}) {
  return (
    <Grid
      css={{
        gridTemplateColumns: "60px 1fr",
        fontFamily: "$body",
      }}
    >
      <Flex fd="column" ai="center" gap="1">
        <Text fontSize="6" fontWeight="9">
          0{index + 1}
        </Text>
        {!last && <Line />}
      </Flex>
      <Stack gap="2">
        <Text as="h3" fontWeight="7" fontSize="5" color="dark">
          {title}
        </Text>
        <Text as="p" css={{ mb: last ? 0 : "$5" }}>
          {paragraph}
        </Text>
      </Stack>
    </Grid>
  );
}
