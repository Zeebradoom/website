export interface Template {
  link: string;
  title: string;
  date: string;
}

const ten: Template = {
  link: "https://derrickcui.substack.com/p/progress-and-pacifism",
  title: "Progress and Pacifism - Optimizing Life",
  date: "Jul 2023",
};

const one: Template = {
  link: "https://derrickcui.substack.com/p/the-future-of-blockchain",
  title: "The Future of Blockchain",
  date: "Jun 2023",
};
const two: Template = {
  link: "https://businessreview.berkeley.edu/the-price-of-immortality/",
  title: "The Price of Immortality (Current Longevity Research)",
  date: "Nov 2022",
};
const three: Template = {
  link: "https://businessreview.berkeley.edu/a-love-letter-to-the-economist/",
  title: "A Love Letter to The Economist",
  date: "May 2022",
};
const four = {
  link: "https://businessreview.berkeley.edu/special-drawing-rights-during-covid-19/",
  title: "Special Drawing Rights During COVID-19",
  date: "Mar 2022",
};

const five = {
  link: "https://businessreview.berkeley.edu/a-dummys-guide-to-decarbonize-america/",
  title: "A Dummy’s Guide to Decarbonize America",
  date: "Mar 2022",
};

const eight = {
  link: "https://businessreview.berkeley.edu/the-empirical-revolution-in-economics/",
  title: "The Empirical Revolution in Economics",
  date: "Feb 2022",
};

const nine = {
  link: "https://businessreview.berkeley.edu/arbitrary-video-game-prices/",
  title: "Paradoxical Pricing: The Unusual Realities of the Video Game Market",
  date: "Nov 2021",
};

export const bytitle = {
  ten,
  one,
  two,
  three,
  four,
  five,
  eight,
  nine,
};
export const writing = Object.values(bytitle);
