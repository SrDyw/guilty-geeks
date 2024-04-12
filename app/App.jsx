"use client";

import LoginForm from "@/components/Form/LoginForm";
import RegisterForm from "@/components/Form/RegisterForm";
import ImageCard from "@/components/ImageCard";
import UserInfo from "@/components/User/UserInfo";
import { useEffect, useState } from "react";
import { uploadImageAction } from "./actions/upload/cloudinaryImageAction";
import { uploadImageAction as databaseUploadImageAction } from "./actions/upload/databaseImageAction";
import { getPublicactionsAction } from "./actions/data/publications/publicationsAction";

export default function App() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    // Get publications from the server.
    getPublicactionsAction().then((p) => setPublications(p));
  }, []);

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    try {
      const formDataImage = new FormData();
      formDataImage.append("image", formData.image);
      const response = await uploadImageAction({ formData: formDataImage });
      const data = JSON.parse(response);

      const dbresponse = await databaseUploadImageAction({
        title: formData.title,
        description: formData.description,
        image: data.url,
      });
      console.log(dbresponse);
    } catch (err) {
      console.log(err);
    }
  };
  return <div className="mt-[130px] p-10">Bienvinido a Mirkastillito Manage</div>;
}
