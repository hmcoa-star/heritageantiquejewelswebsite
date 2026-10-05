/* =====================================================================
   HERITAGE ANTIQUE JEWELS — THE COLLECTION
   Every piece on the site comes from this list.

   TO ADD A PIECE:
   1. Put its photos in images/catalogue/  (e.g. my-sapphire-ring-1.jpg)
      Optional video: put it in videos/     (e.g. my-sapphire-ring.mp4, MP4, under ~15MB)
   2. Copy the block below, paste it at the top of the list, and fill it in:

   {
     id: "my-sapphire-ring",          // lowercase, hyphens, no spaces - must be unique
     name: "Sapphire Ring",
     circa: "c. 1925 · French",       // shown under the name
     era: "art-deco",                 // early, c19, belle-epoque, art-deco, mid-century, signed  (or "" )
     category: "rings",               // rings, earrings, necklaces, bracelets, brooches
     description: "Describe the piece here.",
     images: ["images/catalogue/my-sapphire-ring-1.jpg", "images/catalogue/my-sapphire-ring-2.jpg"],
     video: "videos/my-sapphire-ring.mp4",   // or ""
     price: "Price on request",
     buy: ""                          // optional: a Stripe payment link to show a Purchase button
   },

   3. Zip the site folder and upload it to Cloudflare. The piece appears in the
      collection and era pages straight away.
   To hide a sold piece without deleting it, add:  hidden: true,
   ===================================================================== */
