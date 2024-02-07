import * as React from "react";
import { Box, Button, Flex, Text } from "@/components/base";
import { NextSeo } from "next-seo";
import { toast } from "sonner";
import { styled } from "stitches.config";
const DeleteData = () => {
  const [loading, setLoading] = React.useState(false);
  function deleteData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Data deleted successfully");
    }, 2000);
  }
  return (
    <Box>
      <NextSeo
        title="Delete User data"
        description="Get the best quality laundry done without breaking the bank."
      />
      <Box
        css={{
          mx: "auto",
          maxW: 940,
          minH: "70vh",
          mt: "$20",
          px: "$4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex fd="column" ai="center" css={{ maxW: 720, gap: 40 }}>
          <Text
            fontSize={{ initial: "6", "@md": "7" }}
            fontWeight="6"
            ta="center"
          >
            We value your privacy deeply. If you wish to have your data deleted,
            kindly provide your email below.
          </Text>
          <Flex fd="column" gap="5" css={{ maxW: 600, width: "100%" }}>
            <Flex fd="column">
              <Text as="label" htmlFor="delete-data" fontWeight="6">
                Email
              </Text>
              <StyledInput
                id="delete-data"
                placeholder="Enter your Email"
                type="email"
              />
            </Flex>
            <Button
              fullWidth
              onClick={deleteData}
              css={{
                br: 6,
                width: "80%",
                mx: "auto",
              }}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const StyledInput = styled("input", {
  p: "$3",
  border: "1px solid #BDBDBD",
  borderRadius: 6,
  bg: "#F2F2F2",
  "&:focus": {
    outline: "none",
    borderColor: "$primary",
  },
  "&::placeholder": {
    color: "#828282",
  },
  variants: {
    error: {
      true: {
        borderColor: "$red500",
        "&:focus": {
          borderColor: "$red600",
        },
      },
    },
  },
  defaultVariants: {
    error: "false",
  },
});
export default DeleteData;
