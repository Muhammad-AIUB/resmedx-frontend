"use client"
import NoticeTable from "@/components/Dashboard/NoticeTable";
import NoticeUpload from "@/components/NoticeUpload/NoticeUpload";
import { useEffect, useState } from "react";


const DashboardPage = () => {
  // Lift the notices state up
  const [notices, setNotices] = useState<any[]>([]);

  // Fetch notices initially
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/notices");
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="h-screen">
      <NoticeUpload notices={notices} setNotices={setNotices} />
      <NoticeTable notices={notices} setNotices={setNotices} />
    </div>
  );
};

export default DashboardPage;
