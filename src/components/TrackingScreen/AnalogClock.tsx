/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const AnalogClock = ({ speed }: { speed: number }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => new Date(prevValue.getTime() + 1000 * speed));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [speed]);
  return (
    <div>
      <Clock value={value} />
    </div>
  );
};

export default AnalogClock;
