import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  type: { type: String, enum: ["veg", "non-veg"], required: true },
});

const donationSchema = new mongoose.Schema({
  foodType: { type: String, enum: ["veg", "non-veg"], required: true },
  items: [itemSchema],
  donateTo: { type: String, default: "Not yet accepted" },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  check: {
    type: String,
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});
// Create the model from the schema
export default mongoose.model(`donation`, donationSchema);
