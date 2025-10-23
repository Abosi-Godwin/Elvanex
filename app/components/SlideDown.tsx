"use client";
import { useEffect, useState } from "react";

import { FaArrowDown } from "react-icons/fa";

const SlideDown = () => {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const getScrolled = () => {
      const scrollPosition = window.scrollY;
      setScrolledDown(scrollPosition > 150);
    };

    window.addEventListener("scroll", getScrolled);

    return () => window.removeEventListener("scroll", getScrolled);
  }, []);
  return (
    !scrolledDown && (
      <div
        className="fixed bottom-5 right-5 size-8 animate-bounce bg-gray-50
    z-50 rounded-full flex items-center justify-center text-xl
    text-sapphireSurge"
      >
        <FaArrowDown />
      </div>
    )
  );
};

export default SlideDown;
