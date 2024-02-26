require("dotenv").config(); // טעינת המשתנים מהקובץ .env
import cloudinary from "cloudinary";

const CLOUDINARY_URI = JSON.parse(process.env.CLOUDINARY_URI);

cloudinary.v2.config(CLOUDINARY_URI);


// export const uploadBase64Image = async (base64String) => {
//   try {
//     const result = await cloudinary.v2.uploader.upload(base64String);
//     console.log('Image uploaded successfully:', result);
//     return result.url;
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     throw new Error('Error uploading image');
//   }
// };
export const uploadBase64Image = async (base64String) => {
  try {
    const result = await cloudinary.v2.uploader.upload(`data:image/jpeg;base64,${base64String}`);
    console.log('Image uploaded successfully:', result);
    return result.url;
  } catch (error) {
    if (error.http_code && error.http_code === 400 && error.body && error.body.error && error.body.error.message) {
      console.error('Error uploading image:', error.body.error.message);
      throw new Error(`Error uploading image: ${error.body.error.message}`);
    } else {
      console.error('Error uploading image:', error);
      throw new Error('Error uploading image');
    }
  }
};
