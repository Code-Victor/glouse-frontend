import React from "react";
import { Box, Text, Flex, Button } from "@/components/base";
import { PricingTable } from "@/components/inc";
import {
  uniqueClothes,
  UniqueClothes,
  priceTable,
  UniqueServices,
} from "@/constants/prices";

export interface TableRow {
  clothe: UniqueClothes;
  selectedService: UniqueServices;
  availableServices: UniqueServices[];
  quantity: number;
}

const initialTable: TableRow[] = [];
export type ACTIONTYPE =
  | { type: "increment" | "decrement"; clothe: UniqueClothes }
  | { type: "service"; clothe: UniqueClothes; service: UniqueServices }
  | { type: "update"; clothe: UniqueClothes; data: TableRow[] };

function pricingReducer(state: TableRow[], action: ACTIONTYPE): TableRow[] {
  const currentClothe = state.find((p) => p.clothe === action.clothe);

  if (currentClothe) {
    switch (action.type) {
    case "update":
      return action.data;
      break;
    case "increment":
      return state.map((p) => {
        if (p.clothe === action.clothe) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      break;
    case "decrement":
      return state.map((p) => {
        if (p.clothe === action.clothe) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      break;
    case "service":
      return state.map((p) => {
        if (p.clothe === action.clothe) {
          return {
            ...p,
            selectedService: action.service,
          };
        }
        return p;
      });
      break;
    default:
      throw new Error();
    }
  } else {
    if (action.type === "update") {
      return action.data;
    }
    return state;
  }
}
const PriceCaculator = () => {
  const [tableRow, dispatch] = React.useReducer(pricingReducer, initialTable);

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
      <PricingTable clothes={tableRow} dispatch={dispatch} />
    </Box>
  );
};

export default PriceCaculator;
