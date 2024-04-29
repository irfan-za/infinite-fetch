"use client";
import Image from "next/image";
import { EventHandler, useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleImageChange = async (event: any) => {
    console.log(event);
    let file;
    if (event) {
      file = event.target.files[0];
      setSelectedFile(file);
    }

    const formData = new FormData();
    formData.append("_token", "UPNCAoRrGy0US8M55jBFc4IBVJOW36PKo6lxQmKz");
    formData.append("resize", "0");
    selectedFile !== null
      ? formData.append("image", selectedFile)
      : formData.append("image", file);

    const res = await fetch("https://public.orderonline.id/media/images", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    handleImageChange(null);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Upload Image</h1>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
        />
      </div>
    </main>
  );
}
