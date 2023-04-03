import { useState, useEffect } from "react";

const Date = () => {
  const monthName = [
    "January",
    "Febuary",
    "Mars",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [date, setDate] = useState(new window.Date());
  useEffect(() => {
    let timer = setInterval(() => setDate(new window.Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3 className="date">
        {monthName[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
      </h3>
    </div>
  );
};

export default Date;
