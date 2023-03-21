import * as RadixSelect from "@radix-ui/react-select";
import { css, styled } from "stitches.config";
import { ChevronDownIcon } from "../icons";
import * as React from "react";

export default function Select({
  data,
  value,
  onChange,
}: {
  data: { id: string; name: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  // const [selected, setSelected] = React.useState();

  return (
    <RadixSelectRoot
      // value={selected}
      // onValueChange={(value) => setSelected(value)}
      value={value}
      onValueChange={onChange}
    >
      <RadixSelect.Trigger
        className={css({
          border: "none",
          bg: "$primary",
          px: "$4",
          py: "$2",
          color: "$white",
          br: "$pill",
          display: "flex",
          gap: "$2",
        })()}
      >
        <RadixSelect.Value placeholder="Select mode..." />
        <RadixSelect.Icon className="SelectIcon">
          <ChevronDownIcon
            css={{
              color: "$white",
            }}
          />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content>
          <RadixSelect.Viewport
            className={css({
              // border: "none",
              bg: "$white",
              py: "$2",
              color: "$secondary",
              br: "$4",
              px: "$2",
              boxShadow:
                "0 0 0 1px gainsboro, 0 4px 14px -3px rgba(0, 0, 0, 0.3)",
            })()}
          >
            {data.map((item) => (
              <RadixSelect.Item
                value={item.name}
                key={item.id}
                className={css({
                  transition: "all 100ms ease-out",
                  px: "$1",
                  py: "$1",
                  fontWeight: 500,
                  "&:hover,&:focus": {
                    bg: "$primary",
                    color: "$white",
                    br: "$1",
                  },
                })()}
              >
                <RadixSelect.ItemText>{item.name}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelectRoot>
  );
}

const RadixSelectRoot = styled(RadixSelect.Root, {
  display: "inline-flex",
});
const RadixSelectItem = styled(RadixSelect.Item, {});

Select.Item = RadixSelectItem;
