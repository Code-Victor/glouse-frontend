const prices = {
  "Wash and Iron": {
    english: {
      tops: {
        shirt: 250,
        "Jacket/Blazer": 500,
        gown: 400,
        blouse: 300,
        "Jean/Denim": 300,
        "Track suit": 500,
        "3-piece suit": 1_000,
      },
      bottoms: {
        "Shorts/short skirt": 50,
        pants: 100,
        jeans: 100,
        chinos: 100,
        joggers: 100,
        jumpsuit: 100,
        skirts: 70,
      },
    },
    native: {
      buba: 100,
      "Buba&Sokoto": 100,
      "Skirt & Blouse": 100,
      "Blouse & wrapper": 100,
      gowns: 500,
    },
    others: {
      towels: 500,
      bedsheets: 500,
      duvet: 800,
      handtowel: 100,
    },
  },
  "Wash and Fold": {
    english: {
      tops: {
        shirt: 70,
        tshirt: 70,
        blouse: 70,
        gown: 100,
        "Track suit": 100,
      },
      bottoms: {
        chinos: 300,
        "pant trousers": 300,
        palazzo: 300,
        skirts: 250,
        jumpsuit: 400,
        jeans: 300,
      },
    },
    native: {
      agbada: 1000,
      buba: 300,
      gowns: 500,
      "Buba&Sokoto": 500,
      "Skirt & Blouse": 500,
      "Blouse & wrapper": 500,
    },
    others: {
      towels: 700,
      bedsheets: 800,
      duvet: 1500,
      handtowel: 200,
    },
  },
  "Iron Only": {
    english: {
      "all tops": 150,
      "all bottoms": 200,
      suits: 500,
      "Jackets& Gowns": 300,
    },
    native: {
      gown: 300,
      "Buba&Sokoto": 300,
      buba: 200,
    },
  },
} as const;
export default prices;

export type UniqueClothes =
  | keyof (typeof prices)["Wash and Iron"]["english"]["tops"]
  | keyof (typeof prices)["Wash and Iron"]["english"]["bottoms"]
  | keyof (typeof prices)["Wash and Iron"]["native"]
  | keyof (typeof prices)["Wash and Iron"]["others"]
  | keyof (typeof prices)["Wash and Fold"]["english"]["tops"]
  | keyof (typeof prices)["Wash and Fold"]["english"]["bottoms"]
  | keyof (typeof prices)["Wash and Fold"]["native"]
  | keyof (typeof prices)["Wash and Fold"]["others"]
  | keyof (typeof prices)["Iron Only"]["english"]
  | keyof (typeof prices)["Iron Only"]["native"];

// export const uniqueClothes = new Set([
//   ...Object.keys(prices["Wash and Iron"]["english"]["tops"]),
//   ...Object.keys(prices["Wash and Iron"]["english"]["bottoms"]),
//   ...Object.keys(prices["Wash and Iron"]["native"]),
//   ...Object.keys(prices["Wash and Iron"]["others"]),
//   ...Object.keys(prices["Wash and Fold"]["english"]["tops"]),
//   ...Object.keys(prices["Wash and Fold"]["english"]["bottoms"]),
//   ...Object.keys(prices["Wash and Fold"]["native"]),
//   ...Object.keys(prices["Wash and Fold"]["others"]),
//   ...Object.keys(prices["Iron Only"]["english"]),
//   ...Object.keys(prices["Iron Only"]["native"]),
// ]) as Set<UniqueClothes>;

export const priceTable = [
  {
    service: "Wash and Iron",
    category: "english",
    type: "shirt",
    price: 250,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "Jacket/Blazer",
    price: 500,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "gown",
    price: 400,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "blouse",
    price: 300,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "Jean/Denim",
    price: 300,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "Track suit",
    price: 500,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "3-piece suit",
    price: 1000,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "Shorts/short skirt",
    price: 50,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "pants",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "jeans",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "chinos",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "joggers",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "jumpsuit",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "english",
    type: "skirts",
    price: 70,
  },
  {
    service: "Wash and Iron",
    category: "native",
    type: "buba",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "native",
    type: "Buba&Sokoto",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "native",
    type: "Skirt & Blouse",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "native",
    type: "Blouse & wrapper",
    price: 100,
  },
  {
    service: "Wash and Iron",
    category: "native",
    type: "gowns",
    price: 500,
  },
  {
    service: "Wash and Iron",
    category: "others",
    type: "towels",
    price: 500,
  },
  {
    service: "Wash and Iron",
    category: "others",
    type: "bedsheets",
    price: 500,
  },
  {
    service: "Wash and Iron",
    category: "others",
    type: "duvet",
    price: 800,
  },
  {
    service: "Wash and Iron",
    category: "others",
    type: "handtowel",
    price: 100,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "shirt",
    price: 70,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "tshirt",
    price: 70,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "blouse",
    price: 70,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "gown",
    price: 100,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "chinos",
    price: 300,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "pant trousers",
    price: 300,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "palazzo",
    price: 300,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "skirts",
    price: 250,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "jumpsuit",
    price: 400,
  },
  {
    service: "Wash and Fold",
    category: "english",
    type: "jeans",
    price: 300,
  },
  {
    service: "Wash and Fold",
    category: "native",
    type: "agbada",
    price: 1000,
  },
  {
    service: "Wash and Fold",
    category: "native",
    type: "buba",
    price: 300,
  },
  {
    service: "Wash and Fold",
    category: "native",
    type: "gowns",
    price: 500,
  },
  {
    service: "Wash and Fold",
    category: "native",
    type: "Buba&Sokoto",
    price: 500,
  },
  {
    service: "Wash and Fold",
    category: "native",
    type: "Skirt & Blouse",
    price: 500,
  },
  {
    service: "Wash and Fold",
    category: "native",
    type: "Blouse & wrapper",
    price: 500,
  },
  {
    service: "Wash and Fold",
    category: "others",
    type: "towels",
    price: 700,
  },
  {
    service: "Wash and Fold",
    category: "others",
    type: "bedsheets",
    price: 800,
  },
  {
    service: "Wash and Fold",
    category: "others",
    type: "duvet",
    price: 1500,
  },
  {
    service: "Wash and Fold",
    category: "others",
    type: "handtowel",
    price: 200,
  },
  {
    service: "Iron Only",
    category: "english",
    type: "all tops",
    price: 150,
  },
  {
    service: "Iron Only",
    category: "english",
    type: "all bottoms",
    price: 200,
  },
  {
    service: "Iron Only",
    category: "english",
    type: "suits",
    price: 500,
  },
  {
    service: "Iron Only",
    category: "english",
    type: "Jackets& Gowns",
    price: 300,
  },
  {
    service: "Iron Only",
    category: "native",
    type: "gown",
    price: 300,
  },
  {
    service: "Iron Only",
    category: "native",
    type: "Buba&Sokoto",
    price: 300,
  },
  {
    service: "Iron Only",
    category: "native",
    type: "buba",
    price: 200,
  },
] as const;

export type UniqueClothesV2 = (typeof priceTable)[number]["type"];
export type UniqueServices = (typeof priceTable)[number]["service"];
export const uniqueClothesV2: Set<UniqueClothesV2> = new Set([
  ...priceTable.map((item) => item.type),
]);
// compare Unique and UniqueClothes  types
type test = Exclude<UniqueClothesV2, UniqueClothes>;
