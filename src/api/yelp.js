import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "BearereXpG_q6aKmM1I0KtK8q6OSD826Oav4thvHZQ97qA4_Wu-j4tTNTmw6vFuGvdSFfsRfibYCn41fr24YHlLHtIatx5z8OUTHcgpm8qHsoB5eTI5F5nkQmITdqgbua2XnYx",
  },
});
