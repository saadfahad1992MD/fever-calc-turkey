// Indonesian Fever Medications Database

export interface Medication {
  id: string;
  name: string;
  genericName: string;
  concentration: number;
  concentrationUnit: string;
  unit: string;
  form: 'drops' | 'syrup';
  image: string;
  ageRestriction?: string;
  minAge?: number;
  maxAge?: number;
}

export const medicationsIndonesia = {
  paracetamol: [
    {
      id: 'tempra-drops-id',
      name: 'Tempra Drops',
      genericName: 'Paracetamol',
      concentration: 100,
      concentrationUnit: 'mg/1ml',
      unit: 'ml',
      form: 'drops' as const,
      image: '/images/tempra-drops.png',
      ageRestriction: 'Untuk bayi 0-24 bulan',
      minAge: 0,
      maxAge: 2
    },
    {
      id: 'sanmol-sirup',
      name: 'Sanmol Sirup',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/sanmol-sirup.png',
      minAge: 1,
      maxAge: 14
    },
    {
      id: 'panadol-anak-sirup',
      name: 'Panadol Anak Sirup',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/panadol-anak.png',
      ageRestriction: 'Rasa raspberry',
      minAge: 0.5,
      maxAge: 14
    },
    {
      id: 'tempra-sirup',
      name: 'Tempra Sirup',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/tempra-sirup.png',
      minAge: 2,
      maxAge: 14
    },
    {
      id: 'biogesic-anak',
      name: 'Biogesic Anak',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/biogesic-anak.png',
      minAge: 1,
      maxAge: 14
    },
    {
      id: 'termorex-sirup',
      name: 'Termorex Sirup',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/termorex-sirup.png',
      ageRestriction: 'Rasa jeruk',
      minAge: 0,
      maxAge: 14
    }
  ],
  ibuprofen: [
    {
      id: 'proris-suspensi',
      name: 'Proris Suspensi',
      genericName: 'Ibuprofen',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/proris-suspensi.png',
      ageRestriction: 'Untuk anak 6 bulan ke atas',
      minAge: 0.5,
      maxAge: 14
    },
    {
      id: 'proris-forte',
      name: 'Proris Forte',
      genericName: 'Ibuprofen',
      concentration: 200,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/proris-forte.png',
      ageRestriction: 'Untuk anak lebih besar',
      minAge: 3,
      maxAge: 14
    },
    {
      id: 'hufagripp-tmp',
      name: 'Hufagripp TMP',
      genericName: 'Ibuprofen',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      unit: 'ml',
      form: 'syrup' as const,
      image: '/images/hufagripp-tmp.png',
      ageRestriction: 'Untuk anak 6 bulan ke atas',
      minAge: 0.5,
      maxAge: 14
    }
  ]
};

// Dosage calculation functions
export function calculateParacetamolDose(weightKg: number): number {
  // 10-15 mg/kg per dose
  return Math.round((weightKg * 15) / 5) * 5; // Round to nearest 5mg
}

export function calculateIbuprofenDose(weightKg: number): number {
  // 5-10 mg/kg per dose
  return Math.round((weightKg * 10) / 5) * 5; // Round to nearest 5mg
}

export function calculateVolume(doseInMg: number, concentration: number, concentrationUnit: string): number {
  // concentration is in mg per ml or mg per 5ml
  if (concentrationUnit.includes('/5ml')) {
    return Number(((doseInMg / concentration) * 5).toFixed(1));
  } else {
    return Number((doseInMg / concentration).toFixed(1));
  }
}
