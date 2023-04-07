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

export const whatsappNumber = "+2348146219253";

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
      "Your clothes don’t need ironing? No worries; we wash, and fold them neatly.",
  },
];

interface Item {
  service: string;
  category: string;
  type: string;
  price: number;
}
interface Category {
  title: string;
  prices: Item[];
}
// export const prices: Category[]=
//  generate 7 categories with 4 prices each at a go
//  and then map over them to display them
//  in the Prices component
export const categories: Category[] = [
  {
    title: "English ",
    prices: [
      {
        service: "Wash and Iron",
        category: "english",
        type: "shirt",
        price: 250,
      },
      {
        service: "Wash and Iron",
        category: "english",
        type: "jacket/Blazer",
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
        type: "skirt",
        price: 250,
      },
      {
        service: "Wash and Iron",
        category: "english",
        type: "jean",
        price: 300,
      },
    ],
  },
  {
    title: "Native ",
    prices: [
      {
        service: "Wash and Iron",
        category: "native",
        type: "agbada",
        price: 1000,
      },
      {
        service: "Wash and Iron",
        category: "native",
        type: "buba",
        price: 300,
      },
      {
        service: "Wash and Iron",
        category: "native",
        type: "gown",
        price: 500,
      },
      {
        service: "Wash and Iron",
        category: "native",
        type: "buba & sokoto",
        price: 500,
      },
      {
        service: "Wash and Iron",
        category: "native",
        type: "skirt & blouse",
        price: 500,
      },
    ],
  },
  {
    title: "Others",
    prices: [
      {
        service: "Wash and Iron",
        category: "others",
        type: "towels",
        price: 400,
      },
      {
        service: "Wash and Iron",
        category: "others",
        type: "bedsheets",
        price: 600,
      },
      {
        service: "Wash and Iron",
        category: "others",
        type: "duvet",
        price: 1000,
      },
      {
        service: "Wash and Iron",
        category: "others",
        type: "handtowel",
        price: 200,
      },
    ],
  },
  {
    title: "English(Wash & Fold)",
    prices: [
      {
        service: "Wash and Fold",
        category: "english",
        type: "shirt",
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
        price: 150,
      },
      {
        service: "Wash and Fold",
        category: "english",
        type: "shorts / short skirt",
        price: 50,
      },
      {
        service: "Wash and Fold",
        category: "english",
        type: "pant trousers",
        price: 100,
      },
    ],
  },
  {
    title: "Native(Wash & Fold)",
    prices: [
      {
        service: "Wash and Fold",
        category: "native",
        type: "buba",
        price: 100,
      },
      {
        service: "Wash and Fold",
        category: "native",
        type: "buba & sokoto",
        price: 100,
      },
      {
        service: "Wash and Fold",
        category: "native",
        type: "skirt & blouse",
        price: 100,
      },
      {
        service: "Wash and Fold",
        category: "native",
        type: "blouse & wrapper",
        price: 100,
      },
      {
        service: "Wash and Fold",
        category: "native",
        type: "gown",
        price: 150,
      },
    ],
  },
  {
    title: "English(Iron Only)",
    prices: [
      {
        service: "Iron Only",
        category: "english",
        type: "shirt",
        price: 150,
      },
      {
        service: "Iron Only",
        category: "english",
        type: "blouse",
        price: 150,
      },
      {
        service: "Iron Only",
        category: "english",
        type: "gown",
        price: 150,
      },
      {
        service: "Iron Only",
        category: "english",
        type: "shorts / short skirt",
        price: 200,
      },
      {
        service: "Iron Only",
        category: "english",
        type: "pant trousers",
        price: 200,
      },
    ],
  },
];

export const socials = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    link: "https://www.instagram.com/glouse.ng/",
  },
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    link: "",
  },
  {
    icon: <TwitterIcon />,
    name: "Twitter",
    link: "https://twitter.com/glouseng",
  },
  {
    icon: <TitTokIcon />,
    name: "TitTok",
    link: "",
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
    title: "Request Pick-Up",
    paragraph:
      "Select a pick-up time that is most convenient for you and we'll come by to collect your dirty clothes according to your schedule.",
  },
  {
    title: "Wash and Iron",
    paragraph:
      "We do the laundry magic with top-quality materials that retain the quality and beauty of your clothes.",
  },
  {
    title: "Lightning-fast delivery",
    paragraph:
      "Your clothes will be delivered to you in excellent condition within 24 hours!",
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
