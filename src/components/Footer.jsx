"use client";
import {  Instagram, Facebook, MessageCircle } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-[#0a0908] text-stone-500 py-16 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-amber-500 mb-6 tracking-tight">Sweet Delights</h2>
          <p className="max-w-md mx-auto mb-10 text-stone-600 leading-relaxed italic">
            "เราเชื่อว่าเบเกอรี่ที่ดีคือหัวใจสำคัญของช่วงเวลาที่พิเศษ ขอบคุณที่ให้เราเป็นส่วนหนึ่งในความอร่อยของคุณ"
          </p>
          <div className="flex justify-center space-x-8 mb-10">
            <a href="#" className="hover:text-amber-500 transition-colors p-2 bg-stone-900 rounded-full"><Facebook size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors p-2 bg-stone-900 rounded-full"><Instagram size={20} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors p-2 bg-stone-900 rounded-full"><MessageCircle size={20} /></a>
          </div>
          <p className="text-xs uppercase tracking-widest font-medium">© 2024 Sweet Delights Premium Bakery. Crafted with Love.</p>
        </div>
      </footer>
    );
}

export default Footer;