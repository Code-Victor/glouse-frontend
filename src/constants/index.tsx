import {
  WashingMachine,
  Basket,
  Iron,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  TitTokIcon,
} from "@/components/icons";

export const cardInfo = [
  {
    icon: <WashingMachine />,
    title: "Wash and Iron",
    description:
      "Your clothes will be cleaned and ironed neatly, giving that crispy and polished look",
  },
  {
    icon: <Basket />,
    title: "Wash and Fold",
    description:
      "We wash and fold your clothes and deliver them back to you in a neat package.",
  },
  {
    icon: <Iron />,
    title: "Iron Only",
    description:
      " Your clothes don’t need ironing? No worries; we wash, and fold them neatly.",
  },
];

interface Price {
  title: string;
  price: string;
}
interface Category {
  title: string;
  prices: Price[];
}
// export const prices: Category[]=
//  generate 7 categories with 4 prices each at a go
//  and then map over them to display them
//  in the Prices component
export const categories: Category[] = [
  {
    title: "English Tops",
    prices: [
      { title: "Shirt", price: "₦1,000" },
      { title: "Jacket/Blazae", price: "₦1,500" },
      { title: "Gown", price: "₦2,000" },
      { title: "Blouse", price: "₦2,500" },
    ],
  },
  {
    title: "English Bottoms",
    prices: [
      { title: "Shirt", price: "₦1,000" },
      { title: "Jacket/Blazae", price: "₦1,500" },
      { title: "Gown", price: "₦2,000" },
      { title: "Blouse", price: "₦2,500" },
    ],
  },
  {
    title: "Native",
    prices: [
      { title: "Shirt", price: "₦1,000" },
      { title: "Jacket/Blazae", price: "₦1,500" },
      { title: "Gown", price: "₦2,000" },
      { title: "Blouse", price: "₦2,500" },
    ],
  },
  {
    title: "Others",
    prices: [
      { title: "Shirt", price: "₦1,000" },
      { title: "Jacket/Blazae", price: "₦1,500" },
      { title: "Gown", price: "₦2,000" },
      { title: "Blouse", price: "₦2,500" },
    ],
  },
  {
    title: "English Tops(W&Fold)",
    prices: [
      { title: "Shirt", price: "₦1,000" },
      { title: "Jacket/Blazae", price: "₦1,500" },
      { title: "Gown", price: "₦2,000" },
      { title: "Blouse", price: "₦2,500" },
    ],
  },
  {
    title: "English Bottoms(W&Fold)",
    prices: [
      { title: "Shirt", price: "₦1,000" },
      { title: "Jacket/Blazae", price: "₦1,500" },
      { title: "Gown", price: "₦2,000" },
      { title: "Blouse", price: "₦2,500" },
    ],
  },
];

export const socials = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
  },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
  },
  {
    icon: <TwitterIcon />,
    name: "Twitter",
  },
  {
    icon: <TitTokIcon />,
    name: "TitTok",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Pricing",
        link: "/pricing",
      },
      {
        title: "Privacy Policy",
        link: "/privary-policy",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "Pick-up and Delivery",
        link: "#",
      },
      {
        title: "Laundry options",
        link: "#",
      },
      {
        title: "Convenience",
        link: "#",
      },
    ],
  },
];
