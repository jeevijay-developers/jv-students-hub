// components/AutoCounter.tsx
import React, { useEffect, useRef, useState } from "react";

interface AutoCounterProps {
  maxValue: number;
  duration?: number; // in milliseconds
  className?: string;
}

const AutoCounter: React.FC<AutoCounterProps> = ({
  maxValue,
  duration = 2000,
  className = "fs-1 fw-bold text-primary",
}) => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(percentage * maxValue);

      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    
    requestAnimationFrame(animate);

    return () => {
      startTimestamp.current = null;
    };
  }, [maxValue, duration]);

  return <div className={className}>{count}+</div>;
};

export default AutoCounter;
