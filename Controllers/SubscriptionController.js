import SubscriptionModel from "../Models/SubscriptionModel.js";

export const createSubscriptionController = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    if (!email) return res.status(500).send({ message: "email is required" });

    //existing checking
    const existSubscription = await SubscriptionModel.findOne({ email });
    if (existSubscription) {
      return res.status(200).send({
        success: false,
        message: "Already Applyed",
      });
    }
    const Subscription = await new SubscriptionModel({
      email,
    }).save();
    await Subscription.save();
    res.status(201).send({
      success: true,
      message: " Subscription Created successfull",
      Subscription,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in Creating  Subscription",
      error,
    });
  }
};

//get ALL Product

export const getSubscriptionController = async (req, res) => {
  try {
    const Subscription = await SubscriptionModel.find({}).sort({ created: -1 });
    res.status(200).send({
      success: true,
      totalcount: Subscription.length,
      message: "All Subscription",
      Subscription: Subscription,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting Subscription",
      error: error.message,
    });
  }
};
