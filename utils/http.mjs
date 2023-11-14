import fetch from "node-fetch";
import "dotenv/config";

const baseUrl = process.env.BASE_URL;
const responseType = {
  status: "Not found",
  statusCode: 404,
  error: null,
  data: null,
};

export const getData = async (endpoint, id = null) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  let url = baseUrl + endpoint;
  console.log(url);
  if (id !== null) url += `/${id}`;

  const response = await fetch(url, options);
  if (response.ok) {
    const result = await response.json();
    responseType.status = "Success";
    responseType.statusCode = 200;
    responseType.data = result;

    return responseType;
  } else {
    responseType.error = `${endpoint}/${id ? id : null} hittar ingen data.`;
    return responseType;
  }
};

export const postData = async (body) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 201) {
    responseType.statusCode = 500;
    responseType.status = "Error";
    responseType.error = "Ett fel inträffade när data skulle sparas";
    return responseType;
  } else {
    const result = await response.json();
    responseType.statusCode = 201;
    responseType.status = "Success";
    responseType.data = result;
    return responseType;
  }
};
