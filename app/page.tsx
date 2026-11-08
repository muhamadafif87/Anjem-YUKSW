import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import HowToOrderSection from "./components/sections/HowToOrderSection";
import PricelistSection from "./components/sections/PricelistSection";
import JoinGroupSection from "./components/sections/JoinGroupSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[402px]">
      <Header />
      <main>
        <h1 className="mt-[47px] mb-[59px] flex h-[70px] items-center justify-center text-center font-heading text-[28px] leading-[31px] text-navy">
          <span>
            Butuh bantuan?
            <br />
            ANJEM YUKSW, siap bantu!
          </span>
        </h1>
        <div className="flex flex-col gap-[15px] px-6">
          <AboutSection />
          <ServicesSection />
          <HowToOrderSection />
          <PricelistSection />
          <JoinGroupSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}