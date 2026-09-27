import mongoose, {Schema} from "mongoose";

const musicSchema = Schema(
    {
        url:{
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        artist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }, {timestamps: true}
)

export const musicModel = mongoose.Schema("Music", musicSchema);