"use client";

import { useState } from "react";

interface NoticeUploadProps {
  notices: any[];
  setNotices: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function NoticeUpload({ notices, setNotices }: NoticeUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    if (!title) {
      alert("Please enter a title.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("title", title); // Add title to form data

    try {
      const response = await fetch("https://resmedx-server.vercel.app/api/v1/notices", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadStatus("File uploaded successfully!");
        console.log("Response:", data);
        setTitle(""); // Clear title input
        setSelectedFile(null); // Clear file input
      } else {
        setUploadStatus("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("An error occurred while uploading the file.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Add a Notice</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter notice title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <input
              type="file"
              onChange={handleFileChange}
              accept="application/pdf"
              className="file-input file-input-bordered file-input-primary w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Add Notice
          </button>
        </form>
        {uploadStatus && (
          <p
            className={`mt-4 text-center ${uploadStatus.includes("success")
              ? "text-green-600"
              : "text-red-600"
              }`}
          >
            {uploadStatus}
          </p>
        )}
      </div>
    </div>
  );
}
