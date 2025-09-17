import linkedinProfilePicture from "./assets/images/linkedin-profile-picture.jpeg";

const logotext = "Suraj Sharma";
const meta = {
  title: "Suraj Sharma",
  description:
    "Lead Software Engineer and Project Manager delivering scalable digital experiences across cloud, mobile, and enterprise platforms.",
};

const introdata = {
  title: "I’m Suraj Sharma",
  animated: {
    first: "Lead Software Engineer & Project Manager",
    second: "Building resilient cloud-native platforms",
    third: "Championing people, process, and product",
  },
  description:
    "Motivated and adaptable professional with 5+ years delivering high-impact software, guiding teams end-to-end, and thriving in fast-moving environments across Canada, the UK, and Denmark.",
  your_img_url: linkedinProfilePicture,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I blend engineering leadership, hands-on development, and client partnership to ship secure, scalable software. With experience spanning product delivery, guest services, and business analysis, I adapt quickly, communicate clearly, and keep teams focused on outcomes. Certified in Professional Scrum Master I, Azure Fundamentals, AWS Partner Accreditation (Technical) & Cloud Economics, and Scrum for Operations & DevOps, I back execution with disciplined delivery practices. University of Kent Computer Science graduate with a triple-distinction Software Development diploma from Derby College.",
};

const worktimeline = [
  {
    jobtitle: "Lead Software Engineer & Project Manager (Owner)",
    where: "Suessy · Calgary, Canada",
    date: "Jul 2025 – Present",
  },
  {
    jobtitle: "Software Developer Consultant / Senior Consultant",
    where: "Netcompany · Copenhagen & London",
    date: "Apr 2022 – May 2025",
  },
  {
    jobtitle: ".NET Engineer & Support Specialist",
    where: "Tata Consultancy Services · London, United Kingdom",
    date: "Sep 2021 – Mar 2022",
  },
  {
    jobtitle: "Full Stack Web Developer",
    where: "Alphageek · Derby, United Kingdom",
    date: "Jun 2021 – Sep 2021",
  },
  {
    jobtitle: "Technical Business Analyst",
    where: "Elanco · Basingstoke, United Kingdom",
    date: "Jul 2019 – Jul 2020",
  },
  {
    jobtitle: "Sales Assistant",
    where: "Boots | Walgreens Company · Derby, United Kingdom",
    date: "Sep 2014 – Sep 2017",
  },
];

const skills = [
  {
    name: "React Native & Mobile Delivery",
    value: 90,
  },
  {
    name: "Java Spring Boot & Microservices",
    value: 92,
  },
  {
    name: "Cloud Architecture (AWS & Azure)",
    value: 88,
  },
  {
    name: "Agile Product Leadership",
    value: 95,
  },
  {
    name: "Data & Event-Driven Systems",
    value: 87,
  },
  {
    name: "Client & Stakeholder Engagement",
    value: 93,
  },
];

const services = [
  {
    title: "Product & Delivery Leadership",
    description:
      "End-to-end roadmap, sprint, and release ownership that keeps teams aligned on value, scope, and delivery.",
  },
  {
    title: "Cloud-Native Platform Engineering",
    description:
      "Designing resilient microservices with Java Spring Boot, Docker, PostgreSQL, and event-driven orchestration.",
  },
  {
    title: "Mobile & Web Application Development",
    description:
      "Building user-focused experiences with React Native, modern web stacks, and integrated backend services.",
  },
];

