import fetch from "node-fetch";
import "dotenv/config";

const baseUrl = process.env.BASE_URL;
const createResponseObj = () => {
  return {
    status: "Not found",
    statusCode: 404,
    error: null,
    data: null,
  };
};

export const getData = async (endpoint, id = null) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };
  const responseObj = createResponseObj();
  let url = baseUrl + endpoint;
  console.log(url);
  if (id !== null) url += `/${id}`;

  const response = await fetch(url, options);
  if (response.ok) {
    const result = await response.json();
    responseObj.status = "Success";
    responseObj.statusCode = 200;
    responseObj.data =
      endpoint === "tickets" ? { ticketsSold: result.length } : result;

    return responseObj;
  } else {
    responseObj.error = `${endpoint}/${id ? id : null} hittar ingen data.`;
    return responseObj;
  }
};

export const postData = async (body) => {
  const response = await fetch(baseUrl + "tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseObj = createResponseObj();

  if (response.status !== 201) {
    responseObj.statusCode = 500;
    responseObj.status = "Error";
    responseObj.error = "Ett fel inträffade när data skulle sparas";
    return responseObj;
  } else {
    const result = await response.json();
    responseObj.statusCode = 201;
    responseObj.status = "Success";
    responseObj.data = result;
    return responseObj;
  }
};
