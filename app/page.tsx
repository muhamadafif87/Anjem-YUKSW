import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { SectionsProvider } from "./components/SectionsProvider";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import HowToOrderSection from "./components/sections/HowToOrderSection";
import PricelistSection from "./components/sections/PricelistSection";
import JoinGroupSection from "./components/sections/JoinGroupSection";

export default function Home() {
  return (
    <SectionsProvider>
      <Header />
      <div className="mx-auto min-h-screen w-full max-w-[402px] pt-[73px]">
        <main>
          <h1 className="mt-[47px] mb-[59px] flex h-[70px] animate-fade-up items-center justify-center text-center font-heading text-[28px] leading-[31px] text-navy">
            <span>
              Butuh bantuan?
              <br />
              ANJEM YUKSW, siap bantu!
            </span>
          </h1>
          <div className="flex flex-col gap-[15px] px-6">
            <Reveal><AboutSection /></Reveal>
            <Reveal delay={80}><ServicesSection /></Reveal>
            <Reveal delay={160}><HowToOrderSection /></Reveal>
            <Reveal delay={80}><PricelistSection /></Reveal>
            <Reveal delay={160}><JoinGroupSection /></Reveal>
          </div>
        </main>
        <Reveal><Footer /></Reveal>
      </div>
    </SectionsProvider>
  );
}