export type Theme = 'light' | 'dark';

export interface NavLink {
    label: string;
    href: string;
}

export interface Product {
    name: string;
    category: string;
    description: string;
    useCases: string[];
    technicalHighlights: string[];
}

export interface Service {
    name: string;
    description: string;
    targetAudience: string;
    businessValue: string;
    deliverables: string[];
}

export interface CaseStudy {
    industry: string;
    company: string;
    problem: string;
    solution: string;
    results: {
        metric: string;
        value: string;
    }[];
}

export interface JobListing {
    title: string;
    department: string;
    location: string;
    experienceLevel: string;
    responsibilities: string[];
}

export interface OfficeLocation {
    city: string;
    address: string;
    country: string;
}
