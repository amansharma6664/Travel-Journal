import { Schema, model, models } from "mongoose";

const TripSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

export default models.Trip || model("Trip", TripSchema);
