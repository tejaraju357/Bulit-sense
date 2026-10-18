export type ThemeMode = 'dark' | 'light';

export interface BuildingSystem {
  id: string;
  name: string;
  dotColor: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  tag: string;
  image: string;
}

export interface BuildingTypeOption {
  id: string;
  name: string;
  icon: string;
  ratePerSqFt: number;
  attributeLabel: string;
  attributePlaceholder: string;
  attributeUnit: string;
  defaultAttributeValue: number;
  description: string;
}

export interface ForecastCategory {
  name: string;
  color: string;
}

export interface ForecastYearData {
  year: number;
  values: number[]; // In Lakhs
}

export interface ProjectCaseStudy {
  id: string;
  code: string;
  name: string;
  category: 'residential' | 'commercial' | 'institutional';
  categoryLabel: string;
  area: string;
  capex: string;
  scope: string;
  status: string;
  statusType: 'ok' | 'progress';
  savings: string;
}

export interface AuditRequestPayload {
  building_name: string;
  rep_name: string;
  phone: string;
  consent: boolean;
  building_type?: 'apartments' | 'school' | 'commercial' | 'hospital' | 'others';
  city?: string;
  attr1?: string;
  attr2?: string;
  rep_role?: string;
  scopes?: string[];
  timeframe?: string;
  notes?: string;
}

export interface AuditRequestResponse {
  ref_code: string;
  message?: string;
  error?: string;
}

export interface EstimatorCalculation {
  area: number;
  rate: number;
  buildingType: string;
  attributeValue: number;
  minCost: number;
  maxCost: number;
  timelineWeeks: number;
}
