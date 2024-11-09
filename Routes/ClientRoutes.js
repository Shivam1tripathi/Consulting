import Express from "express";
import {
  createClientController,
  getClientPhotoController,
  getClientController,
} from "../Controllers/ClientController.js";
import formidableMiddleware from "express-formidable";
const router = Express.Router();

//Add Client /method Post
router.post("/registerclient", formidableMiddleware(), createClientController);
//all Client
router.get("/all-clients", getClientController);
//get photo of client by id
router.get("/clients-photo/:pid", getClientPhotoController);

export default router;
