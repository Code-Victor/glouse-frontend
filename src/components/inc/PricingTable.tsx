import * as React from "react";
import Select from "@/components/inc/Select";
import {
  UniqueClothesV2,
  priceTable,
  UniqueServices,
} from "@/constants/prices";
import { Box, Text, Flex, Button } from "@/components/base";
import { ACTIONTYPE, TableRow } from "@/pages/pricing";
import { styled } from "stitches.config";
import { sendMessage } from "@/utils";

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
  //generate an order string from the clothes variable
  function generateOrderString() {
    let orderStringList = clothes.map((clothe, index) => {
      const { clothe: type, selectedService, quantity } = clothe;
      const price = priceTable.find(
        (p) => p.type === type && p.service === selectedService
      )?.price;
      return `${index + 1}. ${type}(${selectedService})--${quantity} ${
        quantity > 1 ? "units" : "unit"
      }--₦${price ? price * quantity : "no price"}`;
    });
    orderStringList = [
      "*Your Order*",
      ...orderStringList,
      `*Total Price*: ₦${totalPrice}`,
    ];
    const orderString = orderStringList.join("\n\n");
    return orderString;
  }
  const totalPrice = clothes?.reduce(
    (acc, { clothe, quantity, selectedService }) => {
      const price = priceTable.find((p) => {
        const match = p.type === clothe && p.service === selectedService;
        return match;
      })?.price;
      if (price) {
        return acc + price * quantity;
      }
      return acc;
    },
    0
  );
  return (
    <Box
      css={{
        mt: "$6",
        maxW: 860,
        mx: "auto",
      }}
    >
      <Flex fd="column" gap="4" css={{ mb: "$4", "@md": { display: "none" } }}>
        {clothes.map(
          ({ clothe, availableServices, quantity, selectedService }) => {
            const availableMode = availableServices.map((service) => ({
              id: service,
              name: service,
            }));
            const price = priceTable.find(
              (p) => p.type === clothe && p.service === selectedService
            )?.price;
            return (
              <Box
                key={clothe}
                px="4"
                py="6"
                css={{
                  br: "$4",
                  border: "1px solid gainsboro",
                  spaceY: "",
                }}
              >
                <Text fontWeight="7" fontSize="2">
                  Clothes and Price
                </Text>
                <Flex fd="column" gap="2" css={{ width: "100%" }}>
                  <Flex jc="between">
                    <Text fontSize="5">{clothe}</Text>
                    <Text fontWeight="7" fontSize="5">
                      NGN {price ? price * quantity : "no price"}
                    </Text>
                  </Flex>
                  <Box css={{ spaceY: "$1" }}>
                    <Text fontWeight="7" fontSize="2">
                      Mode
                    </Text>
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
                  <Box>
                    <Text fontWeight="7" fontSize="2">
                      Quantity
                    </Text>
                    <Flex ai="center" gap={2}>
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
                </Flex>
              </Box>
            );
          }
        )}
        <Flex
          ai="center"
          jc="between"
          px="4"
          py="6"
          css={{
            bg: "gainsboro",
            br: "$4",
            display: clothes.length === 0 ? "none" : "flex",
          }}
        >
          <Text fontSize="5">Total</Text>
          <Text fontSize="7" fontWeight={7}>
            NGN {totalPrice}
          </Text>
        </Flex>
      </Flex>

      <Box
        as="table"
        css={{
          $$borderColor: "gainsboro",
          display: "none",
          mb: "$12",
          width: "100%",
          border: "1px solid $$borderColor",
          borderSpacing: 0,
          "@md": {
            display: "table",
          },
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
            (
              { clothe, availableServices, quantity, selectedService },
              index
            ) => {
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
                <Text fontWeight={7}>₦ {totalPrice}</Text>
              </Flex>
            </td>
          </tr>
        </tbody>
      </Box>

      <Button
        disabled={clothes.length === 0}
        onClick={() => sendMessage(generateOrderString())}
        fullWidth
        radius="square"
      >
        Order Now
      </Button>
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
