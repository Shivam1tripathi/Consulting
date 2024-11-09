import slugify from "slugify";
import ProjectModel from "../Models/ProjectModel.js";
import fs from "fs";
import sharp from "sharp";

export const createProjectController = async (req, res) => {
  try {
    const { name, description } = req.fields;
    const { photo } = req.files;

    // Validation
    if (!name) {
      return res.status(400).send({ message: "Name is required" });
    }
    if (!description) {
      return res.status(400).send({ message: "Description is required" });
    }

    // Process Image (Crop and Resize using Sharp)
    let processedPhoto = null;
    if (photo) {
      // Load the image into sharp
      const imageBuffer = fs.readFileSync(photo.path);

      // Perform cropping and resizing (450x350 ratio)
      processedPhoto = await sharp(imageBuffer)
        .resize(450, 350) // Resize to the desired dimensions (you can adjust this)
        .toBuffer(); // Return the buffer to store in the database
    }

    // Create the Project
    const Project = new ProjectModel({
      ...req.fields,
      slug: slugify(name),
    });

    // If the photo is processed, add it to the project model
    if (processedPhoto) {
      Project.photo.data = processedPhoto;
      Project.photo.contentType = photo.type; // Content Type (MIME Type)
    }

    // Save the Project to the Database
    await Project.save();

    // Send Response
    res.status(201).send({
      success: true,
      message: "Project created successfully",
      Project,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error in creating project",
      error,
    });
  }
};
//get ALL Product

export const getProjectController = async (req, res) => {
  try {
    const Project = await ProjectModel.find({})
      .select("-photo")
      .limit(4)
      .sort({ created: -1 });
    res.status(200).send({
      success: true,
      totalcount: Project.length,
      message: "All Project",
      Project: Project,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error: error.message,
    });
  }
};

// get product photo
export const getProjectPhotoController = async (req, res) => {
  try {
    const Project = await ProjectModel.findById(req.params.pid).select("photo");

    if (Project.photo.data) {
      res.set("content-type", Project.photo.contentType);

      return res.status(200).send(Project.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Client Photo",
      error,
    });
  }
};
