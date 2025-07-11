// Weather Options
const weatherOptions = [
  // Day
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/Clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../images/day/Fog.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../images/day/Clouds.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/Rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../images/day/Storm.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/day/Snow.png", import.meta.url).href,
  },
  // Night
  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/Night-Clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../images/night/Night-Fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../images/night/Night-Clouds.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../images/night/Night-Rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../images/night/Night-Storm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../images/night/Night-Snow.png", import.meta.url).href,
  },
];

// Default Weather
const defaultWeatherOptions = {
  day: {
    url: new URL("../images/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/default.png", import.meta.url).href,
  },
};

// Clothing
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
// Location
const coordinates = {
  latitude: "45.2108",
  longitude: "123.1945",
};

// API Key
const APIkey = "8296d06fc295121a34eff3fa523cc028";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.KRMalaGrino.theoceanforest.com"
    : "http://localhost:3001";

export {
  weatherOptions,
  defaultWeatherOptions,
  defaultClothingItems,
  coordinates,
  APIkey,
  baseUrl,
};
