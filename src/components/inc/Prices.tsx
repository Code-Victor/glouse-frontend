import * as React from "react";
import { styled } from "stitches.config";
import { Box, Button, Flex, Text } from "../base";
import { Quotes } from "../icons";
import { categories } from "@/constants";
import { motion, useAnimation, useInView } from "framer-motion";
import useMeasure from "react-use-measure";

const CAROUSEL_NO = 4;
function Prices() {
  const primaryControls = useAnimation();
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const [refFirst, boundsFirst] = useMeasure();
  const [refLast, boundsLast] = useMeasure();

  const isInView = useInView(ref);
  React.useEffect(() => {
    if (!hovered && isInView) {
      primaryControls.start({
        x: `-${(CAROUSEL_NO - 1) * 100}%`,
      });
    } else {
      primaryControls.stop();
    }
  });
  console.log(boundsFirst, boundsLast);
  return (
    <Box css={{ overflow: "hidden" }}>
      <Box
        css={{
          display: "table",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        ref={ref}
      >
        <Flex
          as={motion.div}
          drag="x"
          style={{ touchAction: "none" }}
          dragConstraints={{ left: -100, right: 100 }}
        >
          {Array.from({ length: CAROUSEL_NO }).map((_, i) => (
            <Flex
              key={i}
              ref={
                i == 0 || i == CAROUSEL_NO - 1
                  ? i == 0
                    ? refFirst
                    : refLast
                  : null
              }
              as={motion.div}
              initial={{ x: 0 }}
              animate={primaryControls}
              transition={{
                duration: 15 * (CAROUSEL_NO - 1),
                ease: "linear",
                repeat: Infinity,
              }}
              gap="5"
              py="4"
              px="2"
              css={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "& > *:nth-of-type(2n)": {
                  br: "$6 0",
                },
                "& > *:nth-of-type(2n+1)": {
                  br: "0 $6",
                },
              }}
            >
              <PriceCard>
                <Quotes />
                <Text as="p" fontWeight="5" fontFamily={"heading"}>
                  Get the best quality laundry done without breaking the bank
                </Text>
              </PriceCard>
              {categories.map((category, i) => {
                return (
                  <PriceCard key={i}>
                    <Text as="h3" fontSize="2" fontWeight="9" ta="center">
                      {category.title}
                    </Text>
                    <Flex gap="1" fd="column">
                      {category.prices.map((price, i) => (
                        <Flex key={i} jc="between">
                          <Text as="p" fontSize="2">
                            {price.title}
                          </Text>
                          <Text as="p" fontSize="2" fontWeight="7">
                            {price.price}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </PriceCard>
                );
              })}
            </Flex>
          ))}
        </Flex>
      </Box>
      <Flex jc="center" css={{ width: "100%" }}>
        <Button
          variant="primary"
          outline
          size={{ "@initial": "sm", "@lg": "md" }}
        >
          View All Prices
        </Button>
      </Flex>
    </Box>
  );
}

export default Prices;

const PriceCard = styled("div", {
  $$borderColor: "$colors$primary",
  px: "$4",
  py: "$5",
  maxW: 270,
  minW: 250,
  boxShadow: "0 0 0 2px $$borderColor",
});
