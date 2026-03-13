import imgPchome from "@/assets/fh1.png";
import { useState } from "react";
import { WaitlistModal } from "./WaitlistModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-[#F2F2F2] overflow-hidden flex flex-col items-center">
      <div className="relative w-full flex flex-col items-center pt-20 md:pt-28 pb-16 px-4">
        {/* HERO IMAGE */}
        <div className="relative z-10 w-full flex justify-center">
          <img
            src={imgPchome}
            alt="CalSci Device"
            className="
              w-[900px]
              sm:w-[1100px]
              md:w-[1300px]
              lg:w-[1500px]
              max-w-none
              object-contain
              drop-shadow-[0_40px_60px_rgba(0,0,0,0.15)]
            "
          />
        </div>

        {/* TEXT + CTA */}
        <div className="relative z-20 text-center mt-12 md:mt-16 max-w-3xl">
          <h1
            className="
            font-['Barlow',sans-serif]
            text-[24px]
            sm:text-[32px]
            md:text-[48px]
            lg:text-[54px]
            font-extrabold
            tracking-[-0.02em]
            leading-[1.15]
            text-[#111212]
            "
          >
            CalSci: Calculator That Talks to the Real World
          </h1>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="
  px-10 py-4
  rounded-2xl
  border-2 border-orange-300 cursor-pointer
  text-[#D35F00]
  font-extrabold
  text-2xl
  tracking-wide
  bg-white
  shadow-[0_6px_20px_rgba(211,95,0,0.15)]
  hover:shadow-[0_10px_30px_rgba(211,95,0,0.25)]
  hover:-translate-y-[4px]
  transition-all
  duration-300
  "
            >
              Get Yours Now
            </button>
          </div>
        </div>
      </div>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
