import { DottedSurface } from "@/components/ui/dotted-surface";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Reviews } from "@/components/sections/reviews";
import { Contact } from "@/components/sections/contact";

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-white/20">
      <DottedSurface />
      <div className="relative z-10">
        <Header />

        <main>
          {/* HERO SECTION */}
          <section id="about" className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden">
            {/* Radial Gradient Overlay from dot.md */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-1/2 left-1/2 w-full h-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_60%)] blur-[100px]"
            />

            <div className="relative z-10 max-w-4xl space-y-8 pt-20">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up">
                "Bir Tek Düşüncelere <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  Baskı Yapmıyoruz"
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Tabela, dijital baskı ve promosyon ürünlerinde kurumsal çözüm ortağınız.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a href="#services" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-white/20">
                  Hizmetleri İncele
                </a>
                <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm">
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </section>

          {/* Placeholder for content height removed */}
          <Services />
          <Portfolio />
          <Reviews />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
