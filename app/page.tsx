import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimateOnScroll from "./components/AnimateOnScroll";
import SolutionsSection from "./components/SolutionsSection";
import ProductsSection from "./components/ProductsSection";
import CleanAirSection from "./components/CleanAirSection";
import WhySection from "./components/WhySection";
import StepsSection from "./components/StepsSection";
import PergolaSection from "./components/PergolaSection";
import RealizationsSection from "./components/RealizationsSection";
import ReviewsSection from "./components/ReviewsSection";
import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";
import BrandsSection from "./components/BrandsSection";
import ContactSection from "./components/ContactSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <Hero />
      <AnimateOnScroll>
        <SolutionsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ProductsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CleanAirSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WhySection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <StepsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <PergolaSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <RealizationsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ReviewsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BlogSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FaqSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BrandsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
