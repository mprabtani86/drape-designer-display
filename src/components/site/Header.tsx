import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "Videos", href: "#videos" },
  { label: "Offers", href: "#offers" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-brown/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-brown">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 text-brown"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-current" />
          <span className="block w-6 h-px bg-current" />
          <span className="block w-4 h-px bg-current ml-auto" />
        </button>

        <a href="#home" className="text-right block">
          <div className="text-xl font-display font-bold tracking-tight text-brown">VIJAYDRAPE</div>
          <div className="text-[8px] uppercase tracking-[0.4em] text-gold -mt-1">Drapes &amp; Decor</div>
        </a>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-brown/5 animate-fade-up">
          <nav className="flex flex-col px-6 py-6 gap-5 text-xs font-semibold uppercase tracking-[0.2em] text-brown">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="hover:text-gold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
