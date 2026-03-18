import { CloudinaryImg } from "./CloudinaryImg";

function AppBadge({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center justify-center bg-[#ffffff] border-[1.5px] border-[#D35F00] rounded-lg shadow-sm px-4 py-1">
      <h3 className="font-['Barlow',sans-serif] font-bold text-sm md:text-base text-[#D35F00]">
        {title}
      </h3>
    </div>
  );
}

export function AppsSection() {
  return (
    <section className="py-12 md:py-16 bg-[#F2F2F2]" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16 mt-8">
          <div className="relative flex flex-col items-center">
            {/* Panda */}
            <CloudinaryImg
              publicId="app-header_noczbw"
              variant="icon"
              alt="Panda mascot"
              className="
        absolute
        -top-24
        w-24
        md:w-28
        z-20
        drop-shadow-lg
      "
            />

            {/* APPS Button */}
            <div
              className="
  bg-[#D9D9D9]
  border-[#C55B00]
  border-2
  rounded-xl
  px-10
  py-3
  shadow-[0_4px_0_0_#C55B00]
  mt-4
"
            >
              <h2 className="font-['Barlow',sans-serif] font-black text-3xl md:text-4xl text-black text-center tracking-tight">
                APPS
              </h2>
            </div>
          </div>
        </div>

        {/* Calculator App Card */}
        <div className="bg-white border-2 border-[#D35F00] rounded-2xl p-6 md:p-8 lg:p-10 mb-6 md:mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="mb-1">
                <AppBadge title="Calculator App" />
              </div>
              <p className="font-['Barlow',sans-serif] font-medium text-base md:text-lg text-black/90 leading-snug max-w-lg">
                Perform complex engineering and scientific calculations with
                ease. The Calculator App supports advanced functions, unit
                conversions, and programmable operations — making it perfect for
                students, engineers, and researchers.
              </p>
            </div>
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px]  flex items-baseline-last oe">
                <CloudinaryImg
                  publicId="Appcalcul_qybiay"
                  variant="card"
                  alt="Calculator app interface"
                  className="w-full h-fit scale-150"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Graph App & ChatGPT App - Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Graph App */}
          <div className="bg-[#F2F2F2] border-2 border-[#D35F00] rounded-2xl p-5 md:p-7 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-5">
              <AppBadge title="Graph App" />
            </div>
            <p className="font-['Barlow',sans-serif] font-bold text-sm md:text-base text-black/80 leading-tight mb-6">
              Plot mathematical functions and explore equations visually. The
              Graph App lets you generate real-time graphs for algebra,
              trigonometry, and scientific functions to better understand
              mathematical relationships.
            </p>
            <div className="relative flex justify-center mt-auto w-full">
              <div className="relative w-36 md:w-48">
                <CloudinaryImg
                  publicId="app_graph_cigenu"
                  variant="card"
                  alt="Graph visualization"
                  className="w-full h-fit object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* ChatGPT App */}
          <div className="bg-[#F2F2F2] border-2 border-[#D35F00] rounded-2xl p-5 md:p-7 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-5">
              <AppBadge title="ChatGPT App" />
            </div>
            <p className="font-['Barlow',sans-serif] font-bold text-sm md:text-base text-black/80 leading-tight mb-6">
              Bring the power of AI directly to your calculator. The ChatGPT App
              helps you solve problems, understand formulas, generate
              explanations, and explore concepts — all from your CalSci device.
            </p>
            <div className="relative flex justify-center mt-auto w-full">
              <div className="relative w-36 md:w-48">
                <CloudinaryImg
                  publicId="chatapp-panda_uuwb7y"
                  variant="card"
                  alt="AI assistant panda"
                  className="w-full h-fit object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Build Your Own App */}
        <div className="bg-white border-2 border-[#D35F00] rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
            <div className="flex-1 space-y-4">
              <div className="mb-1">
                <div className="bg-[#EDEDED] border-[1.5px] border-[#D35F00] rounded-xl px-6 py-2 inline-block">
                  <h3 className="font-['Barlow',sans-serif] font-black text-xl md:text-2xl text-[#D35F00]">
                    Build Your Own App
                  </h3>
                </div>
              </div>
              <div className="font-['Barlow',sans-serif] font-bold text-base md:text-lg text-black/90 leading-snug">
                <p className="mb-3">
                  CalSci is fully programmable. Using MicroPython and the CalSci
                  SDK, you can build your own apps — from custom calculators to
                  sensor-based tools using GPIO hardware.
                </p>
                <p className="text-[#D35F00] font-black text-lg md:text-xl mt-3">
                  Turn your calculator into a powerful development platform.
                </p>
              </div>
            </div>
            <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-end">
              <div className="relative w-36 md:w-48">
                <CloudinaryImg
                  publicId="app_own_qamxng"
                  variant="card"
                  alt="Waving panda"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float-mid {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-mid {
          animation: float-mid 4s ease-in-out infinite;
        }
      `,
        }}
      />
    </section>
  );
}
