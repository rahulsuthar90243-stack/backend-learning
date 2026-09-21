import ImageKit from "@imagekit/nodejs";
import "dotenv/config";

const imagekit = new ImageKit({
    privateKey: process.env.Imagekit_key
});

async function uplodeFile(buffer){
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "file.jpg"
    });
    return result
} 

export { uplodeFile };