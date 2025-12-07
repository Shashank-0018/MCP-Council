import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Add padding-top to account for fixed header */}
      <div className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
