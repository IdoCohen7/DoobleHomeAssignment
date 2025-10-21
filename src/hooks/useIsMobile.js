import { useState, useEffect } from "react";

// Hook to detect if the viewport is below a given breakpoint (in px)
export default function useIsMobile(breakpoint = 1200) {
  const isClient = typeof window !== "undefined";

  const getIsMobile = () => (isClient ? window.innerWidth < breakpoint : false);

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    if (!isClient) return undefined;

    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);

    window.addEventListener("resize", handleResize);
    // call once in case SSR initial value differs
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, isClient]);

  return isMobile;
}
