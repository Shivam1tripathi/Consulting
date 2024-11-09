import Express from "express";

import formidableMiddleware from "express-formidable";
import {
  createProjectController,
  getProjectController,
  getProjectPhotoController,
} from "../Controllers/ProjectController.js";
const router = Express.Router();

//Add Project /method Post
router.post(
  "/registerProject",
  formidableMiddleware(),
  createProjectController
);
//all Project
router.get("/all-Project", getProjectController);
//get photo of Project by id
router.get("/Project-photo/:pid", getProjectPhotoController);

export default router;
