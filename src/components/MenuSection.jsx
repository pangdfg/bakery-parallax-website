"use client";

import { useEffect, useRef, useState } from "react";
import MenuCard from "./card/MenuCard";

const menuItems = [
  {
    title: "ครัวซองต์เนยสดฝรั่งเศส",
    desc: "แป้งบางกรอบซ้อนเป็นเลเยอร์ 72 ชั้น",
    price: 85,
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1965",
  },
  {
    title: "ช็อกโกแลตฟัดจ์เค้ก",
    desc: "เค้กเนื้อนุ่ม ราดช็อกโกแลตเข้มข้น",
    price: 145,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989",
  },
  {
    title: "ทาร์ตผลไม้พรีเมียม",
    desc: "ผลไม้นำเข้าสดใหม่ทุกวัน",
    price: 120,
    img: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=2080",
  },
  {
    title: "ซาวโดว์โฮมเมด",
    desc: "หมักธรรมชาติ 48 ชม.",
    price: 95,
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1974",
  },
  {
    title: "เอแคลร์ช็อกโกแลต",
    desc: "แป้งชูว์สอดไส้ครีม",
    price: 110,
    img: "https://images.unsplash.com/photo-1612198790700-0ff2c1b7b7f4?q=80&w=1974",
  },
];

const VISIBLE = 3;

const MenuSection = () => {
  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef(null);

  // clone หน้า + หลัง
  const items = [
    ...menuItems.slice(-VISIBLE),
    ...menuItems,
    ...menuItems.slice(0, VISIBLE),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === menuItems.length + VISIBLE) {
        setAnimate(false);
        setIndex(VISIBLE);
      }
    };

    const node = trackRef.current;
    node.addEventListener("transitionend", handleTransitionEnd);

    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [index]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <div className="overflow-hidden">
      <div
        ref={trackRef}
        className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateX(-${(index * 100) / VISIBLE}%)`,
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="w-1/3 px-4 shrink-0">
            <MenuCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
