import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      setIsFinished(true);
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!targetDate)
    return <p className="text-center">No target date provided.</p>;

  return (
    <div className="rounded text-center">
      {isFinished ? (
        <p className="text-red-500 text-xl font-semibold">⏰ Time's up!</p>
      ) : timeLeft ? (
        <div className="text-xl flex space-x-3 justify-center">
          <div className="bg-white px-4 py-3 rounded-sm">
            {timeLeft.days}
            <span className="text-third"> Days</span>
          </div>
          <div className="bg-white px-4 py-3 rounded-sm">
            {timeLeft.hours} <span className="text-third"> Hours</span>
          </div>
          <div className="bg-white px-4 py-3 rounded-sm">
            {timeLeft.minutes} <span className="text-third"> Mins</span>
          </div>
          <div className="bg-white px-4 py-3 rounded-sm">
            {timeLeft.seconds} <span className="text-third"> Secs</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CountdownTimer;
