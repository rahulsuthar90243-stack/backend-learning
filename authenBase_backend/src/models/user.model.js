import mongoose, { Schema } from "mongoose";

const userSchema = Schema(
    {
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    {timestamps: true}
)

export const userModel = mongoose.model("userModel", userSchema);