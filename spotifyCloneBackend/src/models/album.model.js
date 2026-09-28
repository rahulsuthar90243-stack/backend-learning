import mongoose, { Schema } from "mongoose";


const albumSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        musics: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Music"
        }],
        artist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
)

export const albumModel = mongoose.model("Album", albumSchema);
