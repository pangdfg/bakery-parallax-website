"use client";

import ReviewCard from "./card/ReviewCard";

const reviews = [
  {
    name: "คุณกานดา ว.",
    role: "ลูกค้าประจำ",
    text:
      "ครัวซองต์ที่นี่คือที่สุด! ความหอมของเนยพุ่งออกมาตั้งแต่เปิดกล่อง เนื้อสัมผัสกรอบนอกนุ่มในอย่างที่ควรจะเป็นจริงๆ ค่ะ",
    initial: "ก",
  },
  {
    name: "คุณธนพล ม.",
    role: "ลูกค้าทั่วไป",
    text:
      "สั่งเค้กวันเกิดให้แฟน ประทับใจมากครับ ไม่ใช่แค่สวยแต่รสชาติกลมกล่อม ไม่หวานเลี่ยนจนเกินไป ทุกคนในงานชมกันหมดเลยครับ",
    initial: "ธ",
  },
  {
    name: "คุณรินรดา ส.",
    role: "Food Blogger",
    text:
      "ชอบความใส่ใจของที่ร้านมาก วัตถุดิบเขาสดใหม่จริงๆ ทาร์ตผลไม้คือผลไม้เน้นๆ คุ้มราคามาก แนะนำเลยค่ะสำหรับสายคาเฟ่",
    initial: "ร",
  },
  {
    name: "คุณปรีชา พ.",
    role: "เจ้าของคาเฟ่",
    text:
      "ผมทำร้านกาแฟเองและเลือกใช้เบเกอรี่จากที่นี่ประจำ คุณภาพคงที่ รสชาติดี ลูกค้าผมติดใจทุกครั้งที่สั่งครับ",
    initial: "ป",
  },
  {
    name: "คุณสุภาวดี จ.",
    role: "ลูกค้าใหม่",
    text:
      "ลองสั่งครั้งแรกจากคำแนะนำในโซเชียล ไม่ผิดหวังเลยค่ะ แพ็กเกจสวย ดูใส่ใจ และรสชาติอร่อยเกินคาด จะกลับมาซื้อซ้ำแน่นอนค่ะ",
    initial: "ส",
  },
];


const ReviewSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 w-full py-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-xs">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">เสียงตอบรับจากลูกค้า</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
          </div>
        </div>
    );
}

export default ReviewSection