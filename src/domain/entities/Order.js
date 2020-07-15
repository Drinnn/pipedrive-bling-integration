import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Order", orderSchema);
