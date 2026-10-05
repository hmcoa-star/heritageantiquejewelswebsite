/* =====================================================================
   HERITAGE ANTIQUE JEWELS — SITE SETTINGS
   Fill in the blanks below. Anything left empty ("") is simply hidden.
   Save the file, zip the site folder, upload to Cloudflare.
   ===================================================================== */
window.SITE = {
  email:     "enquiries@heritageantiquejewels.com",
  whatsapp:  "",   // international format, digits only, e.g. "85291234567"
  instagram: "",   // full link, e.g. "https://www.instagram.com/heritageantiquejewels"
  firstdibs: "",   // full link to your 1stDibs storefront
  cities:    ""    // e.g. "London · Hong Kong · New York"
};

/* Eras used for "Browse by era". The first value is the code you type
   in pieces.js (era: "art-deco"); leave these as they are. */
window.ERAS = [
  { id: "early",        name: "17th & 18th Century", dates: "Before 1800" },
  { id: "c19",          name: "19th Century",        dates: "1800 – 1899" },
  { id: "belle-epoque", name: "Belle Époque",        dates: "c. 1900 – 1915" },
  { id: "art-deco",     name: "Art Deco",            dates: "1920 – 1935" },
  { id: "mid-century",  name: "Mid-Century",         dates: "1940s – 1950s" },
  { id: "signed",       name: "Signed & Vintage",    dates: "Named houses & later pieces" }
];

window.CATEGORIES = [
  { id: "rings",     name: "Rings" },
  { id: "earrings",  name: "Earrings" },
  { id: "necklaces", name: "Necklaces & Pendants" },
  { id: "bracelets", name: "Bracelets" },
  { id: "brooches",  name: "Brooches" }
];
