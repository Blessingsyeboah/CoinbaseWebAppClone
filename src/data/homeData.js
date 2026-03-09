import bitcoinIcon from "../assets/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png";
import ethereumIcon from "../assets/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png";
import tetherIcon from "../assets/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png";
import solanaIcon from "../assets/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png";
import usdCoinIcon from "../assets/c347b6d1a7624e24c4e90089a69dfc8fb75523daf8eeb88007372a0c3a30d428.png";

export const topNavLinks = [
  { label: "Cryptocurrencies", to: "/explore" },
  { label: "Individuals", to: "/" },
  { label: "Businesses", to: "/" },
  { label: "Institutions", to: "/" },
  { label: "Developers", to: "/" },
  { label: "Company", to: "/learn" },
];

export const marketRows = [
  {
    icon: bitcoinIcon,
    name: "Bitcoin",
    price: "$68,245",
    change: "+2.1%",
  },
  {
    icon: ethereumIcon,
    name: "Ethereum",
    price: "$3,545",
    change: "+1.4%",
  },
  {
    icon: tetherIcon,
    name: "Tether",
    price: "$1.00",
    change: "+0.0%",
  },
  {
    icon: solanaIcon,
    name: "Solana",
    price: "$169.70",
    change: "+5.7%",
  },
  {
    icon: usdCoinIcon,
    name: "USDC",
    price: "$1.00",
    change: "+0.0%",
  },
];