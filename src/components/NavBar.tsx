'use client'

import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";
import { useScroll } from "./ScrollProvider";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollToServices, scrollToPartners, scrollToBrandAndLogo, scrollToContact } = useScroll();

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
    <nav className={twJoin(
      "z-30 fixed top-0 flex flex-row justify-between items-center w-full h-[80px]",
      "border-b-[1px] border-[rgba(255,255,255,0.3)]",
      isScrolled ? "bg-[rgba(0,0,0,0.3)] backdrop-blur-lg" : "bg-transparent",
      "px-6 md:px-12"
    )}>
      <div className="flex flex-row items-center gap-[24px] h-full">
        <div className="cursor-pointer text-[22px] font-semibold">KRYPTO.</div>
        <div className="hidden md:block w-[1px] h-[24px] bg-[rgba(255,255,255,0.3)]" />
        <div className="cursor-pointer hidden md:flex flex-row items-center gap-[24px]">
          <p className="text-[12px] tracking-[0.2rem] active:scale-95" onClick={scrollToServices}>SERVICES</p>
          <p className="text-[12px] tracking-[0.2rem] active:scale-95" onClick={scrollToPartners}>PARTNERS</p>
          <p className="text-[12px] tracking-[0.2rem] active:scale-95" onClick={scrollToBrandAndLogo}>BRAND&LOGO</p>
        </div>
      </div>
      <div className={twJoin(
        "cursor-pointer flex flex-row justify-center items-center w-[128px] h-[40px]",
        "border-[1px] border-[rgba(255,255,255,0.3)] rounded-full",
        "md:hover:bg-[#d6dde2] md:hover:text-black active:scale-95"
      )}>
        <p className="text-[10px] tracking-[0.2rem]" onClick={scrollToContact}>CONTACT</p>
      </div>
    </nav>
  );
}