const dataportfolio = [
  {
    slug: "suessy-ios-platform",
    title: "Suessy iOS Platform",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description:
      "Suessy iOS platform: spearheaded React Native app development backed by Spring Boot microservices and cloud-native infrastructure.",
    overview:
      "Built the first release of Suessy’s concierge-style travel companion app, delivering itinerary sharing and in-destination chat.",
    role:
      "Led a 4-person pod (React Native, Spring Boot, DevOps, Product) from discovery through production launch.",
    challenges:
      "Ship an MVP in 10 weeks while integrating hotel PMS data and payment workflows.",
    outcomes:
      "App Store soft launch in Calgary with 200 pilot users; 98% crash-free sessions; onboarding reduced from 15 to 6 minutes.",
    stack: [
      "React Native",
      "Redux Toolkit",
      "Java Spring Boot",
      "AWS Fargate",
      "PostgreSQL",
      "Terraform",
    ],
    link: "#",
  },
  {
    slug: "hmrc-digital-services",
    title: "HMRC Digital Customer Services",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    description:
      "HMRC Digital Customer Services: led Netcompany delivery streams, aligning stakeholders and delivering scalable services for millions of UK taxpayers.",
    overview:
      "Orchestrated cross-team delivery of citizen-facing services supporting tax submissions and identity verification for millions of UK residents.",
    role:
      "Led multiple Netcompany workstreams; collaborated with HMRC product owners, security, and infrastructure teams.",
    challenges:
      "Align service design with stringent compliance, ensure performance under peak seasonal loads, and migrate legacy APIs.",
    outcomes:
      "Released a re-platformed service layer handling 5M+ monthly interactions with sub-300ms API latency and improved CSAT scores by 12%.",
    stack: [
      "Java microservices",
      "Azure API Management",
      "Azure DevOps Pipelines",
      "Splunk",
      "React",
    ],
    link: "#",
  },
  {
    slug: "cloud-cost-optimisation",
    title: "Cloud Cost Optimisation Initiative",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    description:
      "Cloud cost optimisation: reduced AWS spend by 25% via performance tuning and right-sized infrastructure across production workloads.",
    overview:
      "Drove a cost-efficiency programme across AWS estates covering analytics, customer portals, and CI/CD workloads.",
    role:
      "Partnered with platform engineering and finance stakeholders; analysed utilisation data and proposed a savings roadmap.",
    challenges:
      "Maintain reliability while reducing spend, coordinate changes across globally distributed teams.",
    outcomes:
      "Achieved 25% OPEX savings by implementing autoscaling policies, reserved instances, and storage tiering.",
    stack: [
      "AWS Cost Explorer",
      "CloudWatch",
      "AWS Lambda",
      "Terraform",
      "Grafana",
    ],
    link: "#",
  },
  {
    slug: "operational-enablement",
    title: "Operational Enablement Playbooks",
    img: "https://images.unsplash.com/photo-1603573355547-23c94af74cf0",
    description:
      "Operational enablement: created technical documentation and onboarding playbooks that accelerated team ramp-up and knowledge transfer.",
    overview:
      "Produced technical onboarding assets and SOPs for new product squads across the organisation.",
    role:
      "Sole author/editor working with subject-matter experts; facilitated workshops to capture tribal knowledge.",
    challenges:
      "Standardise processes while keeping guidance adaptable to varied product lines.",
    outcomes:
      "Reduced onboarding ramp-up time by roughly 40%, improved internal audit readiness scores, and created a living knowledge base.",
    stack: [
      "Confluence",
      "Miro",
      "Loom",
      "Azure DevOps",
    ],
    link: "#",
  },
  {
    slug: "retail-customer-engagement",
    title: "Retail & Customer Engagement",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Retail & customer engagement: delivered high-touch service, merchandising, and sales support across Boots / Walgreens locations.",
    overview:
      "Delivered frontline support and merchandising across Boots / Walgreens locations while hitting weekly sales KPIs.",
    role:
      "Collaborated with pharmacists, beauty consultants, and supply teams to optimise product placement and customer journeys.",
    challenges:
      "Manage inventory turns, adapt to promotional cycles, and maintain compliance with regulated products.",
    outcomes:
      "Top-quartile regional mystery shopper scores, accelerated seasonal campaign setups, trained new associates on POS systems.",
    stack: [
      "Oracle Retail",
      "POS terminals",
      "Inventory analytics dashboards",
    ],
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "suraj.sharma1998@yahoo.com",
  YOUR_FONE: "+1 (587) 576-4213",
  description:
    "Based in Calgary, AB (T2J6M7). Let’s connect on building resilient products, optimising operations, or exploring new opportunities across tech and business.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/suraj200981",
  linkedin: "#",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
