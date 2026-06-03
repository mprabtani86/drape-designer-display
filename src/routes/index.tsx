import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VideoGallery } from "@/components/site/VideoGallery";
import { Offers } from "@/components/site/Offers";
import { Gallery } from "@/components/site/Gallery";
import { ContactFooter } from "@/components/site/ContactFooter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIJAYDRAPE — Bespoke Curtain Design & Handloom Decor" },
      {
        name: "description",
        content:
          "VIJAYDRAPE crafts custom curtains, handloom drapes and luxury window treatments for homes and offices. Premium fabrics, white-glove installation.",
      },
      { property: "og:title", content: "VIJAYDRAPE — Bespoke Curtain Design & Handloom Decor" },
      {
        property: "og:description",
        content:
          "Custom curtains, handloom drapes and luxury window treatments. Premium fabrics, white-glove installation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "VIJAYDRAPE Drapes & Decor",
          description:
            "Bespoke curtain design and handloom decor for residences and offices.",
          telephone: "+1-555-987-6543",
          address: {
            "@type": "PostalAddress",
            streetAddress: "42 Velvet Boulevard, Suite 500",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10012",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-cream text-brown font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoGallery />
        <Offers />
        <Gallery />
      </main>
      <ContactFooter />
    </div>
  );
}
