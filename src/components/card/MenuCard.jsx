"use client";

const MenuCard = ({ title, desc, price = 0, img }) => {
    return(
  <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:-translate-y-2 transition-all duration-300 group">
    <div className="overflow-hidden h-64">
      <img src={img} alt={`[ภาพของ ${title}]`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-stone-100">{title}</h3>
      <p className="text-stone-500 mb-6 text-sm leading-relaxed">{desc}</p>
      <div className="flex justify-between items-center pt-4 border-t border-stone-800">
        <span className="text-amber-500 font-bold text-xl">฿{price.toLocaleString()}</span>
      </div>
    </div>
  </div>
);
}

export default MenuCard;