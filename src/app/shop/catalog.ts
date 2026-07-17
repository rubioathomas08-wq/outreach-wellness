/**
 * Casey's full Thorne dispensary catalog — scraped from
 * thorne.com/u/PR2421092 (all 3 pages, 71 products) on 2026-07-15.
 *
 * Images hotlink Thorne's CDN (d1vo8zfysxy97v.cloudfront.net). If Thorne
 * rotates image URLs the card gracefully falls back to the product name.
 *
 * `slug` is the Thorne product page slug — kept for reference and for
 * per-product portal links when Casey generates them (set `link`).
 */

const CDN = "https://d1vo8zfysxy97v.cloudfront.net/media/product/";

export type CatalogProduct = {
  name: string;
  slug: string;
  image: string;
  /** Portal-generated per-product link with attribution; falls back to dispensary. */
  link?: string;
};

const p = (name: string, slug: string, img: string): CatalogProduct => ({
  name,
  slug,
  image: CDN + img,
});

export const catalog: CatalogProduct[] = [
  p("Vitamin D-5,000 — 60 Servings", "d-5-000-vitamin-d-capsule", "d138__v6d6301b3870baca3936f42dd3ac197ac421e097e.png"),
  p("5-MTHF 1 mg", "5-mthf-1-mg", "b129__v9e2dcbdfca9045f29cc531eca894e0722dd58f27.png"),
  p("5-MTHF 5 mg", "5-mthf-5-mg", "b132__vb756dcd0935201b31dcbf32c4d4a9df6c46a822c.png"),
  p("Vitamin D-10,000", "d-10-000", "d148__v652bc6486bc8dc70f0869ae1b5376934aab0d7bc.png"),
  p("Multi-Vitamin Elite — NSF Certified", "multi-vitamin-elite", "vm114__vdadbc3e6f8ea5ada4b8684fc62234a4b9c574489.png"),
  p("Multi-Vitamin Elite", "multi-vitamin-elite-vm114nc", "vm114nc__v59f2e2230168349549da2930659889eb3ad55612.png"),
  p("Vitamin D-5,000 — 120 Servings", "d-5-000-120", "d139__v8c920cd084ec5e0c5c85e08cb7ff28548df3e5b3.png"),
  p("Iron Bisglycinate", "iron-bisglycinate", "m226__vbaaaf58da43e4570486a71973c2e7172b52b8e79.png"),
  p("Stress B-Complex", "stress-b-complex", "b107__v5dabbd1393b8a7ff4f391f3839b63fa757822234.png"),
  p("B-Complex #12", "b-complex-12", "b112__vee5e350a0551e93986381fda90af486aba9927b0.png"),
  p("B-Complex #6", "b-complex-6", "b106__v1823ebf262209c7fc9a0d6c26856dff4e1ea7843.png"),
  p("Omega-3 with CoQ10", "omega-3-w-coq10", "sp616__vb9b6e8c8d8273dcb69d1daf030bf4f42062976c1.png"),
  p("Creatine — Travel Packs", "creatine-sf903p", "sf903p__v828348ce760698e005a5a00517926567469207be.png"),
  p("Women's Daily Probiotic", "women-s-daily-probiotic", "sf817__v492040590869c50ff5d1fe417ccf5da73a2ef7fc.png"),
  p("Advanced Iron Complex", "ferrasorb-reg", "sf750__vd10ee326d9b12caa150b68428ae3619ef4b145de.png"),
  p("FloraMend Prime Probiotic", "floramend-prime-probiotic", "sf811__v36c181ba00d56cee4779bf25b82da54bf1bb28c5.png"),
  p("Bacillus Coagulans", "bacillus-coagulans", "sf758__v3e8fa1f9588d8a54e1b172f23b8701c8be439cec.png"),
  p("Betaine HCL & Pepsin", "betaine-hcl-pepsin-225-s", "sd415__v367c18cb4ece28439d8f2ad70a6a3c5729b62840.png"),
  p("FloraSport 20B", "florasport-20b", "sf818__ve914d54c2e9c194f29393684b2a95f9afc00f90b.png"),
  p("Hormone Advantage", "dim-crucera", "sp684__v7fc7ce172823963cfb6d39929f46d8c69639f28a.png"),
  p("GI Relief", "gi-encap-reg-1", "sf714__vb37616fd858ea3929ad67e31a10758eecf81055c.png"),
  p("Menopause Stack", "menopause-bun028", "bun028__vf5626e8fb8880430084a2699069c56d902d77899.png"),
  p("Weight Management Stack", "weight-management-bundle", "bun010__ve9fc8b3bb783b65d957f8dcf3485a4b5c88de761.png"),
  p("Glutathione-SR", "glutathione-sr", "sa540__vcd228bab4f3d0f5e343dc0a69b806f8fd90f3260.png"),
  p("Green Tea Phytosome", "green-tea-phytosome", "sb336__ve001239aea0eab398abd9e727848b77c888f4d6e.png"),
  p("Stress Management Stack", "stress-bundle", "bun007__vdad29a120c97622927750ac5c3a9b5c903336ce8.png"),
  p("Complete Biotic", "complete-biotic", "sf827__vbf2a33f7f4aa4a9f44d403a2ff1e5d045619ea25.png"),
  p("Biotin", "biotin-8", "b118__v3ce234a94576d6e1ebdee96ae90e45ab6341199c.png"),
  p("CoQ10", "q-best-100", "sp624__v0e9c43db03041def65f6aef69118044fc2cc0839.png"),
  p("RecoveryPro", "recoverypro-sp114", "sp114__vf079f747ed39dadb13024b703d966318430f46a9.png"),
  p("Super EPA — NSF Certified", "super-epa", "sp608__v85ffd3158c5fcd199d35f8f66966125217d62306.png"),
  p("Berberine — 200 mg", "berbercap-reg", "sf760__v8c446e455f33015a7cbaf3d6e6805b7e909d5595.png"),
  p("Berberine", "berberine-500", "sf800__vd424273289116ed602cb97bcef5ca314e2b9ff03.png"),
  p("Basic Nutrients 2/Day — NSF Certified", "basic-nutrients-2-day", "vm2__v22fab5aec14f3a11312849c9781a5ef32c69c8d4.png"),
  p("Creatine — 90 Servings", "creatine", "sf903__ve8382489c6ce9fb7f28cdddef00e6f1ece146591.png"),
  p("Curcumin Phytosome — NSF Certified", "meriva-500-sf-nsf", "sf814n__va1e22adee2de5e2fbde46dc05b01b6712d5e3007.png"),
  p("Basic Nutrients 2/Day — 30 Servings", "basic-nutrients-2-day-vm2nc", "vm2nc__v22fab5aec14f3a11312849c9781a5ef32c69c8d4.png"),
  p("Creatine — 180 Servings", "creatine-sf904", "sf904__v87fa43541d282e0b20d879217b57c150a5e2a6ad.png"),
  p("Magnesium Glycinate — 90 Servings", "magnesium-glycinate", "m284__v722511088310a527d9bd4f32ff1f8a38e3e4fa0f.png"),
  p("Creatine — Strawberry", "creatine-strawberry-flavored", "sf905__vba71a32a378257904e1605056e5ac914dcefe59a.png"),
  p("Creatine — Pineapple Orange", "creatine-pineapple-orange-flavored", "sf906__vdebab3684bf3a3daa50144a2e8b7d6591ca554be.png"),
  p("Basic Nutrients 2/Day — 60 Servings", "basic-nutrients-2-day-120", "vm8nc__v16fd3b4bddb4189515efeb9cef6fcc4987ea4a6d.png"),
  p("Magnesium Glycinate — 180 Servings", "magnesium-glycinate-180", "m285__v28c002781997b24257de9245f683555921cccc04.png"),
  p("Perimenopause Complete", "perimenopause-complete", "sf831__vb50a19aa9d7e22d62eccd3bdf72762207f635fe4.png"),
  p("Men's Multi 50+", "mens-multi-50", "vm6m__vba014fa5c3a6b89ee6b7df094d9342d4c537d975.png"),
  p("Ashwagandha", "ashwagandha", "sf828__v859970c678922ca16ed2a0f883614b8a597361b3.png"),
  p("Gut Health Stack", "gut-health-bundle", "bun011__v001eb45c5df5151353de40d929fbb18acd7d36fd.webp"),
  p("Sleep Stack", "sleep-bundle", "bun003__v65f6981e3046b862850b2c2878a16625a2490685.png"),
  p("Liver Cleanse", "liver-cleanse", "sf769__v3be2460b553b5820e56cecbac909550fe33a2077.png"),
  p("Sleep Stack for Athletes", "sleep-bundle-for-athletes", "bun019__v50ae8e2dd9baa796c9e11016ce65483deafd4393.png"),
  p("Collagen Plus", "collagen-plus", "sp685__vbb2c7387b51f59bc658fd90628eb7a0474286a87.png"),
  p("Omega Superb — Lemon Berry", "omega-superb-ndash-lemon-berry", "sp639__vdd78ffa29a4ad8d9787bc3727bcc9f39a195b674.png"),
  p("FiberMend", "fibermend-trade", "sp635__vd54991d4419fa016c75832c8752b0703c9ed4c4c.png"),
  p("Women's Multi 50+", "womens-multi-50", "vm6w__v4c037a78c7de8ca33010bde2442a6206017f726f.png"),
  p("Leaky Gut Support", "enteromend", "sp681__v66b3c42a04b3f08884a6149cd617f7610d75b5a9.webp"),
  p("Collagen Fit", "collagen-fit", "sp686__v92634db5860c75b546b72cf82821793c299db829.png"),
  p("Men's Health Stack", "men-s-health-stack", "bun042__v4068a232a012528e0b06583d31d2460f1a0ccf78.png"),
  p("Advanced Pre-Workout", "advanced-pre-workout-rainbow-sherbet-flavor", "sp689__va361afb63494fb2188cd5896f1ff5231bc75e2ac.png"),
  p("Ovarian Care", "ovarian-care", "sf823__vec6fb5f6b3c89a36300f726c19d8439d8b4cb08f.png"),
  p("Brain Factors", "brain-factors", "sf752__v92fe46f3bdc9de3202989f233756ff11eeae7be5.png"),
  p("Broccoli Seed Extract", "crucera-sgs", "sp660__v0bc92c7bbc38958c3e6b1cf6d7516e9133de907f.png"),
  p("Ginseng Plus", "ginseng-plus", "sf826__v29a0e0172681e97db02fff7f200dc3e70cf2588f.png"),
  p("Vitamin D + K2 Liquid", "vitamin-d-k2-liquid", "kd500__v1f2f6991180c90d1d7e83b441748f077d3d853d8.png"),
  p("Metabolic Health", "metabolic-health", "sf801__vbc597c91d771ec5a33eb86e25913f7ff77444cf8.png"),
  p("Advanced Testosterone Support", "advanced-testosterone-support", "sf824__v199213a9ee92e6321db13d542638b566ca7b12aa.png"),
  p("Deep Sleep Complex", "deep-sleep-complex", "sf829__v7c047b5986f137932581c97fe90ba98edfd7513a.png"),
  p("GLP-1 Support Stack — Berry", "glp-1-support-stack-berry", "bun043__v299b88609288fcf525e4c5344998302cae5a07cc.png"),
  p("GLP-1 Support Stack — Lemon", "glp-1-support-stack-lemon", "bun044__v922b0a74a33cca870d82bcbfc0b5c267abe66c9e.png"),
  p("Recovery Stack — Berry", "recovery-stack-berry", "bun038__v291e9255895d6db29a04965299c8cce1963d4ba5.png"),
  p("Recovery Stack — Lemon", "recovery-stack-lemon", "bun039__va3f3cfef209a56ef22db2668431e288bfd8f8025.png"),
  p("Women's Libido Boost", "womens-libido-boost", "sf832__v2aad2ceab0bab0382d237207547fcbfc7c5b4ec9.png"),
];
