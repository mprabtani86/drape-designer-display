import { useState, type FormEvent } from "react";

export function ContactFooter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer id="contact" className="bg-brown text-cream pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 pb-20">
        <div className="reveal">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-10">Begin Your Project</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                required
                type="text"
                placeholder="FULL NAME"
                className="bg-transparent border-b border-cream/20 py-4 text-[11px] uppercase tracking-[0.2em] placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors w-full"
              />
              <input
                required
                type="tel"
                placeholder="MOBILE NUMBER"
                className="bg-transparent border-b border-cream/20 py-4 text-[11px] uppercase tracking-[0.2em] placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors w-full"
              />
            </div>
            <input
              required
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent border-b border-cream/20 py-4 text-[11px] uppercase tracking-[0.2em] placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors w-full"
            />
            <textarea
              required
              placeholder="YOUR MESSAGE"
              rows={4}
              className="bg-transparent border-b border-cream/20 py-4 text-[11px] uppercase tracking-[0.2em] placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors w-full resize-none"
            />
            <button
              type="submit"
              className="w-full py-5 gold-gradient text-brown font-bold text-xs uppercase tracking-[0.25em] mt-4 hover:opacity-90 transition-opacity"
            >
              {sent ? "Thank You — We'll Be in Touch" : "Submit Inquiry"}
            </button>
          </form>
        </div>

        <div className="space-y-10 reveal">
          <div>
            <h3 className="text-gold text-xs uppercase tracking-[0.3em] mb-5 font-bold">Our Studio</h3>
            <p className="text-cream/70 font-light leading-loose text-sm">
              Aurelian Design House
              <br />
              42 Velvet Boulevard, Suite 500
              <br />
              New York, NY 10012
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <a href="https://wa.me/15552345678" className="hover:text-gold transition-colors">
              WhatsApp: +1 (555) 234-5678
            </a>
            <a href="tel:+15559876543" className="hover:text-gold transition-colors">
              Phone: +1 (555) 987-6543
            </a>
            <a href="mailto:studio@aurelian.com" className="hover:text-gold transition-colors">
              Email: studio@aurelian.com
            </a>
          </div>

          <div className="w-full h-64 border border-cream/10 overflow-hidden">
            <iframe
              title="Aurelian Studio location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9960%2C40.7228&layer=mapnik"
              className="w-full h-full grayscale opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="font-display font-bold text-2xl">AURELIAN</div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-gold mt-1">Drapes &amp; Decor</div>
            <p className="mt-6 text-sm text-cream/60 max-w-xs font-light leading-relaxed">
              Bespoke curtain design and handloom decor for residences and offices since 1994.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><a href="#home" className="hover:text-gold">Home</a></li>
              <li><a href="#collections" className="hover:text-gold">Collections</a></li>
              <li><a href="#videos" className="hover:text-gold">Videos</a></li>
              <li><a href="#offers" className="hover:text-gold">Offers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>Custom Drapery</li>
              <li>Handloom Fabrics</li>
              <li>Roman Blinds</li>
              <li>Professional Installation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/5 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.25em] text-cream/40">
            <div className="flex gap-6 md:gap-8">
              <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cream transition-colors">Terms &amp; Conditions</a>
            </div>
            <div className="text-center">&copy; {new Date().getFullYear()} Aurelian Drapes &amp; Decor.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
              <a href="#" className="hover:text-gold transition-colors">Houzz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
