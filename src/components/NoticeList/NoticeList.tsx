"use client";
import { useEffect, useState } from "react";

export default function NoticeList() {
  const [notices, setNotices] = useState<any[]>([]);
  const [filteredNotices, setFilteredNotices] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/notices");
        const data = await response.json();
        setNotices(data);
        setFilteredNotices(data); // Initially, show all notices
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);

    // Filter notices based on selected date
    const filtered = notices.filter(notice =>
      new Date(notice.uploadedAt).toLocaleDateString() ===
      new Date(selectedDate).toLocaleDateString()
    );
    setFilteredNotices(filtered);
  };

  const handleSeeAll = () => {
    setFilteredNotices(notices);
    setSelectedDate(null); // Reset the selected date
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Filter By Date</h1>

      <div className="mb-4">
        <input
          type="date"
          value={selectedDate || ""}
          onChange={handleDateChange}
          className="input input-bordered w-full mb-2"
        />
        <button onClick={handleSeeAll} className="btn btn-primary w-full">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {filteredNotices.map((notice) => (
          <div key={notice._id} className="card bg-base-100 w-full shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{notice.title}</h2>
              <p className="text-gray-500 font-semibold">
                Uploaded on: {new Date(notice.uploadedAt).toLocaleDateString()}
              </p>
              <div className="card-actions justify-end">
                <a
                  href={`http://localhost:5000/api/v1/notices/${notice.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View PDF
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
