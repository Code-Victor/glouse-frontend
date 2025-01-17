import * as React from "react";
import Link from "next/link";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Autoplay from "embla-carousel-autoplay";
import { styled } from "stitches.config";
import { Box, Button, Flex, Text } from "../base";
import { Quotes } from "../icons";
import { categories, variants, transitions } from "@/constants";
import { motion, useInView } from "framer-motion";
import { capitalize } from "@/utils";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  loop: true,
  containScroll: "keepSnaps",
};

function PricesSlide() {
  const [hovered, setHovered] = React.useState(false);
  const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 2000 }),
    WheelGesturesPlugin(),
  ]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef, { amount: 0.8 });
  React.useEffect(() => {
    if (embla) {
      if (hovered || !inView) {
        embla.plugins().autoplay?.stop();
      } else {
        embla.plugins().autoplay?.play();
      }
    }
  }, [hovered, embla, inView]);
  return (
    <Box
      as={motion.div}
      variants={variants}
      animate={inView && ["visible", "regular"]}
      initial={["hidden", "bottom"]}
      transition={transitions.main}
      id="prices"
      css={{
        maxWidth: "100%",
        overflowX: "hidden",
        "@lg": {
          maxW: 2048,
          mx: "auto",
        },
      }}
      ref={containerRef}
    >
      <Box
        className="embla"
        css={{
          $$slideSpacing: "1rem",
          $$slideSize: "270px",
          $$slideHeight: "160px",
        }}
      >
        <Box
          ref={emblaRef}
          css={{ overflow: "hidden" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="embla__viewport"
          px="4"
        >
          <Flex
            className="embla__container"
            py="2"
            css={{
              "& > *": {
                paddingLeft: "$$slideSpacing",
                height: "100%",
                flex: "1 1 $$slideSize",
                minW: 250,
              },
              [`&  ${PriceCard}:nth-of-type(2n)`]: {
                br: "$6 0",
              },
              [`&  ${PriceCard}:nth-of-type(2n+1)`]: {
                br: "0 $6",
              },
              marginLeft: "calc($$slideSpacing * -1)",
            }}
          >
            <Box>
              <PriceCard className="embla__slide">
                <Quotes />
                <Text as="p" fontWeight="5" fontSize="5" fontFamily={"heading"}>
                  Get the best quality laundry done without breaking the bank
                </Text>
              </PriceCard>
            </Box>
            {categories.map((category, i) => {
              return (
                <Box key={i} className="embla__slide">
                  <PriceCard>
                    <Text
                      fontSize="2"
                      fontWeight="9"
                      ta="center"
                      css={{ display: "block" }}
                    >
                      {category.title}
                    </Text>
                    <Flex gap="1" fd="column">
                      {category.prices.map((price, i) => (
                        <Flex key={i} jc="between">
                          <Text as="p" fontSize="2">
                            {capitalize(price.type)}
                          </Text>
                          <Text as="p" fontSize="2" fontWeight="7">
                            ₦{price.price}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </PriceCard>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Flex jc="center" css={{ width: "100%", mt: "$6" }}>
        <Button
          variant="primary"
          outline
          as={Link}
          href="/pricing"
          size={{ "@initial": "sm", "@lg": "md" }}
        >
          View All Prices
        </Button>
      </Flex>
    </Box>
  );
}

export default PricesSlide;

const PriceCard = styled("div", {
  $$borderColor: "$colors$primary",
  px: "$4",
  py: "$5",
  boxShadow: "0 0 0 2px $$borderColor",
  height: "$$slideHeight",
});
