'use client'

import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";
import { useScroll } from "./ScrollProvider";
import { FaAngleUp } from "react-icons/fa";

export default function FloatingButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollToTop } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <div
      className={twJoin(
        "w-[36px] h-[36px] md:w-[48px] md:h-[48px]",
        "fixed bottom-[24px] bg-black rounded-full flex justify-center items-center cursor-pointer",
        "transition-all duration-300",
        isScrolled ? "right-[24px]" : "right-[-48px]"
      )}
      onClick={scrollToTop}
    ><FaAngleUp /></div>
  );
}
