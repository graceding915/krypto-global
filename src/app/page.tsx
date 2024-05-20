'use client'

import ContactForm from "@/components/ContactForm";
import { useScroll } from "@/components/ScrollProvider";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

// #6e7f8b
// #eff3f6

export default function Home() {
  const { servicesRef, partnersRef, brandAndLogoRef, contactRef, scrollToContact } = useScroll();

  return (
    <main className="flex flex-col items-center justify-between w-full mt-[32px] md:mt-0">

      {/* Section 1 */}
      <div className="flex flex-row items-center w-full min-h-screen px-10 md:px-12">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <p className="block md:hidden text-[48px] leading-[3.6rem]">
              {`We're investing in the potential of blockchain`}
            </p>
            <p className="block md:hidden text-[14px] leading-[1.8rem]">
              {`KRYPTO. discovers and invests in high-potential blockchain projects, while providing strategy and marketing consulting to advance our clients' businesses.`}
            </p>
            <p className="hidden md:block text-[52px] leading-[3.8rem]">
              {`We're investing in the`}<br/>
              {`potential of blockchain`}
            </p>
            <p className="hidden md:block text-[18px] leading-[1.8rem]">
              {`KRYPTO. discovers and invests in high-potential blockchain`}<br/>
              {`projects, while providing strategy and marketing consulting`}<br/>
              {`to advance our clients' businesses.`}
            </p>
          </div>
          <div className={twJoin(
            "cursor-pointer flex flex-row justify-center items-center w-[128px] h-[40px]",
            "border-[1px] border-[rgba(255,255,255,0.3)] rounded-full text-white",
            "md:hover:bg-[#d6dde2] md:hover:text-black active:scale-95"
          )}>
            <p className="text-[10px] tracking-[0.2rem]" onClick={scrollToContact}>CONTACT</p>
          </div>
        </div>
      </div>
      
      {/* Section 2 */}
      <div ref={servicesRef} className="flex flex-col justify-between w-full h-fit gap-[80px] px-12 pt-[80px] pb-[140px] bg-white">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="w-[56px] h-[2px] bg-[#d6dde2]" />
          <p className="text-[38px] text-black font-medium">Services</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[24px] w-full">
          <div className="card flex-1 flex flex-col w-[380px] min-h-[280px] p-[36px] border-animate justify-between">
            <div>
              <p className="text-[10px] text-[#6e7f8b] tracking-[0.2rem]">01</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[24px] text-black font-medium">Discovery</p>
              <p className="text-[14px] text-[#6e7f8b]">Expertise in searching for and analyzing projects to find promising ones.</p>
            </div>
          </div>
          <div className="card flex-1 flex flex-col w-[380px] min-h-[280px] p-[36px] border-animate justify-between">
            <div>
              <p className="text-[10px] text-[#6e7f8b] tracking-[0.2rem]">02</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[24px] text-black font-medium">Investment</p>
              <p className="text-[14px] text-[#6e7f8b]">Expertise in strategy, portfolio construction, and generating stable returns</p>
            </div>
          </div>
          <div className="card flex-1 flex flex-col w-[380px] min-h-[280px] p-[36px] border-animate justify-between">
            <div>
              <p className="text-[10px] text-[#6e7f8b] tracking-[0.2rem]">03</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[24px] text-black font-medium">Growth</p>
              <p className="text-[14px] text-[#6e7f8b]">Expertise in managing and growing projects, along with innovative ideas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col items-center gap-[80px] w-full h-fit pt-[80px] pb-[140px] bg-black">
        <div className="flex flex-col gap-[24px] px-12 w-full">
          <div className="w-[56px] h-[2px] bg-[#eff3f6]" />
          <p className="text-[38px] text-white font-medium">Portfolio</p>
        </div>
        <div className="flex flex-col items-center gap-[24px] px-12 w-full">
          <p className="text-center">{`"I will tell you how to become rich. Be fearful when others are greedy. Be greedy when others are fearful."`}</p>
          <div className="flex flex-row items-center gap-[24px]">
            <div className="flex flex-row justify-center items-center w-[42px] h-[42px] border-[1px] border-[rgba(255,255,255,.3)] rounded-full">
              <Image className="rounded-full" src="/images/warren-buffett.jpg" width={34} height={34} alt="Warren Buffett"/>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] font-semibold">Warren Buffett</p>
              <p className="text-[10px] tracking-[0.2rem]">MAGNATE & INVESTOR</p>
            </div>
          </div>
        </div>
      </div>
    
      {/* Section 4 */}
      <div ref={partnersRef} className="flex flex-col items-center gap-[80px] w-full h-fit px-12 pt-[80px] pb-[140px] bg-white">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="w-[56px] h-[2px] bg-[#d6dde2]" />
          <p className="text-[38px] text-black font-medium">Partners</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[6px] w-full max-w-[1296px]">
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 1</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 2</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 3</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 4</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 5</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 6</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 7</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 8</p>
          </div>
          <div className="card flex flex-row justify-center items-center h-[130px] border-animate">
            <p className="text-white">Portfolio 9</p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex flex-col justify-between w-full h-[640px] px-12 pt-[80px] pb-[140px] bg-black">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="w-[56px] h-[2px] bg-[#eff3f6]" />
          <p className="text-[38px] text-white font-medium">Advisors</p>
        </div>
        <div className="flex flex-row items-center gap-[24px] w-full">
        </div>
      </div>

      {/* Section 6 */}
      <div ref={brandAndLogoRef} className="flex flex-col justify-between gap-[80px] w-full h-fit px-12 pt-[80px] pb-[140px] bg-[#f9f9f9]">
        <div className="flex flex-col gap-[24px] w-full">
          <div className="w-[56px] h-[2px] bg-[#d6dde2]" />
          <p className="text-[38px] text-black font-medium">Brand & Logo</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center gap-[24px] w-full md:w-[428px] h-[165px] px-[6px] bg-transparent">
            <Image src="/images/logo-krypto-black.png" width={259} height={42} alt="Logo"/>
            <div className="flex flex-row items-center gap-[12px]">
              <p className="text-[12px] text-black">Download: </p>
              <a href="https://krypto-global-logo.s3.ap-northeast-2.amazonaws.com/logo-krypto-black.svg" target="_blank" className="cursor-pointer text-[14px] text-black font-medium hover:underline">SVG</a>
              <p className="text-[10px] text-black">/</p>
              <a href="https://krypto-global-logo.s3.ap-northeast-2.amazonaws.com/logo-krypto-black.png" target="_blank" className="cursor-pointer text-[14px] text-black font-medium hover:underline">PNG</a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[24px] w-full md:w-[428px] h-[165px] px-[6px] bg-black">
            <Image src="/images/logo-krypto-white.png" width={259} height={42} alt="Logo"/>
            <div className="flex flex-row items-center gap-[12px]">
              <p className="text-[12px] text-white">Download: </p>
              <a href="https://krypto-global-logo.s3.ap-northeast-2.amazonaws.com/logo-krypto-white.svg" target="_blank" className="cursor-pointer text-[14px] text-white font-medium hover:underline">SVG</a>
              <p className="text-[10px] text-white">/</p>
              <a href="https://krypto-global-logo.s3.ap-northeast-2.amazonaws.com/logo-krypto-white.png" target="_blank" className="cursor-pointer text-[14px] text-white font-medium hover:underline">PNG</a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div ref={contactRef} className="flex flex-col justify-between items-center gap-[45px] w-full px-12 pt-[80px] pb-[140px] bg-black">
        <ContactForm />
      </div>
    </main>
  );
}
