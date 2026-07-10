export interface CarModel {
  name: string;
  engines: string[];
}

export interface CarMake {
  name: string;
  models: CarModel[];
}

export const CAR_YEARS = Array.from({ length: 36 }, (_, i) => (2025 - i).toString());

export const CAR_DATABASE: CarMake[] = [
  {
    name: "Acura",
    models: [
      { name: "ILX", engines: ["2.0L I4", "2.4L I4"] },
      { name: "Integra", engines: ["1.5L Turbo I4", "2.0L Turbo (Type S)"] },
      { name: "MDX", engines: ["3.5L V6", "3.0L Turbo V6 (Type S)", "3.7L V6 (Older)", "3.0L Hybrid"] },
      { name: "NSX", engines: ["3.5L Twin-Turbo V6 Hybrid"] },
      { name: "RDX", engines: ["2.0L Turbo I4", "3.5L V6 (Older)", "2.3L Turbo (Older)"] },
      { name: "RLX", engines: ["3.5L V6", "3.5L Hybrid"] },
      { name: "TL", engines: ["3.2L V6", "3.5L V6", "3.7L V6"] },
      { name: "TLX", engines: ["2.0L Turbo I4", "3.0L Turbo V6 (Type S)", "2.4L I4", "3.5L V6"] },
      { name: "TSX", engines: ["2.4L I4", "3.5L V6"] },
      { name: "ZDX", engines: ["3.7L V6"] }
    ]
  },
  {
    name: "Audi",
    models: [
      { name: "A3 / S3 / RS3", engines: ["2.0L Turbo I4", "2.5L Turbo I5"] },
      { name: "A4 / S4 / RS4", engines: ["2.0L Turbo I4", "3.0L Turbo V6", "4.2L V8 (Older)"] },
      { name: "A5 / S5 / RS5", engines: ["2.0L Turbo I4", "3.0L Turbo V6", "2.9L Twin-Turbo V6", "4.2L V8 (Older)"] },
      { name: "A6 / S6 / RS6", engines: ["2.0L Turbo I4", "3.0L Turbo V6", "2.9L Twin-Turbo V6", "4.0L Twin-Turbo V8"] },
      { name: "A7 / S7 / RS7", engines: ["3.0L Turbo V6", "2.9L Twin-Turbo V6", "4.0L Twin-Turbo V8"] },
      { name: "A8 / S8", engines: ["3.0L Turbo V6", "4.0L Twin-Turbo V8", "6.3L W12"] },
      { name: "Q3", engines: ["2.0L Turbo I4"] },
      { name: "Q5 / SQ5", engines: ["2.0L Turbo I4", "3.0L Turbo V6", "3.0L TDI", "2.0L Hybrid"] },
      { name: "Q7 / SQ7", engines: ["2.0L Turbo I4", "3.0L Supercharged V6", "3.0L Turbo V6", "4.0L Twin-Turbo V8"] },
      { name: "Q8 / SQ8 / RS Q8", engines: ["3.0L Turbo V6", "4.0L Twin-Turbo V8"] },
      { name: "R8", engines: ["4.2L V8", "5.2L V10"] },
      { name: "TT / TTS / TTRS", engines: ["2.0L Turbo I4", "2.5L Turbo I5"] }
    ]
  },
  {
    name: "BMW",
    models: [
      { name: "2 Series", engines: ["2.0L Turbo I4", "3.0L Turbo I6"] },
      { name: "3 Series", engines: ["2.0L Turbo I4 (B48)", "3.0L Turbo I6 (B58)", "2.0L Diesel", "3.0L Diesel"] },
      { name: "4 Series", engines: ["2.0L Turbo I4", "3.0L Turbo I6"] },
      { name: "5 Series", engines: ["2.0L Turbo I4", "3.0L Turbo I6", "4.4L V8 Twin-Turbo", "Diesel Variants"] },
      { name: "7 Series", engines: ["3.0L Turbo I6", "4.4L V8", "6.0L/6.6L V12"] },
      { name: "8 Series", engines: ["3.0L Turbo I6", "4.4L V8 Twin-Turbo"] },
      { name: "X1", engines: ["2.0L Turbo I4"] },
      { name: "X2", engines: ["2.0L Turbo I4"] },
      { name: "X3", engines: ["2.0L Turbo I4", "3.0L Turbo I6", "3.0L Turbo I6 (S58)"] },
      { name: "X4", engines: ["2.0L Turbo I4", "3.0L Turbo I6"] },
      { name: "X5", engines: ["3.0L Turbo I6", "4.4L V8 Twin-Turbo", "3.0L Diesel", "PHEV"] },
      { name: "X6", engines: ["3.0L Turbo I6", "4.4L V8 Twin-Turbo"] },
      { name: "X7", engines: ["3.0L Turbo I6", "4.4L V8 Twin-Turbo"] },
      { name: "Z4", engines: ["2.0L Turbo I4", "3.0L Turbo I6"] }
    ]
  },
  {
    name: "Chevrolet",
    models: [
      { name: "Blazer", engines: ["2.0L Turbo", "2.5L I4", "3.6L V6"] },
      { name: "Camaro", engines: ["2.0L Turbo", "3.6L V6", "6.2L V8 LT1", "6.2L S/C V8 LT4", "7.0L V8 LS7 (Older)"] },
      { name: "Colorado", engines: ["2.5L I4", "3.6L V6", "2.8L Duramax Diesel", "2.7L Turbo"] },
      { name: "Corvette", engines: ["6.2L V8 LT2 (C8)", "5.5L V8 LT6 (Z06)", "6.2L V8 LT1 (C7)", "6.2L S/C V8 LT4"] },
      { name: "Cruze", engines: ["1.4L Turbo", "1.8L I4", "1.6L Diesel"] },
      { name: "Equinox", engines: ["1.5L Turbo", "2.0L Turbo", "1.6L Diesel", "2.4L I4 (Older)", "3.6L V6 (Older)"] },
      { name: "Express Van", engines: ["4.3L V6", "6.6L V8", "2.8L Duramax"] },
      { name: "Impala", engines: ["2.5L I4", "3.6L V6"] },
      { name: "Malibu", engines: ["1.5L Turbo", "2.0L Turbo", "2.5L I4 (Older)"] },
      { name: "Silverado 1500", engines: ["2.7L Turbo", "4.3L V6", "5.3L V8", "6.2L V8", "3.0L Duramax Diesel"] },
      { name: "Silverado 2500/3500", engines: ["6.6L V8 Gas", "6.6L Duramax Diesel"] },
      { name: "Sonic", engines: ["1.4L Turbo", "1.8L I4"] },
      { name: "Spark", engines: ["1.4L I4"] },
      { name: "Suburban", engines: ["5.3L V8", "6.2L V8", "3.0L Duramax"] },
      { name: "Tahoe", engines: ["5.3L V8", "6.2L V8", "3.0L Duramax"] },
      { name: "Trailblazer", engines: ["1.2L Turbo", "1.3L Turbo"] },
      { name: "Traverse", engines: ["3.6L V6", "2.0L Turbo", "2.5L Turbo"] },
      { name: "Trax", engines: ["1.4L Turbo", "1.2L Turbo"] }
    ]
  },
  {
    name: "Dodge",
    models: [
      { name: "Avenger", engines: ["2.4L I4", "3.6L V6"] },
      { name: "Challenger", engines: ["3.6L V6", "5.7L V8 Hemi", "6.4L V8 Hemi", "6.2L S/C Hellcat"] },
      { name: "Charger", engines: ["3.6L V6", "5.7L V8 Hemi", "6.4L V8 Hemi", "6.2L S/C Hellcat"] },
      { name: "Dart", engines: ["1.4L Turbo", "2.0L I4", "2.4L I4"] },
      { name: "Durango", engines: ["3.6L V6", "5.7L V8", "6.4L V8", "6.2L S/C Hellcat"] },
      { name: "Grand Caravan", engines: ["3.6L V6 Pentastar", "3.3L/3.8L V6 (Older)"] },
      { name: "Hornet", engines: ["2.0L Turbo", "1.3L Turbo Hybrid"] },
      { name: "Journey", engines: ["2.4L I4", "3.6L V6"] }
    ]
  },
  {
    name: "Ford",
    models: [
      { name: "Bronco", engines: ["2.3L EcoBoost", "2.7L EcoBoost V6", "3.0L EcoBoost V6"] },
      { name: "Bronco Sport", engines: ["1.5L EcoBoost", "2.0L EcoBoost"] },
      { name: "Edge", engines: ["2.0L EcoBoost", "2.7L EcoBoost V6", "3.5L V6 (Older)"] },
      { name: "Escape", engines: ["1.5L EcoBoost", "2.0L EcoBoost", "2.5L Hybrid", "2.5L I4 (Older)"] },
      { name: "Expedition", engines: ["3.5L EcoBoost V6", "5.4L V8 (Older)"] },
      { name: "Explorer", engines: ["2.3L EcoBoost", "3.0L EcoBoost V6", "3.3L V6 Hybrid", "3.5L V6 (Older)"] },
      { name: "F-150", engines: ["2.7L EcoBoost", "3.3L V6", "3.5L EcoBoost", "5.0L V8", "3.5L PowerBoost", "3.0L Diesel"] },
      { name: "F-250/F-350 Super Duty", engines: ["6.2L V8", "7.3L V8 Godzilla", "6.7L Power Stroke Diesel"] },
      { name: "Fiesta", engines: ["1.6L I4", "1.6L Turbo ST", "1.0L EcoBoost"] },
      { name: "Flex", engines: ["3.5L V6", "3.5L EcoBoost"] },
      { name: "Focus", engines: ["2.0L I4", "2.0L Turbo ST", "2.3L Turbo RS", "1.0L EcoBoost"] },
      { name: "Fusion", engines: ["1.5L EcoBoost", "2.0L EcoBoost", "2.5L I4", "2.0L Hybrid", "2.7L EcoBoost"] },
      { name: "Maverick", engines: ["2.0L EcoBoost", "2.5L Hybrid"] },
      { name: "Mustang", engines: ["2.3L EcoBoost", "5.0L V8", "5.2L V8 Voodoo", "3.7L V6 (Older)"] },
      { name: "Ranger", engines: ["2.3L EcoBoost", "3.0L EcoBoost V6", "4.0L V6 (Older)"] },
      { name: "Taurus", engines: ["3.5L V6", "3.5L EcoBoost", "2.0L EcoBoost"] },
      { name: "Transit", engines: ["3.5L V6", "3.5L EcoBoost", "3.2L Diesel"] }
    ]
  },
  {
    name: "GMC",
    models: [
      { name: "Acadia", engines: ["2.0L Turbo", "2.5L I4", "3.6L V6"] },
      { name: "Canyon", engines: ["2.5L I4", "3.6L V6", "2.8L Duramax", "2.7L Turbo"] },
      { name: "Savana", engines: ["4.3L V6", "6.6L V8"] },
      { name: "Sierra 1500", engines: ["2.7L Turbo", "4.3L V6", "5.3L V8", "6.2L V8", "3.0L Duramax"] },
      { name: "Sierra 2500/3500", engines: ["6.6L V8 Gas", "6.6L Duramax Diesel"] },
      { name: "Terrain", engines: ["1.5L Turbo", "2.0L Turbo", "1.6L Diesel", "2.4L I4 (Older)", "3.6L V6 (Older)"] },
      { name: "Yukon / Yukon XL", engines: ["5.3L V8", "6.2L V8", "3.0L Duramax"] }
    ]
  },
  {
    name: "Honda",
    models: [
      { name: "Accord", engines: ["1.5L Turbo", "2.0L Turbo", "2.0L Hybrid", "2.4L I4 (Older)", "3.5L V6 (Older)"] },
      { name: "Civic", engines: ["1.5L Turbo", "2.0L NA", "2.0L Turbo (Type R)", "1.8L I4 (Older)"] },
      { name: "CR-V", engines: ["1.5L Turbo", "2.0L Hybrid", "2.4L I4 (Older)"] },
      { name: "Fit", engines: ["1.5L I4"] },
      { name: "HR-V", engines: ["1.8L I4", "2.0L I4"] },
      { name: "Insight", engines: ["1.5L Hybrid"] },
      { name: "Odyssey", engines: ["3.5L V6"] },
      { name: "Passport", engines: ["3.5L V6"] },
      { name: "Pilot", engines: ["3.5L V6"] },
      { name: "Ridgeline", engines: ["3.5L V6"] },
      { name: "S2000", engines: ["2.0L I4 (F20C)", "2.2L I4 (F22C)"] }
    ]
  },
  {
    name: "Hyundai",
    models: [
      { name: "Accent", engines: ["1.6L I4"] },
      { name: "Elantra", engines: ["2.0L I4", "1.6L Turbo", "2.0L Turbo (N)", "1.4L Turbo"] },
      { name: "Genesis Coupe", engines: ["2.0L Turbo", "3.8L V6"] },
      { name: "Kona", engines: ["2.0L I4", "1.6L Turbo", "2.0L Turbo (N)"] },
      { name: "Palisade", engines: ["3.8L V6"] },
      { name: "Santa Cruz", engines: ["2.5L I4", "2.5L Turbo"] },
      { name: "Santa Fe", engines: ["2.5L I4", "2.5L Turbo", "1.6L Hybrid", "3.3L V6 (Older)", "2.4L I4 (Older)"] },
      { name: "Sonata", engines: ["2.5L I4", "1.6L Turbo", "2.5L Turbo", "2.0L Hybrid", "2.4L I4 (Older)", "2.0L Turbo (Older)"] },
      { name: "Tucson", engines: ["2.5L I4", "1.6L Hybrid", "2.4L I4 (Older)", "2.0L I4 (Older)"] },
      { name: "Veloster", engines: ["2.0L I4", "1.6L Turbo", "2.0L Turbo (N)"] },
      { name: "Venue", engines: ["1.6L I4"] }
    ]
  },
  {
    name: "Infiniti",
    models: [
      { name: "G35 / G37", engines: ["3.5L V6", "3.7L V6"] },
      { name: "Q50", engines: ["2.0L Turbo", "3.0L Twin-Turbo V6", "3.7L V6", "3.5L Hybrid"] },
      { name: "Q60", engines: ["2.0L Turbo", "3.0L Twin-Turbo V6"] },
      { name: "QX50", engines: ["2.0L VC-Turbo", "3.7L V6 (Older)"] },
      { name: "QX55", engines: ["2.0L VC-Turbo"] },
      { name: "QX60", engines: ["3.5L V6", "2.0L VC-Turbo (New)"] },
      { name: "QX80", engines: ["5.6L V8", "3.5L Twin-Turbo V6 (New)"] }
    ]
  },
  {
    name: "Jeep",
    models: [
      { name: "Cherokee", engines: ["2.4L I4", "3.2L V6", "2.0L Turbo"] },
      { name: "Compass", engines: ["2.4L I4", "2.0L Turbo"] },
      { name: "Gladiator", engines: ["3.6L V6", "3.0L EcoDiesel"] },
      { name: "Grand Cherokee", engines: ["3.6L V6", "5.7L V8", "4xe Hybrid", "3.0L EcoDiesel (Older)", "6.4L V8 (SRT)"] },
      { name: "Grand Cherokee L", engines: ["3.6L V6", "5.7L V8"] },
      { name: "Liberty", engines: ["3.7L V6"] },
      { name: "Patriot", engines: ["2.0L I4", "2.4L I4"] },
      { name: "Renegade", engines: ["1.3L Turbo", "2.4L I4"] },
      { name: "Wagoneer / Grand Wagoneer", engines: ["5.7L V8", "6.4L V8", "3.0L Twin-Turbo I6"] },
      { name: "Wrangler", engines: ["3.6L V6", "2.0L Turbo", "3.0L EcoDiesel", "6.4L V8 (392)", "4xe Hybrid", "3.8L V6 (Older)"] }
    ]
  },
  {
    name: "Kia",
    models: [
      { name: "Carnival", engines: ["3.5L V6"] },
      { name: "Forte", engines: ["2.0L I4", "1.6L Turbo"] },
      { name: "K5 / Optima", engines: ["1.6L Turbo", "2.5L Turbo", "2.4L I4 (Optima)", "2.0L Turbo (Optima)", "1.6L Turbo (Optima)"] },
      { name: "Niro", engines: ["1.6L Hybrid"] },
      { name: "Rio", engines: ["1.6L I4"] },
      { name: "Seltos", engines: ["2.0L I4", "1.6L Turbo"] },
      { name: "Sorento", engines: ["2.5L I4", "2.5L Turbo", "1.6L Hybrid", "3.3L V6 (Older)", "2.4L I4 (Older)"] },
      { name: "Soul", engines: ["2.0L I4", "1.6L Turbo", "1.6L I4"] },
      { name: "Sportage", engines: ["2.5L I4", "2.4L I4 (Older)", "2.0L Turbo", "1.6L Hybrid"] },
      { name: "Stinger", engines: ["2.0L Turbo", "2.5L Turbo", "3.3L Twin-Turbo V6"] },
      { name: "Telluride", engines: ["3.8L V6"] }
    ]
  },
  {
    name: "Land Rover",
    models: [
      { name: "Defender", engines: ["2.0L Turbo", "3.0L I6 Mild Hybrid", "5.0L V8"] },
      { name: "Discovery", engines: ["2.0L Turbo", "3.0L I6", "3.0L S/C V6 (Older)"] },
      { name: "Discovery Sport", engines: ["2.0L Turbo"] },
      { name: "LR4", engines: ["3.0L S/C V6", "5.0L V8"] },
      { name: "Range Rover", engines: ["3.0L I6", "4.4L V8", "5.0L S/C V8", "3.0L Diesel"] },
      { name: "Range Rover Evoque", engines: ["2.0L Turbo"] },
      { name: "Range Rover Sport", engines: ["3.0L I6", "5.0L S/C V8", "3.0L Diesel"] },
      { name: "Range Rover Velar", engines: ["2.0L Turbo", "3.0L I6"] }
    ]
  },
  {
    name: "Lexus",
    models: [
      { name: "ES", engines: ["3.5L V6 (ES350)", "2.5L Hybrid (ES300h)"] },
      { name: "GS", engines: ["3.5L V6", "5.0L V8 (GS F)", "2.0L Turbo"] },
      { name: "GX", engines: ["4.6L V8 (GX460)", "3.4L Twin-Turbo V6 (GX550)"] },
      { name: "IS", engines: ["2.0L Turbo (IS200t/IS300)", "3.5L V6 (IS350)", "5.0L V8 (IS500)", "2.5L V6 (IS250)"] },
      { name: "LC", engines: ["5.0L V8", "3.5L Hybrid"] },
      { name: "LS", engines: ["3.5L Twin-Turbo V6", "3.5L Hybrid", "4.6L V8 (Older)"] },
      { name: "LX", engines: ["5.7L V8 (LX570)", "3.5L Twin-Turbo V6 (LX600)"] },
      { name: "NX", engines: ["2.5L I4", "2.4L Turbo", "2.5L Hybrid", "2.0L Turbo (Older)"] },
      { name: "RC", engines: ["2.0L Turbo", "3.5L V6", "5.0L V8"] },
      { name: "RX", engines: ["3.5L V6", "2.4L Turbo", "2.5L Hybrid", "2.4L Turbo Hybrid"] },
      { name: "UX", engines: ["2.0L I4", "2.0L Hybrid"] }
    ]
  },
  {
    name: "Mazda",
    models: [
      { name: "CX-3", engines: ["2.0L I4"] },
      { name: "CX-30", engines: ["2.5L I4", "2.5L Turbo"] },
      { name: "CX-5", engines: ["2.5L I4 Skyactiv-G", "2.5L Turbo", "2.0L I4 (Older)"] },
      { name: "CX-50", engines: ["2.5L I4", "2.5L Turbo"] },
      { name: "CX-7", engines: ["2.3L Turbo", "2.5L I4"] },
      { name: "CX-9", engines: ["2.5L Turbo", "3.7L V6 (Older)"] },
      { name: "CX-90", engines: ["3.3L Inline-6 Turbo", "2.5L PHEV"] },
      { name: "Mazda3", engines: ["2.0L I4", "2.5L I4", "2.5L Turbo"] },
      { name: "Mazda6", engines: ["2.5L I4", "2.5L Turbo", "3.7L V6 (Older)"] },
      { name: "MX-5 Miata", engines: ["2.0L I4 Skyactiv-G", "1.5L I4 (Overseas)"] },
      { name: "RX-8", engines: ["1.3L Renesis Rotary"] }
    ]
  },
  {
    name: "Mercedes-Benz",
    models: [
      { name: "A-Class", engines: ["2.0L Turbo I4"] },
      { name: "C-Class", engines: ["2.0L Turbo I4", "3.0L V6 Biturbo", "4.0L V8 Biturbo", "1.5L Turbo (Mild Hybrid)"] },
      { name: "CLA", engines: ["2.0L Turbo I4"] },
      { name: "CLS", engines: ["3.0L I6 Turbo", "4.7L V8 (Older)", "4.0L V8"] },
      { name: "E-Class", engines: ["2.0L Turbo I4", "3.0L I6 Turbo", "4.0L V8 Biturbo", "3.5L V6 (Older)"] },
      { name: "G-Class", engines: ["4.0L V8 Biturbo"] },
      { name: "GLA", engines: ["2.0L Turbo I4"] },
      { name: "GLB", engines: ["2.0L Turbo I4"] },
      { name: "GLC", engines: ["2.0L Turbo I4", "3.0L V6 Biturbo", "4.0L V8 Biturbo"] },
      { name: "GLE / M-Class", engines: ["2.0L Turbo I4", "3.0L I6 Turbo", "4.0L V8 Biturbo", "3.5L V6 (Older)"] },
      { name: "GLS / GL-Class", engines: ["3.0L I6 Turbo", "4.0L V8 Biturbo", "4.7L V8 (Older)"] },
      { name: "S-Class", engines: ["3.0L I6 Turbo", "4.0L V8 Biturbo", "6.0L V12"] },
      { name: "SL", engines: ["2.0L Turbo", "4.0L V8 Biturbo", "3.0L V6 (Older)"] },
      { name: "Sprinter", engines: ["2.0L Turbo", "3.0L V6 Diesel", "2.1L Diesel"] }
    ]
  },
  {
    name: "Mini",
    models: [
      { name: "Clubman", engines: ["1.5L Turbo I3", "2.0L Turbo I4"] },
      { name: "Convertible", engines: ["1.5L Turbo I3", "2.0L Turbo I4"] },
      { name: "Cooper Hardtop", engines: ["1.5L Turbo I3", "2.0L Turbo I4", "1.6L I4 (Older)", "1.6L S/C (Older)"] },
      { name: "Countryman", engines: ["1.5L Turbo I3", "2.0L Turbo I4"] }
    ]
  },
  {
    name: "Nissan",
    models: [
      { name: "370Z", engines: ["3.7L V6"] },
      { name: "Altima", engines: ["2.5L I4", "2.0L VC-Turbo", "3.5L V6 (Older)"] },
      { name: "Armada", engines: ["5.6L V8"] },
      { name: "Frontier", engines: ["3.8L V6", "4.0L V6 (Older)", "2.5L I4 (Older)"] },
      { name: "GT-R", engines: ["3.8L Twin-Turbo V6"] },
      { name: "Juke", engines: ["1.6L Turbo"] },
      { name: "Kicks", engines: ["1.6L I4"] },
      { name: "Maxima", engines: ["3.5L V6 VQ35DE"] },
      { name: "Murano", engines: ["3.5L V6"] },
      { name: "Pathfinder", engines: ["3.5L V6 VQ35DD", "4.0L V6 (Older)"] },
      { name: "Rogue", engines: ["1.5L VC-Turbo", "2.5L I4"] },
      { name: "Rogue Sport", engines: ["2.0L I4"] },
      { name: "Sentra", engines: ["2.0L I4", "1.8L I4", "1.6L Turbo"] },
      { name: "Titan", engines: ["5.6L V8 Endurance"] },
      { name: "Versa", engines: ["1.6L I4"] },
      { name: "Xterra", engines: ["4.0L V6"] },
      { name: "Z", engines: ["3.0L Twin-Turbo V6"] }
    ]
  },
  {
    name: "Porsche",
    models: [
      { name: "718 Boxster / Cayman", engines: ["2.0L Turbo Flat-4", "2.5L Turbo Flat-4", "4.0L Flat-6"] },
      { name: "911", engines: ["3.0L Twin-Turbo Flat-6", "3.8L Twin-Turbo Flat-6", "4.0L NA Flat-6"] },
      { name: "Cayenne", engines: ["3.0L Turbo V6", "2.9L Twin-Turbo V6", "4.0L Twin-Turbo V8", "3.6L V6 (Older)", "4.8L V8 (Older)"] },
      { name: "Macan", engines: ["2.0L Turbo I4", "2.9L Twin-Turbo V6", "3.0L Turbo V6 (Older)"] },
      { name: "Panamera", engines: ["2.9L Twin-Turbo V6", "4.0L Twin-Turbo V8", "3.0L Turbo V6 (Older)"] }
    ]
  },
  {
    name: "Ram",
    models: [
      { name: "1500", engines: ["3.6L V6 eTorque", "5.7L V8 Hemi", "3.0L EcoDiesel", "6.2L S/C TRX", "3.0L Twin-Turbo I6"] },
      { name: "1500 Classic", engines: ["3.6L V6", "5.7L V8 Hemi"] },
      { name: "2500", engines: ["6.4L V8 Hemi", "6.7L Cummins Diesel"] },
      { name: "3500", engines: ["6.4L V8 Hemi", "6.7L Cummins Diesel HO"] },
      { name: "ProMaster", engines: ["3.6L V6"] }
    ]
  },
  {
    name: "Subaru",
    models: [
      { name: "Ascent", engines: ["2.4L Turbo Boxer"] },
      { name: "BRZ", engines: ["2.0L Boxer", "2.4L Boxer"] },
      { name: "Crosstrek", engines: ["2.0L Boxer", "2.5L Boxer", "2.0L Hybrid"] },
      { name: "Forester", engines: ["2.5L Boxer", "2.0L Turbo (Older)"] },
      { name: "Impreza", engines: ["2.0L Boxer", "2.5L Boxer (Older)"] },
      { name: "Legacy", engines: ["2.5L Boxer", "2.4L Turbo Boxer", "3.6L Flat-6 (Older)"] },
      { name: "Outback", engines: ["2.5L Boxer", "2.4L Turbo Boxer", "3.6L Flat-6 (Older)"] },
      { name: "WRX / STI", engines: ["2.0L Turbo", "2.4L Turbo", "2.5L Turbo (EJ25)"] }
    ]
  },
  {
    name: "Toyota",
    models: [
      { name: "4Runner", engines: ["4.0L V6", "4.7L V8 (Older)"] },
      { name: "Avalon", engines: ["3.5L V6", "2.5L Hybrid"] },
      { name: "C-HR", engines: ["2.0L I4"] },
      { name: "Camry", engines: ["2.5L 4-Cyl", "3.5L V6", "2.5L Hybrid"] },
      { name: "Corolla", engines: ["1.8L 4-Cyl", "2.0L 4-Cyl", "1.6L Turbo (GR)"] },
      { name: "Corolla Cross", engines: ["2.0L I4", "2.0L Hybrid"] },
      { name: "Crown", engines: ["2.5L Hybrid", "2.4L Turbo Hybrid"] },
      { name: "FJ Cruiser", engines: ["4.0L V6"] },
      { name: "GR86", engines: ["2.4L Boxer"] },
      { name: "Highlander", engines: ["3.5L V6", "2.4L Turbo", "2.5L Hybrid", "3.3L V6 (Older)"] },
      { name: "Land Cruiser", engines: ["5.7L V8", "2.4L Turbo Hybrid (New)"] },
      { name: "Prius", engines: ["1.8L Hybrid", "2.0L Hybrid"] },
      { name: "RAV4", engines: ["2.5L 4-Cyl", "2.5L Hybrid", "3.5L V6 (Older)"] },
      { name: "Sequoia", engines: ["3.5L Twin-Turbo Hybrid", "5.7L V8 (Older)", "4.7L V8 (Older)"] },
      { name: "Sienna", engines: ["2.5L Hybrid", "3.5L V6 (Older)"] },
      { name: "Supra", engines: ["2.0L Turbo", "3.0L Turbo I6"] },
      { name: "Tacoma", engines: ["2.4L Turbo", "2.4L Turbo Hybrid", "2.7L 4-Cyl (Older)", "3.5L V6 (Older)", "4.0L V6 (Older)"] },
      { name: "Tundra", engines: ["3.5L Twin-Turbo V6", "3.5L Twin-Turbo Hybrid", "5.7L V8 (Older)", "4.6L V8 (Older)", "4.7L V8 (Older)"] },
      { name: "Venza", engines: ["2.5L Hybrid", "2.7L I4 (Older)", "3.5L V6 (Older)"] },
      { name: "Yaris", engines: ["1.5L I4"] }
    ]
  },
  {
    name: "Volkswagen",
    models: [
      { name: "Arteon", engines: ["2.0L Turbo I4"] },
      { name: "Atlas / Cross Sport", engines: ["2.0L Turbo I4", "3.6L VR6"] },
      { name: "Beetle", engines: ["1.8L Turbo", "2.0L Turbo", "2.5L I5", "2.0L Diesel"] },
      { name: "CC", engines: ["2.0L Turbo", "3.6L VR6"] },
      { name: "Golf / GTI / R", engines: ["1.4L Turbo", "1.8L Turbo", "2.0L Turbo", "2.5L I5", "2.0L Diesel"] },
      { name: "Jetta", engines: ["1.4L Turbo", "1.5L Turbo", "1.8L Turbo", "2.0L Turbo (GLI)", "2.5L I5", "2.0L Diesel"] },
      { name: "Passat", engines: ["1.8L Turbo", "2.0L Turbo", "3.6L VR6", "2.5L I5", "2.0L Diesel"] },
      { name: "Taos", engines: ["1.5L Turbo"] },
      { name: "Tiguan", engines: ["2.0L Turbo I4"] },
      { name: "Touareg", engines: ["3.6L VR6", "3.0L Diesel", "3.0L Supercharged Hybrid"] }
    ]
  },
  {
    name: "Volvo",
    models: [
      { name: "S60", engines: ["2.0L Turbo (B5)", "2.0L Turbo/SC (T6)", "PHEV (T8)", "2.5L Turbo (Older)"] },
      { name: "S90", engines: ["2.0L Turbo (T5/B5)", "2.0L Turbo/SC (T6/B6)", "PHEV (T8)"] },
      { name: "V60", engines: ["2.0L Turbo", "2.0L Turbo/SC", "PHEV"] },
      { name: "V90", engines: ["2.0L Turbo/SC"] },
      { name: "XC40", engines: ["2.0L Turbo (T4/T5/B4/B5)"] },
      { name: "XC60", engines: ["2.0L Turbo (B5)", "2.0L Turbo/SC (B6)", "PHEV (T8)", "3.0L Turbo I6 (Older)", "3.2L I6 (Older)"] },
      { name: "XC70", engines: ["3.2L I6", "3.0L Turbo I6"] },
      { name: "XC90", engines: ["2.0L Turbo (B5)", "2.0L Turbo/SC (B6)", "PHEV (T8)", "3.2L I6 (Older)", "4.4L V8 (Older)"] }
    ]
  }
].sort((a, b) => a.name.localeCompare(b.name));