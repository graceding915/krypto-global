'use client'

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope } from "react-icons/fa";
import { twJoin } from "tailwind-merge";

export default function ContactForm() {
  const [buttonName, setButtonName] = useState("SEND NOW" as string);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'default_service_id';
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'default_template_id';
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'default_public_key';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonName("...");

    if (form.current) {
      emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          const firstName = document.getElementById("First-name") as HTMLInputElement;
          const lastName = document.getElementById("Last-name") as HTMLInputElement;
          const email = document.getElementById("Email") as HTMLInputElement;
          const phone = document.getElementById("Phone") as HTMLInputElement;
          const message = document.getElementById("Message") as HTMLTextAreaElement;

          if (firstName) firstName.value = "";
          if (lastName) lastName.value = "";
          if (email) email.value = "";
          if (phone) phone.value = "";
          if (message) message.value = "";
          setButtonName("SENT");

          setTimeout(() => {
            setIsLoading(false);
            setButtonName("SEND NOW");
          }, 3 * 1000);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          setButtonName("SEND NOW");
        }
      );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-[24px] w-full">
        <div className="w-[56px] h-[2px] bg-[#eff3f6]" />
        <p className="text-[38px] text-white font-medium">Contact</p>
      </div>
      <div className="flex flex-col items-center gap-[12px]">
        <p className="text-[20px] font-semibold">{`Let's talk business`}</p>
        <div className="flex items-center gap-[8px]">
          <FaEnvelope className="text-white" />
          <p
            className="cursor-pointer text-[14px] hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.open("mailto:hi@krypto.global", "_blank");
            }}
          >
            hi@krypto.global
          </p>
        </div>
      </div>
      <div className="w-full md:w-[600px] h-fit bg-white">
        <div className="flex flex-row p-[36px] md:p-[48px] w-full h-fit">
          <form className="flex flex-col items-end gap-[48px] w-full" ref={form} onSubmit={onSubmit}>
            <div className="flex flex-col justify-center items-center gap-[24px] w-full">
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[10px] text-[#6e7f8b] tracking-[0.2rem]">NAME</label>
                <div className="flex flex-col gap-[6px] md:flex-row md:gap-[24px]">
                  <input
                    required
                    className="flex-1 h-[56px] px-[12px] py-[18px] border-[1px] border-[#eff3f6] text-[14px] text-black focus:border-[#cfdae2] outline-none"
                    type="text"
                    name="First-name"
                    placeholder="First name"
                    id="First-name"
                    maxLength={256}
                  />
                  <input
                    className="flex-1 h-[56px] px-[12px] py-[18px] border-[1px] border-[#eff3f6] text-[14px] text-black focus:border-[#cfdae2] outline-none"
                    type="text"
                    name="Last-name"
                    placeholder="Last name"
                    id="Last-name"
                    maxLength={256}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[10px] text-[#6e7f8b] tracking-[0.2rem]">EMAIL</label>
                <input 
                  required
                  className="w-full h-[56px] px-[12px] py-[18px] border-[1px] border-[#eff3f6] text-[14px] text-black focus:border-[#cfdae2] outline-none"
                  type="text"
                  name="Email"
                  placeholder="Your email"
                  id="Email"
                  maxLength={256}
                />
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[10px] text-[#6e7f8b] tracking-[0.2rem]">PHONE</label>
                <input 
                  required
                  className="w-full h-[56px] px-[12px] py-[18px] border-[1px] border-[#eff3f6] text-[14px] text-black focus:border-[#cfdae2] outline-none"
                  type="text"
                  name="Phone"
                  placeholder="Your phone number"
                  id="Phone"
                  maxLength={256}
                />
              </div>
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[10px] text-[#6e7f8b] tracking-[0.2rem]">MESSAGE</label>
                <textarea 
                  required
                  className="w-full h-[120px] px-[12px] py-[18px] border-[1px] border-[#eff3f6] text-[14px] text-black focus:border-[#cfdae2] outline-none"
                  name="Message"
                  placeholder="Your message"
                  id="Message"
                  maxLength={5000}
                />
              </div>
            </div>

            {
              isLoading
                ? <div
                    className={twJoin(
                      "cursor-not-allowed flex flex-row justify-center items-center w-[128px] h-[40px]",
                      "border-[1px] border-[rgba(255,255,255,0.3)] rounded-full bg-[#d6dde2] text-[#6e7f8b]"
                    )}
                  >
                    <p className="text-[10px] tracking-[0.2rem]">{buttonName}</p>
                  </div>
                : <button
                    className={twJoin(
                      "cursor-pointer flex flex-row justify-center items-center w-[128px] h-[40px]",
                      "border-[1px] border-[rgba(255,255,255,0.3)] rounded-full bg-black",
                      "active:scale-95"
                    )}
                    type="submit"
                  >
                    <p className="text-[10px] tracking-[0.2rem]">{buttonName}</p>
                  </button>
            }
          </form>
        </div>
      </div>
    </>
  );
}
