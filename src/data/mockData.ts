export type InternshipStatus = 'published' | 'draft' | 'closed';
export type ApplicationStatus = 'pending' | 'reviewing' | 'accepted' | 'rejected';
export type ContractType = 'Stage' | 'Alternance' | 'Apprentissage';

export interface Internship {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  duration: string;
  contractType: ContractType;
  domain: string;
  salary: string;
  postedDate: string;
  deadline: string;
  status: InternshipStatus;
  applicants: number;
  description: string;
  tags: string[];
  remote: boolean;
}

export interface Application {
  id: string;
  studentName: string;
  studentAvatar: string;
  internshipTitle: string;
  company: string;
  appliedDate: string;
  status: ApplicationStatus;
  matchScore: number;
  level: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  contact: string;
  email: string;
  activeOffers: number;
  totalHires: number;
  rating: number;
  partnership: 'Premium' | 'Standard' | 'Nouveau';
}

export interface ActivityItem {
  id: string;
  type: 'application' | 'accepted' | 'offer' | 'company' | 'message' | 'review';
  message: string;
  time: string;
  user: string;
}

export const internships: Internship[] = [
  {
    id: 'INT-001',
    title: 'Développeur Front-End React',
    company: 'TechNova',
    companyLogo: 'TN',
    location: 'Paris, France',
    duration: '6 mois',
    contractType: 'Stage',
    domain: 'Développement Web',
    salary: '1 200 € / mois',
    postedDate: '2026-09-20',
    deadline: '2026-10-15',
    status: 'published',
    applicants: 24,
    description: 'Rejoignez notre équipe pour développer des interfaces modernes avec React et TypeScript. Vous travaillerez sur des projets clients variés.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    remote: true,
  },
  {
    id: 'INT-002',
    title: 'Ingénieur Data Science',
    company: 'DataSphere',
    companyLogo: 'DS',
    location: 'Lyon, France',
    duration: '5 mois',
    contractType: 'Stage',
    domain: 'Data & IA',
    salary: '1 400 € / mois',
    postedDate: '2026-09-18',
    deadline: '2026-10-10',
    status: 'published',
    applicants: 31,
    description: 'Analyse de grands volumes de données, création de modèles prédictifs et visualisation de données métier.',
    tags: ['Python', 'Pandas', 'Machine Learning', 'SQL'],
    remote: false,
  },
  {
    id: 'INT-003',
    title: 'Chef de Projet Digital',
    company: 'Agilix',
    companyLogo: 'AG',
    location: 'Bordeaux, France',
    duration: '12 mois',
    contractType: 'Alternance',
    domain: 'Gestion de projet',
    salary: '1 000 € / mois',
    postedDate: '2026-09-15',
    deadline: '2026-10-20',
    status: 'published',
    applicants: 18,
    description: 'Coordonnez des projets digitaux transverses, de la conception à la livraison, en lien avec les équipes techniques et marketing.',
    tags: ['Agile', 'Scrum', 'Jira', 'Conduite du changement'],
    remote: true,
  },
  {
    id: 'INT-004',
    title: 'UX/UI Designer',
    company: 'PixelCraft',
    companyLogo: 'PC',
    location: 'Nantes, France',
    duration: '4 mois',
    contractType: 'Stage',
    domain: 'Design',
    salary: '1 100 € / mois',
    postedDate: '2026-09-22',
    deadline: '2026-10-25',
    status: 'published',
    applicants: 42,
    description: 'Concevez des expériences utilisateur intuitives pour nos produits SaaS. Maquettes, prototypes et tests utilisateurs.',
    tags: ['Figma', 'Prototyping', 'Design System', 'User Research'],
    remote: true,
  },
  {
    id: 'INT-005',
    title: 'Cybersécurité Analyst',
    company: 'SecureNet',
    companyLogo: 'SN',
    location: 'Lille, France',
    duration: '6 mois',
    contractType: 'Stage',
    domain: 'Sécurité IT',
    salary: '1 300 € / mois',
    postedDate: '2026-09-10',
    deadline: '2026-09-30',
    status: 'closed',
    applicants: 56,
    description: 'Audit de sécurité, analyse de vulnérabilités et mise en place de solutions de protection des systèmes d\'information.',
    tags: ['Pentest', 'SIEM', 'ISO 27001', 'Network Security'],
    remote: false,
  },
  {
    id: 'INT-006',
    title: 'Marketing Digital Junior',
    company: 'BrandWave',
    companyLogo: 'BW',
    location: 'Marseille, France',
    duration: '6 mois',
    contractType: 'Stage',
    domain: 'Marketing',
    salary: '900 € / mois',
    postedDate: '2026-09-25',
    deadline: '2026-11-05',
    status: 'published',
    applicants: 15,
    description: 'Pilotez les campagnes marketing digitales, SEO/SEA, et animez les réseaux sociaux de l\'entreprise.',
    tags: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
    remote: true,
  },
  {
    id: 'INT-007',
    title: 'Développeur Backend Node.js',
    company: 'TechNova',
    companyLogo: 'TN',
    location: 'Paris, France',
    duration: '5 mois',
    contractType: 'Stage',
    domain: 'Développement Web',
    salary: '1 250 € / mois',
    postedDate: '2026-09-23',
    deadline: '2026-10-30',
    status: 'draft',
    applicants: 0,
    description: 'Développez des API REST et GraphQL, optimisez les performances et participez à l\'architecture de nos services.',
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'GraphQL'],
    remote: true,
  },
  {
    id: 'INT-008',
    title: 'Ingénieur DevOps',
    company: 'CloudEdge',
    companyLogo: 'CE',
    location: 'Toulouse, France',
    duration: '12 mois',
    contractType: 'Apprentissage',
    domain: 'Infrastructure & Cloud',
    salary: '1 500 € / mois',
    postedDate: '2026-09-21',
    deadline: '2026-10-18',
    status: 'published',
    applicants: 27,
    description: 'Automatisez les déploiements, gérez l\'infrastructure cloud (AWS/Azure) et mettez en place des pipelines CI/CD.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD'],
    remote: true,
  },
];

