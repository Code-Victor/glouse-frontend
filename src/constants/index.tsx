import {
  WashingMachine,
  Basket,
  Iron,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  TitTokIcon,
} from "@/components/icons";
import type { Variants } from "framer-motion";

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
export const steps = [
  {
    title: "Schedule a pick-up time",
    paragraph:
      "You don't have to rush down to drop your clothes, let us pick it up! Choose any of the available pick-up times once you make a pickup request on WhatsApp,  and your dirty clothes will hit the road for a good wash in no time.",
  },
  {
    title: "Wash and Iron",
    paragraph:
      "Your dirty clothes will get washed delicately and ironed neatly based on your preferences with our available laundry options such as: wash and iron, wash only, iron only etc. Make your order based on your needs for all kinds of laundry at a budget friendly rate.",
  },
  {
    title: "Delivery as fast as light",
    paragraph:
      "Choose a suitable location for delivery and let us do the laundry magic of delivering your clean clothes within 24 hours!",
  },
];
export const transitions = {
  main: {
    duration: 1,
    ease: "easeInOut",
  },
};

export const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  regular: {
    x: 0,
    y: 0,
  },
  left: (x: string | number) => {
    return {
      x: -x,
    };
  },
  right: (x: string | number) => {
    return {
      x: x,
    };
  },
  top: {
    y: -100,
  },
  bottom: {
    y: 100,
  },
};
