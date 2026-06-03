import fabric from "@/assets/fabric-detail.jpg";

const FEATURES = [
  "Custom Curtain Design & Consultation",
  "Premium Handloom & Imported Fabrics",
  "Exclusive Handloom Collection",
  "Home & Office Solutions",
  "White-Glove Professional Installation",
];

export function About() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="space-y-8 reveal">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1]">
            Curating Light &amp; <br />
            Texture Since 1994
          </h2>
          <p className="text-brown/70 leading-relaxed font-light max-w-md">
            At Aurelian, we believe curtains are the soul of a room. Our designers blend premium fabrics with
            handloom traditions to create window treatments that transform architecture into atmosphere.
          </p>
          <ul className="space-y-4 text-sm font-medium border-l border-gold/40 pl-6">
            {FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={fabric}
              alt="Close-up of premium handloom curtain fabric with gold thread weave"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-sm p-6 shadow-luxe">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Signature</div>
              <div className="font-display text-xl mt-1">Aurelian Linen No. 04</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
