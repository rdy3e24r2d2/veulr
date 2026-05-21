import Header from "@/components/lp/Header";
import Hero from "@/components/lp/Hero";
import Problem from "@/components/lp/Problem";
import Products from "@/components/lp/Products";
import Product from "@/components/lp/Product";
import HowItWorks from "@/components/lp/HowItWorks";
import AboutHeader from "@/components/lp/AboutHeader";
import MVV from "@/components/lp/MVV";
import Values from "@/components/lp/Values";
import TeamSection from "@/components/lp/TeamSection";
import CompanyInfo from "@/components/lp/CompanyInfo";
import Footer from "@/components/lp/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── プロダクト ── */}
        <Hero />
        <Problem />
        <Products />
        <Product />
        <HowItWorks />

        {/* ── 会社概要 ── */}
        <AboutHeader />
        <MVV />
        <Values />
        <TeamSection />
        <CompanyInfo />
      </main>
      <Footer />
    </>
  );
}
