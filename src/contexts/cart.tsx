import * as React from "react";
import {
  uniqueClothes,
  UniqueClothes,
  priceTable,
  UniqueServices,
} from "@/constants/prices";
import { flushSync } from "react-dom";

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
  | { type: "update"; clothe: UniqueClothes; data: TableRow[] }
  | { type: "init"; data: TableRow[] };

function pricingReducer(state: TableRow[], action: ACTIONTYPE): TableRow[] {
  if (action.type === "init") {
    return action.data;
  }
  const currentClothe = state.find((p) => p.clothe === action.clothe);

  if (currentClothe) {
    switch (action.type) {
    case "update":
      return set(action.data);
      break;
    case "increment":
      return set(
        state.map((p) => {
          if (p.clothe === action.clothe) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          }
          return p;
        })
      );
      break;
    case "decrement":
      return set(
        state.map((p) => {
          if (p.clothe === action.clothe) {
            return {
              ...p,
              quantity: p.quantity - 1,
            };
          }
          return p;
        })
      );
      break;
    case "service":
      return set(
        state.map((p) => {
          if (p.clothe === action.clothe) {
            return {
              ...p,
              selectedService: action.service,
            };
          }
          return p;
        })
      );
      break;
    default:
      throw new Error("no such action");
    }
  } else {
    if (action.type === "update") {
      return set(action.data);
    }
    return set(state);
  }
}
function set<T>(value: T): T {
  localStorage.setItem(persistName, JSON.stringify(value));
  return value;
}
const CartContext = React.createContext<{
  clothes: TableRow[];
  dispatch: React.Dispatch<ACTIONTYPE>;
} | null>(null);
const persistName = "laundryCart";
function initializer() {
  try {
    return JSON.parse(localStorage.getItem(persistName) || "[]") as TableRow[];
  } catch {
    return [] as TableRow[];
  }
}

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tableRow, dispatch] = React.useReducer(pricingReducer, initialTable);
  React.useEffect(() => {
    const persistedData = initializer();
    dispatch({ type: "init", data: persistedData });
  }, []);

  return (
    <CartContext.Provider
      value={{
        clothes: tableRow,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cart = React.useContext(CartContext);
  if (!cart) {
    throw Error("useCart must be used with a CartProvider");
  }
  return cart;
}
