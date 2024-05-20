import { twJoin } from "tailwind-merge";

export default function FootBar() {
  return (
    <footer className={twJoin(
      "flex flex-col justify-between gap-[48px] w-full min-h-[300px] px-12 pt-[80px] bg-white",
      "border-b-[1px] border-[rgba(255,255,255,0.3)]"
    )}>
      <div className="flex flex-col gap-[12px] max-w-[440px]">
        <p className="text-[22px] text-black font-semibold">KRYPTO.</p>
        <p className="text-[14px] text-[#445663]">{`KRYPTO. discovers and invests in high-potential blockchain projects, while providing strategy and marketing consulting to advance our clients' businesses.`}</p>
      </div>
      {/* <div className="w-full h-[1px] bg-[#eff3f6]" /> */}
      <div className="flex flex-row justify-between items-center h-[60px] border-t-[1px] border-t-[#eff3f6]">
        <p className="text-[8px] text-[#6e7f8b] text-left tracking-[0.2rem]"><span className="text-[#445663]">@2023.</span> ALL RIGHTS RESERVED</p>
        <p className="text-[8px] text-[#6e7f8b] text-right tracking-[0.2rem]">POWERED BY <span className="text-[#445663]">KRTPYO.</span></p>
      </div>
    </footer>
  );
}
