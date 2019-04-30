import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 47ff7b8c5ff4476e2afeaa166884a8e649e47ed830cab9b25a4e74abc741d8a8"
  }
});
