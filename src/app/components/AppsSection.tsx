import img71E2E290371E467788Ab2E7709A30B5D1 from "figma:asset/a9ad06c960db0ae2e317c4089aaaa28718fd8518.png";
import imgSingleCalsci4Feet11 from "figma:asset/2a4b452515a5d7f82a6f48fd4e6494525562e7b8.png";
import img89F4B9FeCdfd4754Ab830A0879B65E771 from "figma:asset/a617e5d412fb1b90b9543cbac5e255e6a83ec268.png";
import imgGraphAppPhone3 from "figma:asset/556e2f051fadffdf2850eff737cddc6c9b051c81.png";
import imgImageRemovebgPreview2 from "figma:asset/31df1a5223a57b63a1f74f862a06db434f29fa93.png";
import imgImage19 from "figma:asset/edd99489ed3ae6268895caeda7c5f9ad2b24b1ec.png";
import imgF60172Bc599F47918588E49899B841A21 from "figma:asset/7705ee2450563ed81e1e5f877dbbeef073bf1bd2.png";

function AppBadge({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center justify-center bg-[#d9d9d9] border border-[#c55b00] rounded-lg shadow-md px-6 py-3">
      <h3 className="font-['Saira_SemiCondensed',sans-serif] font-extrabold text-xl md:text-2xl text-[#c55b00]">
        {title}
      </h3>
    </div>
  );
}

export function AppsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2]" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="relative mb-6">
            <img 
              alt="Panda mascot" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg" 
              src={img71E2E290371E467788Ab2E7709A30B5D1} 
            />
          </div>
          <div className="bg-[#d9d9d9] border border-[#c55b00] rounded-[20px] shadow-[0px_4px_4px_0px_#c55b00] px-8 md:px-12 py-4 md:py-5">
            <h2 className="font-['Saira_SemiCondensed',sans-serif] font-semibold text-3xl md:text-5xl text-black text-center">
              APPS
            </h2>
          </div>
        </div>

        {/* Calculator App Card */}
        <div className="bg-white border-2 border-[#c55b00] rounded-[22px] p-6 md:p-8 lg:p-10 mb-8 md:mb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <div className="mb-6">
                <AppBadge title="Calculator App" />
              </div>
              <p className="font-['Barlow',sans-serif] font-semibold text-lg md:text-xl text-black leading-relaxed">
                Perform complex engineering and scientific calculations with ease. The Calculator App supports advanced 
                functions, unit conversions, and programmable operations — making it perfect for students, engineers, 
                and researchers.
              </p>
            </div>
            <div className="relative w-full lg:w-auto flex justify-center">
              <div className="relative w-64 md:w-80 lg:w-96">
                <img 
                  alt="Calculator app interface" 
                  className="w-full h-auto drop-shadow-[0px_102px_250px_rgba(197,91,0,0.35)]" 
                  src={imgSingleCalsci4Feet11} 
                />
                <div className="absolute top-4 right-4 w-24 md:w-32 h-auto">
                  <img 
                    alt="Panda with calculator" 
                    className="w-full h-auto object-contain" 
                    src={img89F4B9FeCdfd4754Ab830A0879B65E771} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graph App & ChatGPT App - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Graph App */}
          <div className="bg-white border-2 border-[#c55b00] rounded-[20px] p-6 md:p-8">
            <div className="mb-6 flex justify-center md:justify-start">
              <AppBadge title="Graph App" />
            </div>
            <p className="font-['Barlow',sans-serif] font-medium text-base md:text-lg text-black leading-relaxed mb-6">
              Plot mathematical functions and explore equations visually. The Graph App lets you generate real-time 
              graphs for algebra, trigonometry, and scientific functions to better understand mathematical relationships.
            </p>
            <div className="relative flex justify-center">
              <div className="relative w-32 md:w-40">
                <img 
                  alt="Graph visualization" 
                  className="w-full h-auto object-contain" 
                  src={imgImageRemovebgPreview2} 
                />
              </div>
            </div>
          </div>

          {/* ChatGPT App */}
          <div className="bg-white border-2 border-[#c55b00] rounded-[20px] p-6 md:p-8">
            <div className="mb-6 flex justify-center md:justify-start">
              <AppBadge title="ChatGPT App" />
            </div>
            <p className="font-['Barlow',sans-serif] font-medium text-base md:text-lg text-black leading-relaxed mb-6">
              Bring the power of AI directly to your calculator. The ChatGPT App helps you solve problems, understand 
              formulas, generate explanations, and explore concepts — all from your CalSci device.
            </p>
            <div className="relative flex justify-center">
              <div className="relative w-40 md:w-48">
                <img 
                  alt="AI assistant panda" 
                  className="w-full h-auto object-contain" 
                  src={imgImage19} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Build Your Own App */}
        <div className="bg-white border-2 border-[#c55b00] rounded-[20px] p-6 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <div className="mb-6">
                <div className="bg-[#d9d9d9] border border-[#c55b00] rounded-lg shadow-md px-6 md:px-8 py-4 inline-block">
                  <h3 className="font-['Saira_SemiCondensed',sans-serif] font-bold text-2xl md:text-4xl text-[#c55b00]">
                    Build Your Own App
                  </h3>
                </div>
              </div>
              <div className="font-['Barlow',sans-serif] font-medium text-base md:text-lg text-black leading-relaxed">
                <p className="mb-4">
                  CalSci is fully programmable. Using MicroPython and the CalSci SDK, you can build your own apps — 
                  from custom calculators to sensor-based tools using GPIO hardware.
                </p>
                <p className="font-semibold">
                  Turn your calculator into a powerful development platform.
                </p>
              </div>
            </div>
            <div className="relative w-full lg:w-auto flex justify-center">
              <div className="relative w-48 md:w-56 lg:w-64">
                <img 
                  alt="SDK development platform" 
                  className="w-full h-auto object-contain drop-shadow-[0px_42px_78px_rgba(197,91,0,0.28)]" 
                  src={imgF60172Bc599F47918588E49899B841A21} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
