import React, { useEffect, useState } from "react";

const Layout = ({ currentCounter, maxCounter }) => {
  const [isAnimatingCurrent, setIsAnimatingCurrent] = useState(false);
  const [isAnimatingMax, setIsAnimatingMax] = useState(false);

  // Trigger animation when the currentCounter changes
  useEffect(() => {
    setIsAnimatingCurrent(true);
    const timeout = setTimeout(() => setIsAnimatingCurrent(false), 500); // Reset animation after 500ms
    return () => clearTimeout(timeout);
  }, [currentCounter]);

  // Trigger animation when the maxCounter changes
  useEffect(() => {
    setIsAnimatingMax(true);
    const timeout = setTimeout(() => setIsAnimatingMax(false), 500); // Reset animation after 500ms
    return () => clearTimeout(timeout);
  }, [maxCounter]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {/* Current Counter */}
      <div
        className={`text-2xl font-bold transition-transform duration-500 ease-in-out transform ${
          isAnimatingCurrent ? "scale-110 text-green-500" : ""
        }`}
      >
        Current Counter: {currentCounter}
      </div>

      {/* Max Counter */}
      <div
        className={`text-2xl font-bold transition-transform duration-500 ease-in-out transform ${
          isAnimatingMax ? "scale-110 text-red-500" : ""
        }`}
      >
        Max Counter: {maxCounter}
      </div>
    </div>
  );
};

export default Layout;
