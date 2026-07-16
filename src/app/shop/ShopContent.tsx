"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

/**
 * Thorne dispensary integration.
 *
 * DISPENSARY_URL is Casey's canonical short link — attribution to her
 * practitioner account (PR2421092) is guaranteed through it.
 *
 * VERIFIED (browser-tested): direct product URLs do NOT carry dispensary
 * attribution — Thorne sets it server-side only when the visitor enters
 * through the /u/ dispensary page. Until Casey generates per-product links
 * from her Thorne portal, every buy button routes to the dispensary.
 *
 * When Casey provides portal-generated product links, set `link` on the
 * product and the button will use it instead of the dispensary fallback.
 *
 * PRODUCTS below are PLACEHOLDERS until Casey provides her curated list.
 * Prices are intentionally omitted so the site never shows stale pricing.
 */

const DISPENSARY_URL = "https://s.thorne.com/4wHIx";

type Product = {
  name: string;
  category: string;
  blurb: string;
  slug: string;
  image: string;
  /** Portal-generated per-product link from Casey's Thorne dashboard.
      When set, the buy button uses it instead of the dispensary fallback. */
  link?: string;
};

const productUrl = (product: Product) => product.link ?? DISPENSARY_URL;

const products: Product[] = [
  {
    name: "Collagen Plus",
    category: "Peptides & Protein",
    blurb:
      "Collagen peptides with nicotinamide riboside to support skin elasticity, hair, nails, and joint health from within.",
    slug: "collagen-plus",
    image: "/images/products/collagen-plus.png",
  },
  {
    name: "Creatine",
    category: "Performance",
    blurb:
      "One of the most researched supplements available — supports muscle performance, cellular energy, and cognitive function.",
    slug: "creatine",
    image: "/images/products/creatine.png",
  },
  {
    name: "Magnesium Bisglycinate",
    category: "Sleep & Stress",
    blurb:
      "A highly absorbable, gentle form of magnesium that supports restful sleep, muscle relaxation, and a calm stress response.",
    slug: "magnesium-bisglycinate",
    image: "/images/products/magnesium-bisglycinate.png",
  },
  {
    name: "Basic Nutrients 2/Day",
    category: "Daily Essentials",
    blurb:
      "A comprehensive daily multivitamin built on bioavailable nutrients — foundational coverage in just two capsules.",
    slug: "basic-nutrients-2-day",
    image: "/images/products/basic-nutrients-2-day.png",
  },
  {
    name: "Super EPA",
    category: "Heart & Brain",
    blurb:
      "Concentrated omega-3 fish oil (EPA + DHA) supporting cardiovascular health, brain function, and a healthy inflammatory response.",
    slug: "super-epa",
    image: "/images/products/super-epa.png",
  },
  {
    name: "Vitamin D-5,000",
    category: "Immune Support",
    blurb:
      "High-potency vitamin D3 for immune resilience, bone strength, and mood — especially through the low-sunlight months.",
    slug: "d-5-000-vitamin-d-capsule",
    image: "/images/products/vitamin-d-5000.png",
  },
];

const perks = [
  {
    title: "Practitioner-Grade",
    description:
      "Thorne supplements are NSF-certified and trusted by healthcare providers — a step above typical store-shelf brands.",
  },
  {
    title: "FSA / HSA Eligible",
    description:
      "Thorne accepts FSA and HSA funds through Truemed, so you can use pre-tax dollars on qualifying products.",
  },
  {
    title: "Shipped to Your Door",
    description:
      "Order through our dispensary and Thorne handles secure checkout, shipping, and returns directly.",
  },
];

export default function ShopContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Our Dispensary
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Shop <span className="italic text-gold-metallic">Supplements</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Professional-grade Thorne supplements, hand-selected by Casey
              Meeks, FNP-BC. Order through our dispensary and they ship straight
              to your door.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks strip */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-sm p-6 text-center"
            >
              <h3 className="font-display text-lg text-gold mb-2">
                {perk.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Product Grid */}
      <SectionWrapper className="border-t border-dark-border">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Featured Products
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-off-white">
            Casey&apos;s Picks
          </h2>
          <p className="text-gray-text text-sm mt-3 max-w-xl mx-auto">
            Every button opens our Thorne dispensary — search the product name
            there to see current pricing and order securely. Shopping through
            our dispensary keeps your purchase connected to your care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-sm overflow-hidden hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(212,168,46,0.12)] transition-all duration-300 group flex flex-col"
            >
              {/* Product photo — Thorne shots are on white, so the header gets
                  a soft off-white backdrop like a lit retail shelf */}
              <div className="relative bg-[#FAFAF7] h-52 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — Thorne supplement`}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 pt-6 flex flex-col flex-1">
              <span className="text-gold text-[10px] tracking-[0.25em] uppercase mb-3">
                {product.category}
              </span>
              <h3 className="font-display text-xl text-off-white mb-3 group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed mb-6 flex-1">
                {product.blurb}
              </p>
              <a
                href={productUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold-metallic hover:text-dark-bg hover:border-transparent px-5 py-2.5 rounded-sm text-xs font-medium tracking-wider uppercase transition-all duration-300"
                aria-label={`Shop for ${product.name} in our Thorne dispensary`}
              >
                Buy in Dispensary
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Full dispensary CTA */}
      <SectionWrapper>
        <div className="bg-dark-card border border-dark-border rounded-sm p-10 md:p-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-off-white mb-4">
            Looking for Something{" "}
            <span className="italic text-gold-metallic">Specific</span>?
          </h2>
          <p className="text-gray-text max-w-xl mx-auto mb-8 leading-relaxed">
            Browse the complete Thorne catalog through our dispensary — every
            purchase through our link supports the practice and keeps your care
            connected to your supplement plan.
          </p>
          <Button href={DISPENSARY_URL} target="_blank" rel="noopener noreferrer">
            Browse the Full Dispensary
          </Button>
          <p className="text-gray-text/60 text-xs leading-relaxed max-w-2xl mx-auto mt-8">
            These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease. Consult your healthcare provider
            before starting any supplement, especially if you are pregnant,
            nursing, or taking medication.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
