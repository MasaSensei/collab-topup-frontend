import axios from "axios";

const axiosFunc = async (method, url, data) => {
  let promise;
  if (method === "get") {
    promise = await axios({
      method: "GET",
      url: url,
      params: data?.params,
      baseURL: "http://192.168.100.44:3001/",
      headers: {
        Authorization: "Bearer " + data.token,
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  }
  return await promise;
};

export { axiosFunc };
