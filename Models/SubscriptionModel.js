import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", SubscriptionSchema);
