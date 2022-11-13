import fs from "fs";

export const deleteFile = async (filename: string) => {
  // Check if file exists, if so delete it
  try {
    await fs.promises.stat(filename);
  } catch (err) {
    return;
  }

  await fs.promises.unlink(filename);
};
