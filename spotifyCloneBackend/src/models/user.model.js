import mongoose, {Schema} from "mongoose";

const userSchema = Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
            unique: true
        },
        role: {
            type: String,
            enum: ["user", "artist"],
            default: "user"
        }
    },{timestamps: true}
)


export const userModel = mongoose.model("User", userSchema);