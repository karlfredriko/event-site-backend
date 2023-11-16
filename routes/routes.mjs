import express from "express";
import {
  startInfo,
  getError,
  getActivityListOrActivity,
  getTickets,
  postTicket,
} from "../controllers/controller.mjs";

const router = express.Router();

router.route("/start").get(startInfo);
router.route("/activities").get(getActivityListOrActivity);
router.route("/activities/:id").get(getActivityListOrActivity);
router.route("/tickets").get(getTickets);
router.route("/tickets").post(postTicket);
router.route("/*").get(getError);

export default router;
