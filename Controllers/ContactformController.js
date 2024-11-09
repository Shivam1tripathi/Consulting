import ContactModel from "../Models/ContactModel.js";

export const createContactController = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    switch (true) {
      case !name:
        return res.status(500).send({ message: "Name is required" });
      case !email:
        return res.status(500).send({ message: "email is required" });
      case !phone:
        return res.status(500).send({ message: "phone is required" });
      case !city:
        return res.status(500).send({ message: "city is required" });
    }
    //existing checking
    const existuser = await ContactModel.findOne({ email });
    if (existuser) {
      return res.status(200).send({
        success: false,
        message: "Already Applyed",
      });
    }
    const Contact = await new ContactModel({
      name,
      email,
      phone,
      city,
    }).save();
    await Contact.save();
    res.status(201).send({
      success: true,
      message: " Contact Created successfull",
      Contact,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in Creating  Contact",
      error,
    });
  }
};

//get ALL Product

export const getContactController = async (req, res) => {
  try {
    const Contact = await ContactModel.find({}).sort({ created: -1 });
    res.status(200).send({
      success: true,
      totalcount: Contact.length,
      message: "All Contact",
      Contact: Contact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Contact",
      error: error.message,
    });
  }
};
