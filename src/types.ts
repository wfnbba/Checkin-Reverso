export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

export interface PhaseItem {
  number: number;
  title: string;
  quote: string;
  intro: string;
  image: string;
  items: string[];
}

export interface StepItem {
  number: number;
  image: string;
  title: string;
  description: string;
}
