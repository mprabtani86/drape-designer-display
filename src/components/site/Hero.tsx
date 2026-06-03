import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const SLIDES = [
  { img: hero1, eyebrow: "Bespoke Collection", title: "The Art of\nBespoke Windows" },
  { img: hero2, eyebrow: "Silk & Velvet", title: "Where Light\nBecomes Texture" },
  { img: hero3, eyebrow: "Atelier Series", title: "Drapery,\nTailored to You" },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={s.img}
            alt=""
            width={1920}
            height={1080}
            loading={idx === 0 ? "eager" : "lazy"}
            className={`w-full h-full object-cover ${idx === i ? "animate-slow-zoom" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-brown/20 to-cream/30" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl animate-fade-up" key={i}>
          <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold">
            {SLIDES[i].eyebrow}
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display italic text-cream leading-[1.05] whitespace-pre-line">
            {SLIDES[i].title}
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-sm md:text-base text-cream/85 font-light tracking-wide">
            A fusion of heritage handloom weaving and contemporary curtain design — tailored for the world's most
            elegant spaces.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#collections"
              className="px-10 py-4 bg-cream text-brown text-xs uppercase tracking-[0.25em] font-semibold hover:bg-gold hover:text-brown transition-all duration-500"
            >
              Explore Collection
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-cream/40 text-cream text-xs uppercase tracking-[0.25em] font-semibold hover:bg-cream hover:text-brown transition-all duration-500"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-px transition-all duration-500 ${
              idx === i ? "w-12 bg-gold" : "w-6 bg-cream/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
