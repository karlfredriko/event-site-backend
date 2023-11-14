import { getData, postData } from "../utils/http.mjs";

export const startInfo = async (req, res) => {
  const response = await getData("start");
  res.status(200).json(response);
};

export const listActivities = async (req, res) => {
  const response = await getData("activities");
  res.status(200).json(response);
};

export const getActivity = async (req, res) => {
  const id = req.params.id;
  const response = await getData("activities", id);
  res.status(200).json(response);
};

export const getError = async (req, res) => {
  res.status(400).json({
    status: "Bad Request",
    statusCode: 400,
    error: `${req.path} does not exist`,
    data: null,
  });
};
