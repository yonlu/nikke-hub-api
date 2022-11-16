import multer from "multer";
import { resolve } from "path";
import crypto from "crypto";

const nikkeTmpDir = resolve(__dirname, "..", "..", "tmp", "nikke");

export default {
  nikkes: {
    directory: nikkeTmpDir,
    storage: multer.diskStorage({
      destination: nikkeTmpDir,
      filename: (request, file, callback) => {
        const fileHash = crypto.randomBytes(16).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
};
