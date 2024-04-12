"use server";

import { imageNull } from "@/utils/errors";
import { json } from "@/utils/test";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const uploadImageAction = async ({ formData }) => {
  const image = formData.get("image");
  if (!image) {
    return JSON.stringify(imageNull);
  }

  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Subir la imagen a Cloudinary
  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({}, (err, res) => {
      if (err) reject(err);
      resolve(res);
    }).end(buffer);
  });


  return JSON.stringify(response); // Esto devolverá la respuesta de Cloudinary, que incluirá la URL de la imagen subida
};