import {
  CircleDollarSign,
  Database,
  Globe2,
  LockKeyhole,
  Network,
  Server,
  Boxes,
  Zap,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Architecture", href: "#architecture" },
  { label: "Providers", href: "#providers" },
  { label: "Cloud tools", href: "#tools" },
  { label: "FAQs", href: "#faq" },
];

export const BENEFITS = [
  {
    icon: Zap,
    title: "Scale when you need to",
    text: "Adjust computing resources to match real demand instead of buying for your busiest day.",
  },
  {
    icon: Globe2,
    title: "Reach users everywhere",
    text: "Deploy applications closer to the people who use them with a global network of regions.",
  },
  {
    icon: LockKeyhole,
    title: "Build with security in mind",
    text: "Use identity controls, encryption, backups, and monitoring as part of your cloud design.",
  },
  {
    icon: CircleDollarSign,
    title: "Use resources efficiently",
    text: "Start small, measure usage, and pay for the services and capacity your workloads require.",
  },
];

export const SERVICE_MODELS = [
  {
    tag: "IaaS",
    title: "Infrastructure as a Service",
    description:
      "Rent virtual machines, networking, and storage. You control the operating system and applications.",
    example: "Good for: custom environments and lift-and-shift workloads",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    alt: "Rows of illuminated server racks in a data center",
  },
  {
    tag: "PaaS",
    title: "Platform as a Service",
    description:
      "Deploy your code on a managed platform while the provider handles much of the underlying infrastructure.",
    example: "Good for: building and shipping web applications",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    alt: "Developer workspace with a laptop and code editor",
  },
  {
    tag: "SaaS",
    title: "Software as a Service",
    description:
      "Use complete applications over the internet. The provider manages the app, updates, and infrastructure.",
    example: "Good for: email, collaboration, and business tools",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85",
    alt: "A bright shared workspace with desks and chairs",
  },
];

export const PROVIDERS = [
  {
    initials: "AWS",
    name: "Amazon Web Services",
    description:
      "A broad cloud platform with services for compute, storage, databases, analytics, and more.",
    color: "bg-orange-50 text-orange-700",
  },
  {
    initials: "Az",
    name: "Microsoft Azure",
    description:
      "Cloud services for application hosting, data, AI, and organizations using Microsoft tools.",
    color: "bg-sky-50 text-sky-700",
  },
  {
    initials: "G",
    name: "Google Cloud",
    description:
      "Cloud infrastructure and managed services for data analytics, AI, and modern applications.",
    color: "bg-emerald-50 text-emerald-700",
  },
];

export const DEPLOYMENT_MODELS = [
  {
    icon: Globe2,
    title: "Public cloud",
    description:
      "A provider operates shared infrastructure and makes services available over the internet.",
  },
  {
    icon: LockKeyhole,
    title: "Private cloud",
    description:
      "Cloud infrastructure is dedicated to one organization for greater control over its environment.",
  },
  {
    icon: Network,
    title: "Hybrid cloud",
    description:
      "Public cloud services work alongside private infrastructure or on-premises systems.",
  },
];

export const ARCHITECTURE_COMPONENTS = [
  { icon: Server, label: "Compute", detail: "Runs application code" },
  { icon: Boxes, label: "Storage", detail: "Keeps files and backups" },
  { icon: Database, label: "Database", detail: "Organizes application data" },
  { icon: Network, label: "Networking", detail: "Connects services and users" },
];

export const STARTER_STEPS = [
  {
    number: "01",
    title: "Learn the building blocks",
    text: "Get familiar with compute, storage, networking, identity, and databases.",
  },
  {
    number: "02",
    title: "Choose a service model",
    text: "Decide how much of the infrastructure you want to manage: IaaS, PaaS, or SaaS.",
  },
  {
    number: "03",
    title: "Plan for security and cost",
    text: "Set access permissions, configure backups, and estimate resource usage before launch.",
  },
  {
    number: "04",
    title: "Build a small project",
    text: "Try deploying a simple website, then add a database, monitoring, and a backup plan.",
  },
];

export const COST_RATES = {
  computePerHour: 0.04,
  storagePerGb: 0.02,
  transferPerGb: 0.09,
};

export const QUIZ_QUESTIONS = [
  {
    question: "Which service model gives you the most control over the OS?",
    options: ["SaaS", "PaaS", "IaaS"],
    answer: 2,
    explanation:
      "IaaS provides virtualized infrastructure; you manage the operating system and applications.",
  },
  {
    question: "What is object storage commonly used for?",
    options: [
      "Files, media, and backups",
      "Running CPU instructions",
      "Replacing network routing",
    ],
    answer: 0,
    explanation:
      "Object storage is designed for durable, scalable storage of files, media, and backup data.",
  },
  {
    question: "What is a good first step for cloud security?",
    options: [
      "Share one admin account",
      "Apply least-privilege access",
      "Disable monitoring",
    ],
    answer: 1,
    explanation:
      "Least privilege limits each identity to only the access it needs.",
  },
];

export const SECURITY_CHECKS = [
  { id: "identity", label: "Enable multi-factor authentication" },
  { id: "permissions", label: "Give users only the access they need" },
  { id: "backups", label: "Back up important data and test recovery" },
  { id: "monitoring", label: "Turn on logging and usage alerts" },
];

export const FAQ_ITEMS = [
  {
    question: "Is the cloud just someone else's computer?",
    answer:
      "At its foundation, cloud computing runs on physical computers in data centers. What makes it cloud computing is on-demand access, shared resource pools, automation, and managed services delivered over a network.",
  },
  {
    question: "Do I need to choose just one cloud provider?",
    answer:
      "No. Many teams use one provider, while others use multiple providers or combine public cloud with their own infrastructure. Each extra environment adds operational complexity, so start with the needs of your workload.",
  },
  {
    question: "Is cloud computing always cheaper?",
    answer:
      "Not automatically. Cloud services can reduce upfront hardware costs and let you scale capacity, but inefficient or unused resources still cost money. Monitor usage, set budgets, and review your architecture regularly.",
  },
  {
    question: "What is the difference between a region and an availability zone?",
    answer:
      "A region is a geographic area where a provider operates cloud resources. Availability zones are separate locations within a region, designed to help applications remain available if one location has a problem.",
  },
];

export const CLOUD_GLOSSARY = [
  {
    term: "Region",
    definition: "A geographic area where a cloud provider operates infrastructure.",
  },
  {
    term: "Virtual machine",
    definition: "A software-based computer that runs on a physical host.",
  },
  {
    term: "Availability",
    definition: "The degree to which a service is ready and accessible when needed.",
  },
  {
    term: "Autoscaling",
    definition: "Automatically adding or removing capacity as demand changes.",
  },
];
