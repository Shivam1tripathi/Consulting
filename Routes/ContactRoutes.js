import Express from "express";
import {
  createContactController,
  getContactController,
} from "../Controllers/ContactformController.js";

const router = Express.Router();

//Add Contact /method Post
router.post("/registerContact", createContactController);
//all Project
router.get("/all-Contact", getContactController);

export default router;
