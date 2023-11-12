export interface Template {
  link: string;
  title: string;
  description: string;
  date: string;
}
const one: Template = {
  link: "https://devpost.com/software/scaleswipe",
  title: "ScaleSwipe - web3 nfc wallet cards",
  description: "CalHacks 9.0 - Solana Tech - $1,500",
  date: "Oct 2022",
};
const two: Template = {
  link: "https://dorahacks.io/buidl/7825",
  title: "CeloGive - User-friendly, compliant recurring donations",
  description:
    "EthMiami 2023 - Celo, Unlock Protocol, QuickNode, Tatum - $5,750",
  date: "Nov 2022",
};
const three: Template = {
  link: "https://github.com/trevor-trinh/blockchain-expense-managment",
  title: "SimpliSpend - Onchain defi expense management",
  description: "Franklin Templeton Blockchain Technology Contest 2023 - $7,000",
  date: "Jun 2022",
};
const four = {
  link: "https://ethglobal.com/showcase/relay-85njt",
  title: "Relay - Zapier for Web3",
  description: "EthSF 2022 - XMTP - $1,500",
  date: "Oct 2022",
};

const five = {
  link: "https://devfolio.co/projects/governnet-ed05",
  title: "GovernNet - Propogate governance decisions cross-chain",
  description: "LionHack ‘23 - Axelar - $1,000",
  date: "15.06.2022",
};
export const bytitle = {
  one,
  two,
  three,
  four,
  five,
};
export const hacks = Object.values(bytitle);
