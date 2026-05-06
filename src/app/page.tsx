import Header from "@/components/lp/Header";
import Hero from "@/components/lp/Hero";
import Proof from "@/components/lp/Proof";
import Product from "@/components/lp/Product";
import TeamBento from "@/components/lp/TeamBento";
import About from "@/components/lp/About";
import Footer from "@/components/lp/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proof />
        <Product />
        <TeamBento />
        <About />
      </main>
      <Footer />
    </>
  );
}
