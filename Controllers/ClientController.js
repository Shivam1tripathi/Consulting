import slugify from "slugify";
import ClientModel from "../Models/ClientModel.js";
import fs from "fs";

export const createClientController = async (req, res) => {
  try {
    const { name, description, Designation } = req.fields;
    const { photo } = req.files;
    switch (true) {
      case !name:
        return res.status(500).send({ message: "Name is required" });
      case !description:
        return res.status(500).send({ message: "description is required" });
      case !Designation:
        return res.status(500).send({ message: "Designation is required" });
      case photo && photo.size > 1000000:
        return res.status(500).send({
          message: "Photo is required and size must be less then 1mb",
        });
    }
    const Client = new ClientModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      Client.photo.data = fs.readFileSync(photo.path);
      Client.photo.contentType = photo.type;
    }
    await Client.save();
    res.status(201).send({
      success: true,
      message: "Product Created successfull",
      Client,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in Creating product",
      error,
    });
  }
};

//get ALL Product

export const getClientController = async (req, res) => {
  try {
    const Clients = await ClientModel.find({})
      .populate("Designation")
      .select("-photo")
      .limit(4)
      .sort({ created: -1 });
    res.status(200).send({
      success: true,
      totalcount: Clients.length,
      message: "All Clients",
      Clients: Clients,
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
export const getClientPhotoController = async (req, res) => {
  try {
    const Client = await ClientModel.findById(req.params.pid).select("photo");

    if (Client.photo.data) {
      res.set("content-type", Client.photo.contentType);

      return res.status(200).send(Client.photo.data);
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