window.PIECES = [
  {
    "id": "antique-dragon-bracelet",
    "name": "Antique Dragon Bracelet",
    "circa": "17th century",
    "era": "early",
    "category": "bracelets",
    "description": "Silver bracelet modelled as a coiled dragon, set with turquoise and diamonds. 17th-century work.",
    "images": [
      "images/catalogue/antique-dragon-bracelet"
    ],
    "thumb": "images/catalogue/antique-dragon-bracelet-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "art-deco-bird-of-paradise-emerald-brooch",
    "name": "Bird of Paradise Brooch with 50ct Emerald",
    "circa": "Art Deco period · French",
    "era": "art-deco",
    "category": "brooches",
    "description": "18k yellow gold and platinum brooch centred on a 50ct cabochon-cut emerald. The wings and plumage are highlighted with old-cut diamonds. French work of the Art Deco period.",
    "images": [
      "images/catalogue/art-deco-bird-of-paradise-emerald-brooch"
    ],
    "thumb": "images/catalogue/art-deco-bird-of-paradise-emerald-brooch-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "enamel-bird-of-paradise-brooch",
    "name": "Enamel Bird of Paradise Brooch",
    "circa": "",
    "era": null,
    "category": "brooches",
    "description": "19.2kt yellow gold and enamel. The bird holds a natural pearl and is detachable, so it can be worn as a pendant or as a brooch.",
    "images": [
      "images/catalogue/enamel-bird-of-paradise-brooch"
    ],
    "thumb": "images/catalogue/enamel-bird-of-paradise-brooch-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "emerald-girandole-earrings",
    "name": "Emerald Girandole Earrings",
    "circa": "",
    "era": null,
    "category": "earrings",
    "description": "18kt white gold girandole earrings, fully articulated and set with tear-drop emeralds and small brilliant-cut diamonds.",
    "images": [
      "images/catalogue/emerald-girandole-earrings"
    ],
    "thumb": "images/catalogue/emerald-girandole-earrings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "18th-century-rose-cut-diamond-brooch",
    "name": "18th-Century Rose-Cut Diamond Brooch",
    "circa": "18th century · French",
    "era": "early",
    "category": "brooches",
    "description": "Antique 18k yellow gold brooch set with rose-cut diamonds. French work.",
    "images": [
      "images/catalogue/18th-century-rose-cut-diamond-brooch"
    ],
    "thumb": "images/catalogue/18th-century-rose-cut-diamond-brooch-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "diamond-flower-bouquet-brooch",
    "name": "Diamond Flower Bouquet Brooch",
    "circa": "Vintage",
    "era": "signed",
    "category": "brooches",
    "description": "Large 18kt white gold flower bouquet brooch set with round diamonds, centred on a larger diamond of about 2ct.",
    "images": [
      "images/catalogue/diamond-flower-bouquet-brooch"
    ],
    "thumb": "images/catalogue/diamond-flower-bouquet-brooch-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "platinum-diamond-double-clip-15ct",
    "name": "Diamond Double Clip Brooch, 15ct",
    "circa": "19th century · Portuguese",
    "era": "c19",
    "category": "brooches",
    "description": "Antique platinum double clip set with 15ct of high-quality diamonds. Portuguese work, 19th century.",
    "images": [
      "images/catalogue/platinum-diamond-double-clip-15ct"
    ],
    "thumb": "images/catalogue/platinum-diamond-double-clip-15ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "tremblant-flower-bouquet-brooch",
    "name": "“Tremblant” Flower Bouquet Brooch",
    "circa": "Early 1900s · Portuguese",
    "era": "belle-epoque",
    "category": "brooches",
    "description": "White gold and silver tremblant brooch set with antique-cut, 8/8-cut and rose-cut diamonds. Portuguese work, early 1900s.",
    "images": [
      "images/catalogue/tremblant-flower-bouquet-brooch"
    ],
    "thumb": "images/catalogue/tremblant-flower-bouquet-brooch-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "platinum-diamond-pendant-5ct",
    "name": "Platinum Diamond Pendant, 5ct",
    "circa": "c. 1900",
    "era": "belle-epoque",
    "category": "necklaces",
    "description": "Platinum pendant set with 5ct of diamonds. Circa 1900.",
    "images": [
      "images/catalogue/platinum-diamond-pendant-5ct"
    ],
    "thumb": "images/catalogue/platinum-diamond-pendant-5ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "sapphire-flower-ear-clips",
    "name": "Sapphire Flower Ear Clips",
    "circa": "Vintage",
    "era": "signed",
    "category": "earrings",
    "description": "14k white gold ear clips. The petals are pavé-set with sapphires in shades of blue and small brilliant diamonds, with an oval sapphire at the centre.",
    "images": [
      "images/catalogue/sapphire-flower-ear-clips"
    ],
    "thumb": "images/catalogue/sapphire-flower-ear-clips-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "aquamarine-pendant-20ct",
    "name": "Aquamarine Pendant, 20ct",
    "circa": "19th century · Portuguese",
    "era": "c19",
    "category": "necklaces",
    "description": "19.2kt gold and silver pendant set with a 20ct translucent aquamarine of good colour intensity. Portuguese work, 19th century.",
    "images": [
      "images/catalogue/aquamarine-pendant-20ct"
    ],
    "thumb": "images/catalogue/aquamarine-pendant-20ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-platinum-diamond-earrings",
    "name": "Antique Diamond Earrings",
    "circa": "19th century · Portuguese",
    "era": "c19",
    "category": "earrings",
    "description": "Antique platinum and diamond earrings. Portuguese work, 19th century.",
    "images": [
      "images/catalogue/antique-platinum-diamond-earrings"
    ],
    "thumb": "images/catalogue/antique-platinum-diamond-earrings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-ruby-diamond-brooch",
    "name": "Antique Ruby & Diamond Brooch",
    "circa": "19th century · Portuguese",
    "era": "c19",
    "category": "brooches",
    "description": "Antique brooch set in platinum with diamonds and rubies of strong intensity. Portuguese work, 19th century.",
    "images": [
      "images/catalogue/antique-ruby-diamond-brooch"
    ],
    "thumb": "images/catalogue/antique-ruby-diamond-brooch-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "diamond-drop-earrings-9ct",
    "name": "Diamond Drop Earrings, 9ct",
    "circa": "c. 1920",
    "era": "art-deco",
    "category": "earrings",
    "description": "Diamond, platinum and 18k white gold drop ear pendants. Main diamonds 5ct, drops 4ct; total diamond weight 9ct. Circa 1920.",
    "images": [
      "images/catalogue/diamond-drop-earrings-9ct"
    ],
    "thumb": "images/catalogue/diamond-drop-earrings-9ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-chrysoberyl-earrings",
    "name": "Antique Chrysoberyl Earrings",
    "circa": "16th – 17th century · Portuguese",
    "era": "early",
    "category": "earrings",
    "description": "Antique chrysoberyl earrings in silver. Portuguese work, 16th–17th century.",
    "images": [
      "images/catalogue/antique-chrysoberyl-earrings"
    ],
    "thumb": "images/catalogue/antique-chrysoberyl-earrings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "old-mine-cut-diamond-earrings-4ct",
    "name": "Old Mine-Cut Diamond Earrings, 4ct",
    "circa": "Late 19th century · Portuguese",
    "era": "c19",
    "category": "earrings",
    "description": "Antique 18k yellow gold earrings with 4ct of old mine-cut diamonds. Portuguese work, late 19th century.",
    "images": [
      "images/catalogue/old-mine-cut-diamond-earrings-4ct"
    ],
    "thumb": "images/catalogue/old-mine-cut-diamond-earrings-4ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "nardi-style-earrings",
    "name": "Nardi-Style Earrings",
    "circa": "19th century",
    "era": "c19",
    "category": "earrings",
    "description": "Antique 19th-century earrings in the Nardi style, in wood with diamonds, rubies, tourmalines and pearls.",
    "images": [
      "images/catalogue/nardi-style-earrings"
    ],
    "thumb": "images/catalogue/nardi-style-earrings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "briolette-ruby-diamond-earrings",
    "name": "Diamond & Briolette Ruby Earrings",
    "circa": "c. 1920",
    "era": "art-deco",
    "category": "earrings",
    "description": "18k white gold earrings with 3.10ct of diamonds and two briolette-shaped rubies. Circa 1920.",
    "images": [
      "images/catalogue/briolette-ruby-diamond-earrings"
    ],
    "thumb": "images/catalogue/briolette-ruby-diamond-earrings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "garnet-torsade-necklace",
    "name": "Garnet Torsade Necklace",
    "circa": "Vintage",
    "era": "signed",
    "category": "necklaces",
    "description": "Torsade of garnet bead strands with a cut rock-crystal and 18kt gold clasp, set with diamonds and a tear-drop tourmaline.",
    "images": [
      "images/catalogue/garnet-torsade-necklace"
    ],
    "thumb": "images/catalogue/garnet-torsade-necklace-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "gold-ruby-diamond-earrings",
    "name": "Gold, Ruby & Diamond Earrings",
    "circa": "Late 19th century · Portuguese",
    "era": "c19",
    "category": "earrings",
    "description": "Antique 19.2kt yellow gold earrings with 5ct of diamonds and rubies of strong intensity. Portuguese work, late 19th century.",
    "images": [
      "images/catalogue/gold-ruby-diamond-earrings"
    ],
    "thumb": "images/catalogue/gold-ruby-diamond-earrings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "art-deco-pearl-choker",
    "name": "Art Deco Pearl Choker",
    "circa": "Art Deco period · Portuguese",
    "era": "art-deco",
    "category": "necklaces",
    "description": "Cultured pearl choker with a large centre diamond, rubies and emeralds. Portuguese work of the Art Deco period.",
    "images": [
      "images/catalogue/art-deco-pearl-choker"
    ],
    "thumb": "images/catalogue/art-deco-pearl-choker-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "art-deco-old-european-diamond-earrings",
    "name": "Art Deco Diamond Earrings, 3ct",
    "circa": "c. 1920 · Italian",
    "era": "art-deco",
    "category": "earrings",
    "description": "Platinum earrings with 3ct of old European-cut diamonds. Italian work of the Art Deco period, circa 1920.",
    "images": [
      "images/catalogue/art-deco-old-european-diamond-earrings"
    ],
    "thumb": "images/catalogue/art-deco-old-european-diamond-earrings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-diamond-earrings-5ct",
    "name": "Antique Diamond Earrings, 5ct",
    "circa": "19th century · Portuguese",
    "era": "c19",
    "category": "earrings",
    "description": "Antique 19.2kt yellow gold and silver earrings with 5ct of old European-cut diamonds. Portuguese work, 19th century.",
    "images": [
      "images/catalogue/antique-diamond-earrings-5ct"
    ],
    "thumb": "images/catalogue/antique-diamond-earrings-5ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "angel-wings-diamond-necklace",
    "name": "Angel Wings Diamond Necklace",
    "circa": "1950s · Portuguese",
    "era": "mid-century",
    "category": "necklaces",
    "description": "19.2kt white gold chain of applied articulated elements on an angel-wings theme, with three central drops set with brilliant-cut diamonds (ca. 4.50ct). Portuguese work, circa 1950s.",
    "images": [
      "images/catalogue/angel-wings-diamond-necklace"
    ],
    "thumb": "images/catalogue/angel-wings-diamond-necklace-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "van-cleef-arpels-sapphire-ring",
    "name": "Van Cleef & Arpels Sapphire Ring",
    "circa": "Signed Van Cleef & Arpels",
    "era": "signed",
    "category": "rings",
    "description": "18k yellow gold ring centred by a 10ct sugarloaf unheated Ceylon sapphire of strong intensity, within an entourage of old-cut diamonds.",
    "images": [
      "images/catalogue/van-cleef-arpels-sapphire-ring"
    ],
    "thumb": "images/catalogue/van-cleef-arpels-sapphire-ring-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "damiani-diamond-ring",
    "name": "Damiani Diamond Ring",
    "circa": "Signed Damiani",
    "era": "signed",
    "category": "rings",
    "description": "Damiani 18k yellow gold ring set with a brilliant-cut diamond.",
    "images": [
      "images/catalogue/damiani-diamond-ring"
    ],
    "thumb": "images/catalogue/damiani-diamond-ring-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "emerald-cabochon-baguette-diamond-ring",
    "name": "Emerald Cabochon & Baguette Diamond Ring",
    "circa": "",
    "era": null,
    "category": "rings",
    "description": "18kt white gold ring centred by a 5ct sugarloaf cabochon emerald, surrounded by 5ct of baguette diamonds.",
    "images": [
      "images/catalogue/emerald-cabochon-baguette-diamond-ring"
    ],
    "thumb": "images/catalogue/emerald-cabochon-baguette-diamond-ring-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "platinum-diamond-chandelier-earrings-15ct",
    "name": "Diamond Chandelier Earrings, 15ct",
    "circa": "c. 1920",
    "era": "art-deco",
    "category": "earrings",
    "description": "Pair of 950 platinum and diamond chandelier earrings with 15ct of diamonds. Circa 1920.",
    "images": [
      "images/catalogue/platinum-diamond-chandelier-earrings-15ct"
    ],
    "thumb": "images/catalogue/platinum-diamond-chandelier-earrings-15ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "platinum-diamond-ring-1-52ct",
    "name": "Diamond Ring, 1.52ct",
    "circa": "Vintage",
    "era": "signed",
    "category": "rings",
    "description": "Vintage platinum ring set with one central 1.52ct brilliant-cut diamond and surrounding diamonds of approximately 2ct.",
    "images": [
      "images/catalogue/platinum-diamond-ring-1-52ct"
    ],
    "thumb": "images/catalogue/platinum-diamond-ring-1-52ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-rose-gold-serpent-ring",
    "name": "Antique Serpent Ring",
    "circa": "c. 1900",
    "era": "belle-epoque",
    "category": "rings",
    "description": "Antique 18kt rose gold and diamond serpent ring. Circa 1900.",
    "images": [
      "images/catalogue/antique-rose-gold-serpent-ring"
    ],
    "thumb": "images/catalogue/antique-rose-gold-serpent-ring-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "gucci-panther-ring",
    "name": "Gucci Panther Ring",
    "circa": "Signed Gucci",
    "era": "signed",
    "category": "rings",
    "description": "Gucci panther ring in 18k yellow gold.",
    "images": [
      "images/catalogue/gucci-panther-ring"
    ],
    "thumb": "images/catalogue/gucci-panther-ring-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "ruby-diamond-cluster-ring-2ct",
    "name": "Ruby & Diamond Ring, 2ct",
    "circa": "",
    "era": null,
    "category": "rings",
    "description": "18kt yellow gold and platinum ring with a 2ct centre ruby of strong colour and 2ct of diamonds.",
    "images": [
      "images/catalogue/ruby-diamond-cluster-ring-2ct"
    ],
    "thumb": "images/catalogue/ruby-diamond-cluster-ring-2ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "sapphire-dome-ring-10ct",
    "name": "Sapphire Dome Ring, 10ct",
    "circa": "Antique · French",
    "era": null,
    "category": "rings",
    "description": "Antique 18k white gold dome ring centred with an unheated oval Ceylon sapphire of approximately 10ct and 2ct of old-cut diamonds. French work.",
    "images": [
      "images/catalogue/sapphire-dome-ring-10ct"
    ],
    "thumb": "images/catalogue/sapphire-dome-ring-10ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "angel-diamond-ring-1-50ct",
    "name": "Angel Diamond Ring, 1.50ct",
    "circa": "",
    "era": null,
    "category": "rings",
    "description": "18kt yellow gold ring with a 1.50ct centre diamond held by two angels.",
    "images": [
      "images/catalogue/angel-diamond-ring-1-50ct"
    ],
    "thumb": "images/catalogue/angel-diamond-ring-1-50ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "marquise-ruby-ring-2ct",
    "name": "Marquise Ruby Ring, 2ct",
    "circa": "",
    "era": null,
    "category": "rings",
    "description": "18k white gold ring set with a 2ct marquise-shaped ruby.",
    "images": [
      "images/catalogue/marquise-ruby-ring-2ct"
    ],
    "thumb": "images/catalogue/marquise-ruby-ring-2ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "platinum-diamond-ring-3ct",
    "name": "Platinum Diamond Ring, 3ct",
    "circa": "",
    "era": null,
    "category": "rings",
    "description": "950 platinum ring set with 3ct of diamonds.",
    "images": [
      "images/catalogue/platinum-diamond-ring-3ct"
    ],
    "thumb": "images/catalogue/platinum-diamond-ring-3ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "white-gold-diamond-bracelet-1900",
    "name": "Diamond Bracelet",
    "circa": "c. 1900 · Portuguese",
    "era": "belle-epoque",
    "category": "bracelets",
    "description": "19.2kt white gold and diamond bracelet. Portuguese work, circa 1900.",
    "images": [
      "images/catalogue/white-gold-diamond-bracelet-1900"
    ],
    "thumb": "images/catalogue/white-gold-diamond-bracelet-1900-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "art-deco-buckle-bracelet",
    "name": "Art Deco Buckle Bracelet",
    "circa": "c. 1920 · Portuguese",
    "era": "art-deco",
    "category": "bracelets",
    "description": "Antique bracelet in 19.2kt gold with synthetic rubies and diamonds. Portuguese work of the Art Deco period, circa 1920.",
    "images": [
      "images/catalogue/art-deco-buckle-bracelet"
    ],
    "thumb": "images/catalogue/art-deco-buckle-bracelet-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-gold-reliquary-pendant",
    "name": "Antique Reliquary Pendant",
    "circa": "17th century · Portuguese",
    "era": "early",
    "category": "necklaces",
    "description": "Antique reliquary in 19.2kt yellow gold and rose-cut diamonds, with a portrait or holy-stone holder in the back. Handcrafted Portuguese work, 17th century.",
    "images": [
      "images/catalogue/antique-gold-reliquary-pendant"
    ],
    "thumb": "images/catalogue/antique-gold-reliquary-pendant-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "enamel-flower-brooch",
    "name": "Enamel Flower Brooch",
    "circa": "",
    "era": null,
    "category": "brooches",
    "description": "Flower brooch crafted in 19.2kt yellow gold and silver, with enamel and diamonds.",
    "images": [
      "images/catalogue/enamel-flower-brooch"
    ],
    "thumb": "images/catalogue/enamel-flower-brooch-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "trio-of-diamond-rings",
    "name": "Trio of Diamond Rings",
    "circa": "",
    "era": null,
    "category": "rings",
    "description": "Three rings in 18k yellow, white and rose gold with 0.5ct of diamonds.",
    "images": [
      "images/catalogue/trio-of-diamond-rings"
    ],
    "thumb": "images/catalogue/trio-of-diamond-rings-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "handmade-gold-bracelet-1900",
    "name": "Handmade Gold Bracelet",
    "circa": "c. 1900 · Portuguese",
    "era": "belle-epoque",
    "category": "bracelets",
    "description": "Antique bracelet fully handmade in 19.2kt yellow gold. Portuguese work, circa 1900.",
    "images": [
      "images/catalogue/handmade-gold-bracelet-1900"
    ],
    "thumb": "images/catalogue/handmade-gold-bracelet-1900-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-brooch-brown-diamonds-natural-pearl",
    "name": "Antique Brooch with Brown Diamonds & Natural Pearl",
    "circa": "18th – 19th century · Portuguese",
    "era": "early",
    "category": "brooches",
    "description": "Antique brooch in 19.2kt gold and silver with diamonds, rubies, 5ct of brown diamonds and a natural pearl. Portuguese work, 18th–19th century.",
    "images": [
      "images/catalogue/antique-brooch-brown-diamonds-natural-pearl"
    ],
    "thumb": "images/catalogue/antique-brooch-brown-diamonds-natural-pearl-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "h-stern-imperial-topaz-ring",
    "name": "H. Stern Imperial Topaz Ring",
    "circa": "Signed H. Stern",
    "era": "signed",
    "category": "rings",
    "description": "H. Stern ring in 18k yellow gold with an imperial topaz and 2ct of diamonds.",
    "images": [
      "images/catalogue/h-stern-imperial-topaz-ring"
    ],
    "thumb": "images/catalogue/h-stern-imperial-topaz-ring-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "filigree-citrine-turquoise-bracelet",
    "name": "Filigree Bracelet with Citrines & Turquoise",
    "circa": "c. 1900 · Portuguese",
    "era": "belle-epoque",
    "category": "bracelets",
    "description": "Antique 19.2kt yellow gold filigree bracelet with citrines and turquoise. Portuguese work, circa 1900.",
    "images": [
      "images/catalogue/filigree-citrine-turquoise-bracelet"
    ],
    "thumb": "images/catalogue/filigree-citrine-turquoise-bracelet-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "antique-platinum-diamond-bracelet-5ct",
    "name": "Antique Diamond Bracelet, 5ct",
    "circa": "19th century · Portuguese",
    "era": "c19",
    "category": "bracelets",
    "description": "Antique platinum bracelet with 5ct of diamonds. Portuguese work, 19th century.",
    "images": [
      "images/catalogue/antique-platinum-diamond-bracelet-5ct"
    ],
    "thumb": "images/catalogue/antique-platinum-diamond-bracelet-5ct-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "boucheron-braid-bracelet",
    "name": "Boucheron Braid Bracelet",
    "circa": "1940s · Signed Boucheron",
    "era": "mid-century",
    "category": "bracelets",
    "description": "Rare 1940s bracelet representing a stylised braid in 18k yellow gold. Signed Boucheron Paris and numbered; French work.",
    "images": [
      "images/catalogue/boucheron-braid-bracelet"
    ],
    "thumb": "images/catalogue/boucheron-braid-bracelet-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  },
  {
    "id": "italian-gold-diamond-bracelet-1950",
    "name": "Italian Gold & Diamond Bracelet",
    "circa": "c. 1950 · Italian",
    "era": "mid-century",
    "category": "bracelets",
    "description": "18k yellow gold bracelet with 2ct of diamonds. Italian work, circa 1950.",
    "images": [
      "images/catalogue/italian-gold-diamond-bracelet-1950"
    ],
    "thumb": "images/catalogue/italian-gold-diamond-bracelet-1950-sm",
    "video": "",
    "price": "Price on request",
    "buy": "",
    "page": true
  }
];
