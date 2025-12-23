import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ParallaxSection from './components/ParallaxSection';
import MenuSection from './components/MenuSection';
import ReviewSection from './components/ReviewsSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

export default function App() {

  return (
    <div className="bg-[#0f0e0d] text-stone-300 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <ParallaxSection 
        image="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072" 
        height="100vh"
        overlayOpacity="0.6"
      >
        <HeroSection />
      </ParallaxSection>

      {/* About Section */}
      <AboutSection />

      {/* Mid Quote Parallax */}
      <ParallaxSection 
        image="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070" 
        height="60vh"
        overlayOpacity="0.8"
      >
        <div className="text-center text-white p-8">
          <h2 className="text-4xl md:text-6xl font-serif mb-4 italic">"รสชาติที่ทำให้คุณยิ้มได้"</h2>
          <div className="w-24 h-px bg-amber-500 mx-auto mt-6"></div>
        </div>
      </ParallaxSection>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#141211]">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif text-white">เมนูยอดนิยมของเรา</h2>
    </div>

      < MenuSection />
</div>
</section>

      {/* Reviews Parallax */}
      <ParallaxSection 
        id="reviews"
        image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047" 
        height="70vh"
        overlayOpacity="0.9"
      >
        < ReviewSection />
      </ParallaxSection>

      {/* Booking Parallax */}
      <ParallaxSection 
        image="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=2020" 
        height="50vh"
        overlayOpacity="0.75"
      >
        < BookingSection />
      </ParallaxSection>

      {/* Footer */}
      <Footer />

    </div>
  );
}