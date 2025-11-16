import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaRegHeart
} from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { BsCart3 } from "react-icons/bs";

export const boxIconArr = [
  {
    title: "facebook",
    icon: <FaFacebookF />,
    to: ""
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    to: ""
  },
  {
    title: "youtube",
    icon: <FaYoutube />,
    to: ""
  },
  {
    title: "compare",
    icon: <TfiReload color="white" />,
    to: ""
  },
  {
    title: "favorite",
    icon: <FaRegHeart color="white" />,
    to: ""
  },
  {
    title: "cart",
    icon: <BsCart3 color="white" />,
    to: ""
  }
];
export const menuArr = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "Our Shop",
    to: "/shop"
  },

  {
    title: "About us",
    to: "/about"
  },
  {
    title: "Contacts",
    to: "contacts"
  },
  {
    title: "Search",
    to: ""
  },
  {
    title: "Sign in",
    to: ""
  }
];
