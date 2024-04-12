'use server'

import { secureQuery } from "@/database/index.database";
import { imageUploadError } from "@/utils/errors";

export const uploadImageAction = async ({ title, description, image }) => {
  try {
    const response = await secureQuery(
      "INSERT INTO mk_publicacion(title, content,imageurl) VALUES($1, $2, $3)",
      [title, description, image]
    );
    return JSON.stringify({ message: "Publicacion saved successfuly" });
  } catch (err) {
    console.log("Error while saving image in database: ", err);
    return JSON.stringify(imageUploadError);
  }
};
