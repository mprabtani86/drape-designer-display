import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const ITEMS = [
  { src: g1, label: "Sheer Linen", room: "Bedroom" },
  { src: g2, label: "Velvet Royale", room: "Library" },
  { src: g3, label: "Handloom Ochre", room: "Kitchen" },
  { src: g4, label: "Cascade Drape", room: "Lounge" },
  { src: g5, label: "Silk Macro", room: "Detail" },
  { src: g6, label: "Roman Blinds", room: "Office" },
];

export function Gallery() {
  return (
    <section id="collections" className="py-24 md:py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Collections</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mt-4">The Curtain Archive</h2>
          <p className="mt-5 max-w-xl text-brown/60 font-light">
            A curation of luxury curtain designs — from handloom heritage to contemporary drapes for every room.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {ITEMS.map((item, idx) => (
            <figure
              key={idx}
              className="break-inside-avoid relative overflow-hidden group reveal"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <img
                src={item.src}
                alt={`${item.label} – ${item.room}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-cream">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{item.room}</div>
                  <div className="font-display text-2xl">{item.label}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
