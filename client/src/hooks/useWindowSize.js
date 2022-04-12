import { useState, useEffect } from "react";

function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowDimensions);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
