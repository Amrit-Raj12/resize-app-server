import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  address: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  add_count: { type: Number, default: 1 },
  update_count: { type: Number, default: 0 },
  sr: { type: Number, default: 1 },
})
export const UserModel = mongoose.model("User", userSchema)
