import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    content: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema);