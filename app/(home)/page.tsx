import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/HeroComponent";
import Journey from "@/components/Jouney";
import Projects from "@/components/Project";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import React from "react";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Journey />
      <Footer />
    </main>
  );
}
