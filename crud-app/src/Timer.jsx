import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [reverse, setRevsere] = useState(false);
  useEffect(() => {
    let interval = null;

    if (isRunning && seconds >= 0) {
      interval = setInterval(() => {
        setSeconds((prev) => reverse ? prev - 1 : prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, reverse]);

  const hadleStart = () => {
    console.log("hi");
    setIsRunning(true);
  };

  const hadleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const handleReverse = () => {
    if(seconds <= 0){
      setIsRunning(false)
    }
    setRevsere(!reverse);
  };
  return (
    <div>
      <h1>timer ::: {seconds}</h1>
      <button style={{ marginRight: "10px" }} onClick={hadleStart}>
        start
      </button>
      <button style={{ marginRight: "10px" }} onClick={hadleStop}>
        stop
      </button>
      <button style={{ marginRight: "10px" }} onClick={handleReset}>
        reset
      </button>
      <button style={{ marginRight: "10px" }} onClick={handleReverse}>
        reverse
      </button>
    </div>
  );
};

export default Timer;
