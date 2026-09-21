import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        image:{
            type: String,
        },
        caption:{
            type: String
        }

    },
    {timestamps: true}
)

export const postModel = mongoose.model("postModel", postSchema);