import React from "react";
import { Box, Text, Flex, Button } from "@/components/base";
import { PricingTable } from "@/components/inc";
import {
  uniqueClothes,
  UniqueClothes,
  priceTable,
  UniqueServices,
} from "@/constants/prices";
import { useCart } from "@/contexts/cart";

export interface TableRow {
  clothe: UniqueClothes;
  selectedService: UniqueServices;
  availableServices: UniqueServices[];
  quantity: number;
}

const initialTable: TableRow[] = [];

const PriceCaculator = () => {
  const { clothes: tableRow, dispatch } = useCart();

  return (
    <Box
      container
      mx="auto"
      css={{
        py: "$10",
        px: "$4",
        "@md": {
          py: "$20",
        },
      }}
    >
      <Text
        as="h1"
        ta="center"
        fontSize={{ "@initial": 6, "@md": 8 }}
        css={{
          mb: "$8",
        }}
      >
        Select your clothing kind from the list to generate price
      </Text>
      <Flex
        gap={2}
        jc="center"
        wrap
        css={{
          rowGap: "$2",
        }}
      >
        {Array.from(uniqueClothes).map((clothe, index) => {
          const present = tableRow.find((p) => p.clothe === clothe);

          return (
            <Button
              css={{
                boxShadow: "0px 4px 15px rgba(30, 30, 30, 0.15)",
              }}
              key={index}
              onClick={() => {
                present
                  ? dispatch({
                    clothe,
                    type: "update",
                    data: tableRow.filter((r) => r.clothe !== clothe),
                  })
                  : dispatch({
                    type: "update",
                    clothe,
                    data: [
                      ...tableRow,
                      {
                        clothe,
                        quantity: 1,
                        availableServices: priceTable
                          .filter((p) => p.type === clothe)
                          .map((p) => p.service),
                        selectedService: priceTable
                          .filter((p) => p.type === clothe)
                          .map((p) => p.service)[0],
                      },
                    ],
                  });
              }}
              size="xs"
              variant={present ? "primary" : "white"}
            >
              {clothe}
            </Button>
          );
        })}
      </Flex>
      <PricingTable />
    </Box>
  );
};

export default PriceCaculator;
