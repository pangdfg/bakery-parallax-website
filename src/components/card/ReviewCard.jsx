"use client";
import { Star } from "lucide-react"

const ReviewCard = ({ name, role, text, initial }) => {
    return (
  <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:-translate-y-2 transition-all duration-300">
    <div className="flex text-amber-500 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-stone-200 mb-6 italic">"{text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-amber-800 rounded-full flex items-center justify-center font-bold text-white mr-3">
        {initial}
      </div>
      <div>
        <p className="text-white font-bold text-sm">{name}</p>
        <p className="text-stone-500 text-xs">{role}</p>
      </div>
    </div>
  </div>
);
}

export default ReviewCard;