export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  image?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

// 1. Projects Data
const projects: Project[] = [
  {
    id: 1,
    title: "Website Restoran Dapur Malioboro",
    category: "Web Dev",
    description:"A full-featured e-commerce platform with cart, payment gateway, and admin panel.",
    tech: ["Next.js", "React", "Tailwind CSS", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
]

// 2. Data Skills
const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 70 },
      { name: "Express.js", level: "Intermediate", percentage: 75 },
      { name: "MySQL", level: "Intermediate", percentage: 80 },
      { name: "RESTful API Development", level: "Intermediate", percentage: 80 },
    ],
  },
  {
    title: "Tools & Platform",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 85 },
      { name: "Figma (UI/UX)", level: "Intermediate", percentage: 70 },
      { name: "Postman", level: "Advanced", percentage: 80 },
      { name: "VS Code", level: "Advanced", percentage: 95 },
    ],
  },
];

// 3. Data Sertifikat
const certificates: Certificate[] = [
  {
    id: 1,
    title: "AI CLASS ASEAN",
    issuer: "ASEAN FOUNDATION",
    date: "July 2026",
    credentialId: "Asean foundation",
    verificationUrl: "https://www.aiclassasean.org/certificate/eyJpdiI6Ik5wMG9MUHRYYzJtaVBwMndYK3FEeFE9PSIsInZhbHVlIjoiWWhycExMZGk2VlYrbjZNMEFwRVNQdz09IiwibWFjIjoiZTIyNjBiZTZjZjc5MWQzMjllYzMyMWQ4YTAxZTRmNzc2ZjQ3OWE5ZDY2YzU1YmZkYzdkZjkxYzA3OTM2YzJmNyIsInRhZyI6IiJ9?v=1",
    image: "/certif.png",
  },
  
  {
    id: 2,
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "Juni 2026",
    credentialId: "Cisco",
    verificationUrl: "https://drive.google.com/file/d/16IXy_pbdKWRi6H6lwE98E8u2oOXZ932h/view?usp=sharing",
    image: "/sertif.png",
  },
  {
    id: 3,
    title: "Medali Perak",
    issuer: "Olimpiade Solidaritas Pelajar Nasional 5.1",
    date: "Mei 2026",
    credentialId: "https://drive.google.com/file/d/13pQgAap3Os-gQMtd0gCTO3YwwtfXOjx9/view?usp=drivesdk",
    verificationUrl: "#",
  },
];

// 4. Data Testimoni
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Farid Mawardi S Pd",
    role: "Kepala Jurusan RPL",
    company: "SMK Telkom Makassar",
    avatar: "👨‍🏫",
    stars: 5,
    quote:
      "Nabil menunjukkan performa luar biasa dalam setiap tugas dan proyek sekolah. Dia selalu menjadi leader dalam team project karena inisiatif dan tanggung jawabnya yang tinggi.",
  },
  {
    id: 2,
    name: "Aufa Safaraz Prianda",
    role: "Teman Sekolah / Ketua Kelas",
    company: "XII RPL 1",
    avatar: "🧑‍💻",
    stars: 5,
    quote:
      "Belajar kelompok bareng Nabil selalu asik. Dia pintar menjelaskan konsep pemrograman yang susah dengan bahasa yang gampang dimengerti oleh teman-teman.",
  },
  {
    id: 3,
    name: "Oktavian",
    role: "Guru Produktif RPL",
    company: "SMK Telkom Makassar",
    avatar: "👩‍🏫",
    stars: 5,
    quote:
      "Pemahaman Nabil terhadap framework Next.js dan Tailwind CSS v4 di usianya sekarang sangat mengagumkan. Proyek-proyeknya dikerjakan dengan detail dan rapi.",
  },
];

// Simulasi delay untuk skeleton loading
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProjects(): Promise<Project[]> {
  await delay(1200);
  return projects;
}

export async function getSkills(): Promise<SkillGroup[]> {
  await delay(1000);
  return skillGroups;
}

export async function getCertificates(): Promise<Certificate[]> {
  await delay(1200);
  return certificates;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(1000);
  return testimonials;
}