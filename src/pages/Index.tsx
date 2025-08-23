import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductsSection from "@/components/ProductsSection";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ProductsSection />
      <ClientLogos />  
      <Footer />
    </div>
  );
};

export default Index;
