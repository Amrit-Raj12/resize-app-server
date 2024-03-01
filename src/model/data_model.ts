import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
  sr: { type: Number, default: 1 },
  data: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: { type: String, required: true },
    added_date: { type: Date, default: Date.now },
  },
  add_count: { type: Number, default: 1 },
  update_count: { type: Number, default: 0 },
})
export const DataModel = mongoose.model("Data", dataSchema)
