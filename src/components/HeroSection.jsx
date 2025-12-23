"use client";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
    return (
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block text-amber-500 mb-4 tracking-[0.3em] uppercase text-sm font-bold animate-pulse">
            Premium Artisan Bakery
          </span>
          <h1 className="text-5xl md:text-8xl mb-6 italic font-serif leading-tight">
            The Art of Baking
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-stone-300">
            สัมผัสรสชาติความสดใหม่จากเตาทุกวัน ด้วยวัตถุดิบพรีเมียมและความรักในทุกคำ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#menu" className="bg-amber-600 px-10 py-4 rounded-full hover:bg-amber-700 transition font-semibold text-lg w-full sm:w-auto">
              เริ่มสำรวจเมนู
            </a>
            <a href="#about" className="border border-white/30 px-10 py-4 rounded-full hover:bg-white/10 transition font-semibold text-lg w-full sm:w-auto">
              เรื่องราวของเรา
            </a>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <ChevronDown size={32} className="text-white/50" />
          </div>
        </div>
    )
}

export default HeroSection;