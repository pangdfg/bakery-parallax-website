"use client";

const ParallaxSection = ({ image, height, overlayOpacity = "0.7", children, id }) => {
  return (
    <section 
      id={id}
      className="relative flex items-center justify-center bg-center bg-no-repeat bg-cover md:bg-fixed"
      style={{ 
        backgroundImage: `url(${image})`,
        minHeight: height 
      }}
    >
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;