export const applications: Application[] = [
  {
    id: 'APP-001',
    studentName: 'Lucas Martin',
    studentAvatar: 'LM',
    internshipTitle: 'Développeur Front-End React',
    company: 'TechNova',
    appliedDate: '2026-09-24',
    status: 'reviewing',
    matchScore: 92,
    level: 'Master 2 Informatique',
  },
  {
    id: 'APP-002',
    studentName: 'Emma Dubois',
    studentAvatar: 'ED',
    internshipTitle: 'UX/UI Designer',
    company: 'PixelCraft',
    appliedDate: '2026-09-23',
    status: 'accepted',
    matchScore: 88,
    level: 'Master 1 Design',
  },
  {
    id: 'APP-003',
    studentName: 'Hugo Lefebvre',
    studentAvatar: 'HL',
    internshipTitle: 'Ingénieur Data Science',
    company: 'DataSphere',
    appliedDate: '2026-09-22',
    status: 'pending',
    matchScore: 76,
    level: 'Master 2 Data Science',
  },
  {
    id: 'APP-004',
    studentName: 'Chloé Bernard',
    studentAvatar: 'CB',
    internshipTitle: 'Chef de Projet Digital',
    company: 'Agilix',
    appliedDate: '2026-09-21',
    status: 'reviewing',
    matchScore: 84,
    level: 'Master 1 Management',
  },
  {
    id: 'APP-005',
    studentName: 'Nathan Petit',
    studentAvatar: 'NP',
    internshipTitle: 'Développeur Backend Node.js',
    company: 'TechNova',
    appliedDate: '2026-09-20',
    status: 'rejected',
    matchScore: 61,
    level: 'Licence 3 Informatique',
  },
  {
    id: 'APP-006',
    studentName: 'Léa Moreau',
    studentAvatar: 'LM',
    internshipTitle: 'Marketing Digital Junior',
    company: 'BrandWave',
    appliedDate: '2026-09-26',
    status: 'pending',
    matchScore: 79,
    level: 'Master 1 Marketing',
  },
  {
    id: 'APP-007',
    studentName: 'Tom Roux',
    studentAvatar: 'TR',
    internshipTitle: 'Ingénieur DevOps',
    company: 'CloudEdge',
    appliedDate: '2026-09-25',
    status: 'reviewing',
    matchScore: 90,
    level: 'Master 2 Réseaux & Systèmes',
  },
  {
    id: 'APP-008',
    studentName: 'Camille Fontaine',
    studentAvatar: 'CF',
    internshipTitle: 'Cybersécurité Analyst',
    company: 'SecureNet',
    appliedDate: '2026-09-15',
    status: 'accepted',
    matchScore: 95,
    level: 'Master 2 Sécurité SI',
  },
];

