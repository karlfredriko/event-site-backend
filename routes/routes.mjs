import express from "express";
import {
  startInfo,
  listActivities,
  getActivity,
  getError,
} from "../controllers/controller.mjs";

const router = express.Router();

router.route("/start").get(startInfo);
router.route("/activities").get(listActivities);
router.route("/activities/:id").get(getActivity);
router.route("/*").get(getError);

export default router;
