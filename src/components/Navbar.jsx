"use client";

import { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f0e0d]/90 backdrop-blur-md py-4 border-b border-stone-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-amber-500 font-serif tracking-tight">Sweet Delights</a>
        <div className="hidden md:flex space-x-8 text-stone-300 font-medium">
          <a href="#about" className="hover:text-amber-500 transition">เกี่ยวกับเรา</a>
          <a href="#menu" className="hover:text-amber-500 transition">เมนูยอดนิยม</a>
          <a href="#reviews" className="hover:text-amber-500 transition">รีวิว</a>
        </div>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition shadow-lg flex items-center gap-2">
          <ShoppingCart size={18} />
          <span>สั่งจอง</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar