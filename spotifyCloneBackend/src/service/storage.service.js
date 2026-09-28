import { ImageKit } from "@imagekit/nodejs";
import "dotenv/config";

const imageKitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadeFile(file) {
  const result = await imageKitClient.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "yt-complete-backend/music",
  });

  return result;
}

export { uploadeFile };