export const companies: Company[] = [
  {
    id: 'CO-001',
    name: 'TechNova',
    logo: 'TN',
    industry: 'Technologie / Logiciel',
    location: 'Paris, France',
    contact: 'Sophie Marchand',
    email: 'rh@technova.fr',
    activeOffers: 3,
    totalHires: 12,
    rating: 4.8,
    partnership: 'Premium',
  },
  {
    id: 'CO-002',
    name: 'DataSphere',
    logo: 'DS',
    industry: 'Data & Intelligence Artificielle',
    location: 'Lyon, France',
    contact: 'Marc Olivier',
    email: 'stages@datasphere.fr',
    activeOffers: 2,
    totalHires: 8,
    rating: 4.6,
    partnership: 'Premium',
  },
  {
    id: 'CO-003',
    name: 'Agilix',
    logo: 'AG',
    industry: 'Conseil & Transformation',
    location: 'Bordeaux, France',
    contact: 'Julie Renard',
    email: 'contact@agilix.fr',
    activeOffers: 1,
    totalHires: 5,
    rating: 4.3,
    partnership: 'Standard',
  },
  {
    id: 'CO-004',
    name: 'PixelCraft',
    logo: 'PC',
    industry: 'Design & Création',
    location: 'Nantes, France',
    contact: 'Antoine Leroy',
    email: 'recrutement@pixelcraft.fr',
    activeOffers: 2,
    totalHires: 9,
    rating: 4.7,
    partnership: 'Premium',
  },
  {
    id: 'CO-005',
    name: 'SecureNet',
    logo: 'SN',
    industry: 'Cybersécurité',
    location: 'Lille, France',
    contact: 'Isabelle Garnier',
    email: 'rh@securenet.fr',
    activeOffers: 1,
    totalHires: 6,
    rating: 4.5,
    partnership: 'Standard',
  },
  {
    id: 'CO-006',
    name: 'BrandWave',
    logo: 'BW',
    industry: 'Marketing & Communication',
    location: 'Marseille, France',
    contact: 'Kevin Dupont',
    email: 'stages@brandwave.fr',
    activeOffers: 1,
    totalHires: 4,
    rating: 4.1,
    partnership: 'Nouveau',
  },
  {
    id: 'CO-007',
    name: 'CloudEdge',
    logo: 'CE',
    industry: 'Cloud & Infrastructure',
    location: 'Toulouse, France',
    contact: 'Nathalie Simon',
    email: 'recrutement@cloudedge.fr',
    activeOffers: 2,
    totalHires: 7,
    rating: 4.4,
    partnership: 'Standard',
  },
];

export const activityFeed: ActivityItem[] = [
  {
    id: 'ACT-001',
    type: 'application',
    message: 'Léa Moreau a postulé à « Marketing Digital Junior »',
    time: 'Il y a 2 heures',
    user: 'LM',
  },
  {
    id: 'ACT-002',
    type: 'accepted',
    message: 'Camille Fontaine a été acceptée chez SecureNet',
    time: 'Il y a 5 heures',
    user: 'CF',
  },
  {
    id: 'ACT-003',
    type: 'offer',
    message: 'Nouvelle offre publiée : « Marketing Digital Junior »',
    time: 'Il y a 1 jour',
    user: 'BW',
  },
  {
    id: 'ACT-004',
    type: 'company',
    message: 'BrandWave a rejoint la plateforme en tant que partenaire',
    time: 'Il y a 2 jours',
    user: 'BW',
  },
  {
    id: 'ACT-005',
    type: 'review',
    message: 'Lucas Martin est en cours d\'évaluation chez TechNova',
    time: 'Il y a 2 jours',
    user: 'LM',
  },
  {
    id: 'ACT-006',
    type: 'message',
    message: 'PixelCraft a envoyé un message à Emma Dubois',
    time: 'Il y a 3 jours',
    user: 'PC',
  },
];

export const dashboardStats = [
  {
    label: 'Offres actives',
    value: 6,
    change: '+2 cette semaine',
    trend: 'up' as const,
    icon: 'briefcase',
    color: 'primary',
  },
  {
    label: 'Candidatures',
    value: 213,
    change: '+34 ce mois',
    trend: 'up' as const,
    icon: 'fileText',
    color: 'accent',
  },
  {
    label: 'Étudiants placés',
    value: 51,
    change: '+8 ce mois',
    trend: 'up' as const,
    icon: 'graduationCap',
    color: 'emerald',
  },
  {
    label: 'Entreprises partenaires',
    value: 7,
    change: '+1 ce mois',
    trend: 'up' as const,
    icon: 'building',
    color: 'amber',
  },
];

export const contractTypeColors: Record<ContractType, string> = {
  'Stage': 'bg-primary-50 text-primary-700 border-primary-200',
  'Alternance': 'bg-accent-50 text-accent-700 border-accent-200',
  'Apprentissage': 'bg-violet-50 text-violet-700 border-violet-200',
};

export const statusColors: Record<InternshipStatus, string> = {
  published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  draft: 'bg-slate-100 text-slate-600 border-slate-200',
  closed: 'bg-rose-50 text-rose-700 border-rose-200',
};

export const applicationStatusConfig: Record<ApplicationStatus, { label: string; color: string; dot: string }> = {
  pending: { label: 'En attente', color: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  reviewing: { label: 'En évaluation', color: 'bg-primary-50 text-primary-700 border-primary-200', dot: 'bg-primary-500' },
  accepted: { label: 'Acceptée', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
  rejected: { label: 'Refusée', color: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-500' },
};

export const partnershipColors: Record<Company['partnership'], string> = {
  'Premium': 'bg-primary-600 text-white',
  'Standard': 'bg-slate-200 text-slate-700',
  'Nouveau': 'bg-accent-100 text-accent-700',
};
