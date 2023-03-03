import React from "react";
import { Box, Text, Flex, Button } from "@/components/base";
import { PricingTable } from "@/components/inc";
import { styled } from "stitches.config";
import {
  uniqueClothesV2,
  UniqueClothesV2,
  priceTable,
  UniqueServices,
} from "@/constants/prices";

export interface TableRow {
  clothe: UniqueClothesV2;
  selectedService: UniqueServices;
  availableServices: UniqueServices[];
  quantity: number;
}

export type ACTIONTYPE =
  | { type: "increment" | "decrement"; clothe: UniqueClothesV2 }
  | { type: "service"; clothe: UniqueClothesV2; service: UniqueServices }
  | { type: "update"; clothe: UniqueClothesV2; data: TableRow[] };

function reducer(state: TableRow[], action: ACTIONTYPE): TableRow[] {
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

const initialTable: TableRow[] = [];

const Pricing = () => {
  const [tableRow, dispatch] = React.useReducer(reducer, initialTable);
  console.log("priceTable", priceTable);

  return (
    <>
      <Box
        css={{
          mt: "$20",
          py: 110,
          backgroundColor: "rgba(0, 148, 229, 0.88)",
          backgroundImage: "url('/images/hanger.png')",
          backgroundBlendMode: "soft-light",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color: "$white",
          spaceY: "$4",
        }}
      >
        <Text as="h1" ta="center">
          Checkout the best price you can ever get
        </Text>
        <Text as="p" ta="center">
          Take a look at our pricing options for the one that best suits your
          needs.
        </Text>
      </Box>
      <Box
        container
        mx="auto"
        css={{
          py: "$20",
        }}
      >
        <Text
          as="h1"
          ta="center"
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
          {Array.from(uniqueClothesV2).map((clothe, index) => {
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
    </>
  );
};

export default Pricing;
