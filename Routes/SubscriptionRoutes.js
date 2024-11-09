import Express from "express";
import {
  createSubscriptionController,
  getSubscriptionController,
} from "../Controllers/SubscriptionController.js";

const router = Express.Router();

//Add Contact /method Post
router.post("/registerSubscription", createSubscriptionController);
//all Project
router.get("/all-Subscription", getSubscriptionController);

export default router;
