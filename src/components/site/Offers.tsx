import { useEffect, useRef, useState } from "react";

const OFFERS = [
  {
    tag: "Season Exclusive",
    title: "20% Off Designer Curtains",
    body: "Save 20% on our entire Designer Curtains range. Limited to orders placed this month.",
    cta: "Claim Offer",
    dark: false,
    icon: "✦",
  },
  {
    tag: "White Glove Service",
    title: "Free Home Measurement",
    body: "Complimentary at-home measurement & consultation by our certified design advisors.",
    cta: "Schedule Visit",
    dark: true,
    icon: "✺",
  },
  {
    tag: "Bundle Loyalty",
    title: "Buy 2 Sets — Free Installation",
    body: "Order any two curtain sets and receive professional installation at no additional cost.",
    cta: "View Details",
    dark: false,
    icon: "❖",
  },
];

export function Offers() {
  const [i, setI] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % OFFERS.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    }
  }, [i]);

  return (
    <section id="offers" className="py-24 md:py-32 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14 reveal">
          <div className="h-px flex-1 bg-brown/10" />
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-gold whitespace-nowrap">
            Limited Engagements
          </h2>
          <div className="h-px flex-1 bg-brown/10" />
        </div>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6"
        >
          {OFFERS.map((o, idx) => (
            <article
              key={idx}
              className={`snap-start shrink-0 w-[85%] md:w-[420px] p-10 md:p-12 transition-transform duration-700 hover:-translate-y-2 ${
                o.dark
                  ? "bg-brown text-cream shadow-luxe"
                  : "bg-cream text-brown border border-brown/5 shadow-sm"
              }`}
            >
              <div
                className={`text-3xl mb-6 ${o.dark ? "text-gold" : "text-gold"}`}
                aria-hidden
              >
                {o.icon}
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.25em] ${
                  o.dark ? "text-gold" : "text-gold"
                }`}
              >
                {o.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-display my-5 leading-tight">{o.title}</h3>
              <p
                className={`text-sm mb-10 font-light leading-relaxed ${
                  o.dark ? "text-cream/70" : "text-brown/60"
                }`}
              >
                {o.body}
              </p>
              <a
                href="#contact"
                className={`inline-block text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-gold pb-1 ${
                  o.dark ? "text-gold" : "text-brown hover:text-gold"
                } transition-colors`}
              >
                {o.cta} →
              </a>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {OFFERS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Offer ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-gold" : "w-6 bg-brown/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
