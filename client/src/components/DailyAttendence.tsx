import React, { useEffect, useState } from "react";

function DailyAttendence() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const current = new Date();
    // Format: DD-MM-YYYY
    // const formatted = current.toISOString().split("T")[0];
    const formattedDate = `${String(current.getDate()).padStart(
      2,
      "0"
    )}-${String(current.getMonth() + 1).padStart(
      2,
      "0"
    )}-${current.getFullYear()}`;

    setToday(formattedDate);
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-lg font-mono">Today's Date: {today}</h1>
      </div>
    </div>
  );
}

export default DailyAttendence;
