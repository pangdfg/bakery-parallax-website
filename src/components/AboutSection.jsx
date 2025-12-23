"use client";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm">ตั้งแต่ปี 1995</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 text-stone-100 leading-snug">ตำนานความอร่อยที่ส่งต่อจากรุ่นสู่รุ่น</h2>
            <p className="text-stone-400 leading-relaxed mb-8 text-lg">
              เราเริ่มต้นจากความหลงใหลในกลิ่นหอมของแป้งและเนย ทุกเช้าเราบรรจงรังสรรค์เบเกอรี่ด้วยความละเอียดอ่อน 
              เพื่อส่งมอบความสุขผ่านรสชาติที่แท้จริงจากธรรมชาติสู่โต๊ะอาหารของคุณ
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-stone-900/50 border border-stone-800">
                <h4 className="font-bold text-amber-500 mb-1">วัตถุดิบออร์แกนิก</h4>
                <p className="text-sm text-stone-500">คัดสรรจากฟาร์มท้องถิ่นที่ดีที่สุด</p>
              </div>
              <div className="p-6 rounded-xl bg-stone-900/50 border border-stone-800">
                <h4 className="font-bold text-amber-500 mb-1">อบใหม่ทุกเช้า</h4>
                <p className="text-sm text-stone-500">หอมกรุ่นจากเตา พร้อมเสิร์ฟ</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-4 border border-amber-900/30 rounded-2xl -z-10 mt-8 ml-8 group-hover:m-0 transition-all duration-500"></div>
            <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926" alt="[บรรยากาศร้าน]" className="rounded-2xl shadow-2xl group-hover:grayscale-0 transition duration-500" />
          </div>
        </div>
      </section>
    )
}

export default AboutSection;