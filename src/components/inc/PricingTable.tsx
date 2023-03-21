import * as React from "react";
import Select from "@/components/inc/Select";
import {
  UniqueClothesV2,
  priceTable,
  UniqueServices,
} from "@/constants/prices";
import { Box, Text, Flex } from "@/components/base";
import { ACTIONTYPE, TableRow } from "@/pages/pricing";
import { styled } from "stitches.config";

interface PriceItem {
  clothe: UniqueClothesV2;
  selectedService?: UniqueServices;
  availableServices: UniqueServices[];
  quantity: number;
}

const PricingTable = ({
  clothes,
  dispatch,
}: {
  clothes: TableRow[];
  dispatch: React.Dispatch<ACTIONTYPE>;
}) => {
  return (
    <Box
      as="table"
      css={{
        $$borderColor: "gainsboro",
        mt: "$6",
        maxW: 860,
        mx: "auto",
        width: "100%",
        border: "1px solid $$borderColor",
        borderSpacing: 0,
        "& td, th": {
          border: "1px solid $$borderColor",
        },
        "& tr": {
          width: "100%",
        },
        "& th": {
          bg: "$primary",
          py: "$4",
          color: "$white",
        },
        "& td": {
          py: "$4",
          px: "$4",
        },
      }}
    >
      <tbody>
        <tr>
          <th>
            <Text>Clothes and Price</Text>
          </th>
          <th>
            <Text>Service</Text>
          </th>
          <th>
            <Text>Quantity</Text>
          </th>
        </tr>
        {clothes.map(
          ({ clothe, availableServices, quantity, selectedService }, index) => {
            console.log(availableServices);
            const availableMode = availableServices.map((service) => ({
              id: service,
              name: service,
            }));
            const price = priceTable.find(
              (p) => p.type === clothe && p.service === selectedService
            )?.price;
            return (
              <tr key={index}>
                <td>
                  <Flex jc="between">
                    <Text>{clothe}</Text>

                    <Text fontWeight={7}>
                      {price ? price * quantity : "no price"}
                    </Text>
                  </Flex>
                </td>
                <Box
                  as="td"
                  css={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Select
                    data={availableMode}
                    value={selectedService}
                    onChange={(value) => {
                      dispatch({
                        type: "service",
                        clothe,
                        service: value as UniqueServices,
                      });
                    }}
                  />
                </Box>
                <Box
                  as="td"
                  css={{
                    bg: "#F2F2F2",
                  }}
                >
                  <Flex ai="center" jc="center" gap={2}>
                    <PriceButton
                      disabled={quantity === 1}
                      onClick={() => {
                        dispatch({ type: "decrement", clothe });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </PriceButton>
                    <Text>{quantity}</Text>
                    <PriceButton
                      onClick={() => {
                        dispatch({ type: "increment", clothe });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                    </PriceButton>
                  </Flex>
                </Box>
              </tr>
            );
          }
        )}
        <tr>
          <td colSpan={3}>
            <Flex jc="between" ai="center">
              <Text fontWeight={7}>Total</Text>
              <Text fontWeight={7}>
                ₦{" "}
                {clothes?.reduce(
                  (acc, { clothe, quantity, selectedService }) => {
                    const price = priceTable.find((p) => {
                      const match =
                        p.type === clothe && p.service === selectedService;
                      return match;
                    })?.price;
                    if (price) {
                      return acc + price * quantity;
                    }
                    return acc;
                  },
                  0
                )}
              </Text>
            </Flex>
          </td>
        </tr>
      </tbody>
    </Box>
  );
};
export default PricingTable;

const PriceButton = styled("button", {
  border: "1px solid #4F4F4F",
  br: 8,
  bg: "transparent",
  fontSize: 24,
  color: "black",
  px: "$2",
  py: "$1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:disabled": {
    opacity: 0.5,
  },
  "& svg": {
    size: "$5",
  },
});
