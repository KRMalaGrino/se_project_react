// Weather Options -----------------------------------------------------
const weatherOptions = [
  // Day -----------------------------
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/Sunny.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../images/day/Cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "partial cloudy",
    url: new URL("../images/day/Partial-Cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rainy",
    url: new URL("../images/day/Rainy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "stormy",
    url: new URL("../images/day/Stormy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snowy",
    url: new URL("../images/day/Snowy.png", import.meta.url).href,
  },
  // Night -----------------------------
  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/Night-Moon.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../images/night/Night-Cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "partial cloudy",
    url: new URL("../images/night/Night-Moon-Cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rainy",
    url: new URL("../images/night/Night-Rainy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "stormy",
    url: new URL("../images/night/Night-Stormy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snowy",
    url: new URL("../images/night/Night-Snowy.png", import.meta.url).href,
  },
];
// Default Weather -------------------------------------------------------
const defaultWeatherOptions = {
  day: {
    url: new URL("../images/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/default.png", import.meta.url).href,
  },
};

// Clothing -------------------------------------------------------------
const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];
// Location -------------------------------------------------------------
const coordinates = {
  latitude: "45.2108",
  longitude: "123.1945",
};

// API Key
const APIkey = "8296d06fc295121a34eff3fa523cc028";

export {
  weatherOptions,
  defaultWeatherOptions,
  defaultClothingItems,
  coordinates,
  APIkey,
};
