import React from "react";
import { Box, Text, Flex, Button } from "@/components/base";
import { styled } from "stitches.config";
import {
  uniqueClothesV2,
  UniqueClothesV2,
  priceTable,
} from "@/constants/prices";
import Select from "@/components/inc/Select";

const Pricing = () => {
  const [clothes, setClothes] = React.useState<UniqueClothesV2[]>([]);
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
            const present = clothes.includes(clothe);
            return (
              <Button
                css={{
                  boxShadow: "0px 4px 15px rgba(30, 30, 30, 0.15)",
                }}
                key={index}
                onClick={() => {
                  present
                    ? setClothes(clothes.filter((c) => c !== clothe))
                    : setClothes([...clothes, clothe]);
                }}
                size="xs"
                variant={clothes.includes(clothe) ? "primary" : "white"}
              >
                {clothe}
              </Button>
            );
          })}
        </Flex>
        <PricingTable clothes={clothes} />
      </Box>
    </>
  );
};

const PricingTable = ({ clothes }: { clothes: UniqueClothesV2[] }) => {
  //   clothes.map

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
            <Text>Mode</Text>
          </th>
          <th>
            <Text>Quantity</Text>
          </th>
        </tr>
        {clothes.map((clothe, index) => {
          const allcategories = priceTable.filter((p) => p.type === clothe);
          const availableMode = allcategories.map((p, i) => ({
            id: `${i}`,
            name: p.service,
          }));
          return (
            <tr key={index}>
              <td>
                <Flex jc="between">
                  <Text>{clothe}</Text>

                  <Text fontWeight={7}>
                    {priceTable.find((p) => p.type === clothe)?.price}
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
                <Select data={availableMode} />
              </Box>
              <td>
                <Text>hi</Text>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Box>
  );
};

export default Pricing;
