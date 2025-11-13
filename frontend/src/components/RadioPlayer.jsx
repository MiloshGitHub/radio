import React, { useEffect, useState } from "react";

export default function RadioPlayer() {
  const [currentShow, setCurrentShow] = useState("Loading current show...");

  // Fetch current show from backend
  const fetchCurrentShow = async () => {
    try {
      const res = await fetch("/api/current-show"); // Your backend endpoint
      const show = await res.json();
      // Default text if no show is live
      setCurrentShow(show.name || "No show is live now");
    } catch (error) {
      console.error("Error fetching current show:", error);
      setCurrentShow("No show is live now");
    }
  };

  useEffect(() => {
    fetchCurrentShow(); // Initial fetch
    const interval = setInterval(fetchCurrentShow, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="radio-player"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      <audio controls autoPlay>
        <source src="/stream" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div style={{ fontWeight: "bold", color: "#ff5722" }}>
        Now Playing: {currentShow}
      </div>
    </div>
  );
}
