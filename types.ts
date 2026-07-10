export type Language = 'en' | 'ar';

export interface CarDetails {
  year: string;
  manufacturer: string;
  make: string;
  model: string;
  engine: string;
}

export enum BeltType {
  SERPENTINE = "Serpentine",
  TIMING = "Timing",
  VBELT = "V-Belt",
  OTHER = "Other"
}

export interface BeltInfo {
  name: string;
  specification: string;
  partNumberReference?: string;
  type: BeltType;
  notes?: string;
}

export interface GeminiResponse {
  vehicleSummary: string;
  belts: BeltInfo[];
}