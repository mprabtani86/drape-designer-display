import { useState } from "react";
import thumb1 from "@/assets/video-thumb-1.jpg";
import thumb2 from "@/assets/video-thumb-2.jpg";
import thumb3 from "@/assets/video-thumb-3.jpg";

const VIDEOS = [
  { thumb: thumb1, title: "Expert Installation Guide", tag: "Installation", id: "ScMzIvxBSi4" },
  { thumb: thumb2, title: "The Traditional Handloom Story", tag: "Craft", id: "ScMzIvxBSi4" },
  { thumb: thumb3, title: "Designer Collection Reveal", tag: "Showcase", id: "ScMzIvxBSi4" },
];

export function VideoGallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="videos" className="bg-brown py-24 md:py-32 px-6 text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16 reveal">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Video Gallery</span>
            <h2 className="text-4xl md:text-5xl font-display italic mt-3">The Gallery in Motion</h2>
          </div>
          <p className="text-cream/60 text-sm tracking-wide max-w-sm">
            Step inside our design process — from loom to luxury living room.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VIDEOS.map((v, idx) => (
            <button
              key={idx}
              onClick={() => setOpen(v.id)}
              className="group text-left reveal"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="relative aspect-video overflow-hidden border border-cream/10">
                <img
                  src={v.thumb}
                  alt={v.title}
                  width={896}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-brown text-lg pl-1 transition-transform duration-500 group-hover:scale-110">
                    ▶
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="text-sm font-medium tracking-wide uppercase">{v.title}</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{v.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-brown/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream text-xs uppercase tracking-[0.3em] hover:text-gold"
            onClick={() => setOpen(null)}
          >
            Close ✕
          </button>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${open}?autoplay=1`}
              title="Curtain video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
