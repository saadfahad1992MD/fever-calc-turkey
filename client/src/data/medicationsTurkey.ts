export interface Medication {
  id: string;
  name: string;
  genericName: string;
  form: 'syrup' | 'drops';
  concentration: number;
  concentrationUnit: string;
  image: string;
  ageRestriction?: string;
}

export interface MedicationDatabase {
  paracetamol: Medication[];
  ibuprofen: Medication[];
}

export const medicationsTurkey: MedicationDatabase = {
  paracetamol: [
    {
      id: 'parol-syrup',
      name: 'Parol',
      genericName: 'Paracetamol',
      form: 'syrup',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      image: '/medications/parol-syrup.jpg',
    },
    {
      id: 'calpol-syrup',
      name: 'Calpol',
      genericName: 'Paracetamol',
      form: 'syrup',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      image: '/medications/calpol-syrup.jpg',
    },
    {
      id: 'gripin-bebe-syrup',
      name: 'Gripin Bebe',
      genericName: 'Paracetamol',
      form: 'syrup',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      image: '/medications/gripin-bebe-syrup.jpg',
    },
    {
      id: 'minoset-syrup',
      name: 'Minoset',
      genericName: 'Paracetamol',
      form: 'syrup',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      image: '/medications/minoset-syrup.jpg',
    },
    {
      id: 'parol-drops',
      name: 'Parol Damla',
      genericName: 'Paracetamol',
      form: 'drops',
      concentration: 100,
      concentrationUnit: 'mg/ml',
      image: '/medications/parol-drops.jpg',
      ageRestriction: 'Bebekler için 0-12 ay',
    },
    {
      id: 'calpol-drops',
      name: 'Calpol Damla',
      genericName: 'Paracetamol',
      form: 'drops',
      concentration: 100,
      concentrationUnit: 'mg/ml',
      image: '/medications/calpol-drops.jpg',
      ageRestriction: 'Bebekler için 0-12 ay',
    },
  ],
  ibuprofen: [
    {
      id: 'dolven-syrup',
      name: 'Dolven',
      genericName: 'Ibuprofen',
      form: 'syrup',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      image: '/medications/dolven-syrup.jpg',
      ageRestriction: '6 ay ve üzeri',
    },
    {
      id: 'pedifen-syrup',
      name: 'Pedifen',
      genericName: 'Ibuprofen',
      form: 'syrup',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      image: '/medications/pedifen-syrup.jpg',
      ageRestriction: '6 ay ve üzeri',
    },
    {
      id: 'kidyfen-syrup',
      name: 'Kidyfen',
      genericName: 'Ibuprofen',
      form: 'syrup',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      image: '/medications/kidyfen-syrup.jpg',
      ageRestriction: '6 ay ve üzeri',
    },
    {
      id: 'apranax-syrup',
      name: 'Apranax Plus',
      genericName: 'Ibuprofen',
      form: 'syrup',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      image: '/medications/apranax-syrup.jpg',
      ageRestriction: '6 ay ve üzeri',
    },
    {
      id: 'nurofen-syrup',
      name: 'Nurofen',
      genericName: 'Ibuprofen',
      form: 'syrup',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      image: '/medications/nurofen-syrup.jpg',
      ageRestriction: '6 ay ve üzeri',
    },
  ],
};

// Paracetamol: 10-15 mg/kg per dose
export function calculateParacetamolDose(weightKg: number): number {
  return Math.round(weightKg * 15);
}

// Ibuprofen: 5-10 mg/kg per dose
export function calculateIbuprofenDose(weightKg: number): number {
  return Math.round(weightKg * 10);
}

// Calculate volume based on concentration
export function calculateVolume(
  doseInMg: number,
  concentration: number,
  unit: string
): number {
  if (unit === 'mg/5ml') {
    return Math.round((doseInMg / concentration) * 5 * 10) / 10;
  } else if (unit === 'mg/ml') {
    return Math.round((doseInMg / concentration) * 10) / 10;
  }
  return 0;
}
