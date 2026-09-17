import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
    {
        title: {
            type: String
        },
        description:{
            type: String
        }
    },{timestamps: true}
)

export const Notes = mongoose.model("Notes", noteSchema)