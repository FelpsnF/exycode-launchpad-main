import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <section id="produtos">
          <Products />
        </section>
        <section id="features">
          <Features />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
