import mongoose, { Schema } from "mongoose";

const musicSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const musicModel = mongoose.model("Music", musicSchema);