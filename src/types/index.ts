export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  featured?: boolean;
}

export interface Clase {
  id: string;
  name: string;
  instructor: string;
  schedule: string;
  capacity: number;
}

export interface Beneficio {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Instalacion {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type NavItem = {
  label: string;
  path: string;
};
