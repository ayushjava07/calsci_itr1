import svgPaths from "../../imports/svg-peme8j89c1";
import imgGraphAppPhone3 from "figma:asset/556e2f051fadffdf2850eff737cddc6c9b051c81.png";
import imgChatgpt1 from "figma:asset/a182d7ea0387321d7f0f51a048fda76b1fb596c1.png";
import imgPc1 from "figma:asset/213cfce82958c578beb1cbca2366241715090c42.png";
import imgGraphCal1 from "figma:asset/01406936f77f1c98e3474eb09b97d694614c98d0.png";
import imgImageFromRawpixelId15513494Png1 from "figma:asset/f348f001a41491f7a9c25b3f8b5b39b8c3b034b4.png";
import imgImageFromRawpixelId19624752Png1 from "figma:asset/09796f293ad4e6133669e00f33dcf4e9e82a7190.png";
import imgImage13 from "figma:asset/e208485465016249dcc0b0698638f694f14c06bb.png";
import imgImageFromRawpixelId20971753Png1 from "figma:asset/5282b162f1d159966e7944ac579a50a18c350196.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f2f2f2] py-12 md:py-20">
      {/* Decorative Background Waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Wave */}
        <div className="absolute left-0 top-1/3 w-full max-w-[600px] h-[200px] opacity-60">
          <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625 246">
            <path 
              d={svgPaths.p3e3635c0} 
              stroke="url(#paint0_linear_left)" 
              strokeLinecap="round" 
              strokeWidth="8"
            />
            <defs>
              <linearGradient id="paint0_linear_left" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop stopColor="#C55B00" />
                <stop offset="1" stopColor="#FFCC9F" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right Wave */}
        <div className="absolute right-0 top-1/4 w-full max-w-[800px] h-[200px] opacity-60 hidden lg:block">
          <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 805 243">
            <path 
              d={svgPaths.p35dca740} 
              stroke="url(#paint0_linear_right)" 
              strokeLinecap="round" 
              strokeWidth="8"
            />
            <defs>
              <linearGradient id="paint0_linear_right" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop stopColor="#C55B00" />
                <stop offset="1" stopColor="#FFCC9F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex items-center gap-2 bg-white border-2 border-[#c55b00] rounded-2xl px-4 py-2 shadow-sm">
            <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
              <path d={svgPaths.p5d3700} fill="black" />
              <path d={svgPaths.p244cd300} fill="black" />
            </svg>
            <span className="font-['Spline_Sans',sans-serif] font-medium text-base md:text-lg text-black">
              Trusted By 2000 + Users
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Decorative Icons - Left Side */}
          <div className="hidden lg:flex flex-col gap-8 relative">
            <div className="relative w-32 h-32 animate-float" style={{ animationDelay: '0s' }}>
              <img 
                alt="Laptop" 
                className="w-full h-full object-contain rotate-[-13deg] drop-shadow-lg" 
                src={imgPc1} 
              />
            </div>
            <div className="relative w-36 h-36 -ml-8 animate-float" style={{ animationDelay: '1s' }}>
              <img 
                alt="Graph Calculator" 
                className="w-full h-full object-contain rotate-[-13deg] drop-shadow-lg" 
                src={imgGraphCal1} 
              />
            </div>
          </div>

          {/* Center Device Image */}
          <div className="flex-1 flex justify-center relative max-w-2xl">
            {/* Decorative floating icons around main device */}
            <div className="absolute -top-4 -left-4 md:-left-8 w-20 md:w-28 h-20 md:h-28 animate-float" style={{ animationDelay: '0.5s' }}>
              <img 
                alt="ChatGPT" 
                className="w-full h-full object-contain rotate-[8deg] drop-shadow-xl" 
                src={imgChatgpt1} 
              />
            </div>

            {/* Main Calculator Device */}
            <div className="relative w-full max-w-lg">
              <img 
                alt="CalSci Calculator" 
                className="w-full h-auto drop-shadow-2xl" 
                src={imgGraphAppPhone3} 
              />
            </div>
          </div>

          {/* Decorative Icons - Right Side */}
          <div className="hidden lg:flex flex-col gap-6 relative">
            <div className="relative w-24 h-24 animate-float" style={{ animationDelay: '0.3s' }}>
              <img 
                alt="Panda toy" 
                className="w-full h-full object-contain rotate-[8deg] drop-shadow-lg" 
                src={imgImageFromRawpixelId15513494Png1} 
              />
            </div>
            <div className="relative w-20 h-20 ml-4 animate-float" style={{ animationDelay: '1.2s' }}>
              <img 
                alt="Orange calculator" 
                className="w-full h-full object-contain rotate-[7deg] drop-shadow-lg" 
                src={imgImageFromRawpixelId19624752Png1} 
              />
            </div>
            <div className="relative w-32 h-32 -ml-2 animate-float" style={{ animationDelay: '0.8s' }}>
              <img 
                alt="White robot" 
                className="w-full h-full object-contain rotate-[-20deg] drop-shadow-lg" 
                src={imgImage13} 
              />
            </div>
            <div className="relative w-28 h-28 ml-6 animate-float" style={{ animationDelay: '1.5s' }}>
              <img 
                alt="Pink gift" 
                className="w-full h-full object-contain rotate-[22deg] drop-shadow-lg" 
                src={imgImageFromRawpixelId20971753Png1} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
